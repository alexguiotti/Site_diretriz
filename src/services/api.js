const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const getAuthHeaders = () => {
    const token = localStorage.getItem('authToken');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    };
};

export const api = {
    // Suppliers
    getSuppliers: async () => {
        const response = await fetch(`${API_URL}/suppliers`);
        return response.json();
    },
    addSupplier: async (supplier) => {
        const response = await fetch(`${API_URL}/suppliers`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(supplier),
        });
        if (!response.ok) throw new Error('Falha ao adicionar fornecedor');
        return response.json();
    },
    updateSupplier: async (id, supplier) => {
        const response = await fetch(`${API_URL}/suppliers/${id}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(supplier),
        });
        if (!response.ok) throw new Error('Falha ao atualizar fornecedor');
        return response.json();
    },
    deleteSupplier: async (id) => {
        const response = await fetch(`${API_URL}/suppliers/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error('Falha ao remover fornecedor');
        return response.json();
    },

    // Auth
    login: async (email, password) => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) throw new Error('Login failed');

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('authToken', data.token);
        }
        return data;
    },

    logout: () => {
        localStorage.removeItem('authToken');
    }
};
