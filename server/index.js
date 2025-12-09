import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import fs from 'fs/promises';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'db.json');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta_super_segura_dev';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Helper to read DB
const readDb = async () => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading db.json:', error);
        return { suppliers: [], users: [] };
    }
};

// Helper to write DB
const writeDb = async (data) => {
    try {
        await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing db.json:', error);
    }
};

// Auth Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido ou expirado.' });
        req.user = user;
        next();
    });
};

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Simple check against hardcoded val or db users. 
    // Using hardcoded for simplicity as per original requirement or check db users
    const db = await readDb();
    const user = db.users.find(u => u.username === email || u.username === 'admin'); // Allow 'admin' username too

    if ((email === 'admin@diretriz.com' && password === '123') || (user && user.password === password)) {
        const userData = { name: user ? user.name : 'Administrador', email: email, role: 'admin' };
        const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '8h' });

        res.json({
            success: true,
            token,
            user: userData
        });
    } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
});

// Get Suppliers (Public)
app.get('/suppliers', async (req, res) => {
    try {
        const db = await readDb();
        res.json(db.suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar fornecedores', error });
    }
});

// Add Supplier (Protected)
app.post('/suppliers', authenticateToken, async (req, res) => {
    try {
        const { name, url, logo } = req.body;
        // Basic Validation
        if (!name || !url) {
            return res.status(400).json({ message: 'Nome e URL são obrigatórios.' });
        }

        const db = await readDb();
        const newSupplier = {
            id: Date.now(), // Simple ID generation
            name,
            url,
            logo: logo || '' // Optional logo since we use fetching
        };

        db.suppliers.push(newSupplier);
        await writeDb(db);

        res.json(newSupplier);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar fornecedor', error });
    }
});

// Update Supplier (Protected)
app.put('/suppliers/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, url, logo } = req.body;

        const db = await readDb();
        const index = db.suppliers.findIndex(s => s.id == id || s._id == id);

        if (index !== -1) {
            db.suppliers[index] = { ...db.suppliers[index], name, url, logo };
            await writeDb(db);
            res.json(db.suppliers[index]);
        } else {
            res.status(404).json({ message: 'Fornecedor não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar fornecedor', error });
    }
});

// Delete Supplier (Protected)
app.delete('/suppliers/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const db = await readDb();
        const filteredSuppliers = db.suppliers.filter(s => s.id != id && s._id != id);

        if (db.suppliers.length !== filteredSuppliers.length) {
            db.suppliers = filteredSuppliers;
            await writeDb(db);
            res.json({ success: true });
        } else {
            res.status(404).json({ message: 'Fornecedor não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover fornecedor', error });
    }
});

// Health Check
app.get('/', (req, res) => {
    res.send('API Autopecas-Pro rodando com segurança (JSON Mode)!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
