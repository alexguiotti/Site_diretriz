import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, ExternalLink } from 'lucide-react';
import { api } from '../services/api';

const SuppliersManager = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ name: '', url: '', logoUrl: '' });

    useEffect(() => {
        loadSuppliers();
    }, []);

    const loadSuppliers = async () => {
        const data = await api.getSuppliers();
        setSuppliers(data);
    };

    const handleAdd = async () => {
        await api.addSupplier(formData);
        setFormData({ name: '', url: '', logoUrl: '' });
        setIsAdding(false);
        loadSuppliers();
    };

    const handleUpdate = async (id) => {
        await api.updateSupplier(id, formData);
        setEditingId(null);
        setFormData({ name: '', url: '', logoUrl: '' });
        loadSuppliers();
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja remover este fornecedor?')) {
            await api.deleteSupplier(id);
            loadSuppliers();
        }
    };

    const startEdit = (supplier) => {
        setEditingId(supplier.id);
        setFormData({ name: supplier.name, url: supplier.url, logoUrl: supplier.logoUrl || '' });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-primary">Gerenciar Fornecedores</h2>
                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-accent hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
                >
                    <Plus size={16} /> Adicionar Novo
                </button>
            </div>

            {isAdding && (
                <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200 animate-in fade-in slide-in-from-top-2">
                    <h3 className="font-bold text-slate-700 mb-3">Novo Fornecedor</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Nome da Empresa"
                            className="p-2 border rounded"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="URL do Site (http://...)"
                            className="p-2 border rounded"
                            value={formData.url}
                            onChange={e => setFormData({ ...formData, url: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="URL do Logo (Opcional)"
                            className="p-2 border rounded"
                            value={formData.logoUrl}
                            onChange={e => setFormData({ ...formData, logoUrl: e.target.value })}
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button onClick={() => setIsAdding(false)} className="text-slate-500 hover:text-slate-700 px-3 py-1">Cancelar</button>
                        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Salvar</button>
                    </div>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                        <tr>
                            <th className="p-3 font-medium">Logo</th>
                            <th className="p-3 font-medium">Nome</th>
                            <th className="p-3 font-medium">Site</th>
                            <th className="p-3 font-medium text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {suppliers.map(supplier => (
                            <tr key={supplier.id} className="hover:bg-slate-50 group">
                                <td className="p-3">
                                    {editingId === supplier.id ? (
                                        <input
                                            className="p-1 border rounded w-full"
                                            value={formData.logoUrl}
                                            placeholder="URL do Logo"
                                            onChange={e => setFormData({ ...formData, logoUrl: e.target.value })}
                                        />
                                    ) : (
                                        <div className="w-10 h-10 bg-white border rounded flex items-center justify-center p-1">
                                            {/* Simple preview logic */}
                                            <img
                                                src={supplier.logoUrl || `https://logo.clearbit.com/${new URL(supplier.url).hostname.replace('www.', '')}`}
                                                alt={supplier.name}
                                                className="max-w-full max-h-full object-contain"
                                                onError={(e) => e.target.style.display = 'none'}
                                            />
                                        </div>
                                    )}
                                </td>
                                <td className="p-3 font-medium text-slate-700">
                                    {editingId === supplier.id ? (
                                        <input
                                            className="p-1 border rounded w-full"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    ) : supplier.name}
                                </td>
                                <td className="p-3 text-slate-500">
                                    {editingId === supplier.id ? (
                                        <input
                                            className="p-1 border rounded w-full"
                                            value={formData.url}
                                            onChange={e => setFormData({ ...formData, url: e.target.value })}
                                        />
                                    ) : (
                                        <a href={supplier.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent hover:underline">
                                            {supplier.url} <ExternalLink size={12} />
                                        </a>
                                    )}
                                </td>
                                <td className="p-3 text-right">
                                    {editingId === supplier.id ? (
                                        <div className="flex justify-end gap-2">
                                            <button onClick={() => handleUpdate(supplier.id)} className="text-green-600 hover:bg-green-50 p-1 rounded"><Save size={18} /></button>
                                            <button onClick={() => setEditingId(null)} className="text-slate-400 hover:bg-slate-100 p-1 rounded"><X size={18} /></button>
                                        </div>
                                    ) : (
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={() => startEdit(supplier)} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><Edit2 size={18} /></button>
                                            <button onClick={() => handleDelete(supplier.id)} className="text-red-600 hover:bg-red-50 p-1 rounded"><Trash2 size={18} /></button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SuppliersManager;
