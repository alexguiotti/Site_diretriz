import React from 'react';
import { LayoutDashboard, Package, Users, Settings, LogOut, BarChart3 } from 'lucide-react';
import logo from '../assets/logo.png';

const DashboardLayout = ({ children, onLogout, activeView, onViewChange }) => {
    return (
        <div className="flex h-screen bg-slate-100">
            {/* Sidebar */}
            <aside className="w-64 bg-primary text-white hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-700">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Diretriz Automotiva Logo" className="h-8 w-auto" />
                        <span className="text-lg font-bold tracking-tight">Diretriz Automotiva</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <SidebarItem
                        icon={<LayoutDashboard size={20} />}
                        label="Visão Geral"
                        active={activeView === 'overview'}
                        onClick={() => onViewChange('overview')}
                    />
                    <SidebarItem
                        icon={<Users size={20} />}
                        label="Fornecedores"
                        active={activeView === 'suppliers'}
                        onClick={() => onViewChange('suppliers')}
                    />
                    <SidebarItem icon={<BarChart3 size={20} />} label="Vendas" />
                    <SidebarItem icon={<Package size={20} />} label="Estoque" />
                    <SidebarItem icon={<Settings size={20} />} label="Configurações" />
                </nav>

                <div className="p-4 border-t border-slate-700">
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-800 w-full p-3 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Sair</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
                    <div className="font-bold text-primary">Diretriz Automotiva</div>
                    <button onClick={onLogout} className="text-slate-500"><LogOut size={20} /></button>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${active
            ? 'bg-accent text-white font-medium'
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

export default DashboardLayout;
