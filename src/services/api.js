const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = {
    // Suppliers
    getSuppliers: async () => {
        const response = await fetch(`${API_URL}/suppliers`);
        return response.json();
    },
    addSupplier: async (supplier) => {
        const response = await fetch(`${API_URL}/suppliers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(supplier),
        });
        return response.json();
    },
    updateSupplier: async (id, supplier) => {
        const response = await fetch(`${API_URL}/suppliers/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(supplier),
        });
        return response.json();
    },
    deleteSupplier: async (id) => {
        const response = await fetch(`${API_URL}/suppliers/${id}`, {
            method: 'DELETE',
        });
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
        return response.json();
    }
};
