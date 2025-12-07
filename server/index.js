import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'sua_chave_secreta_super_segura_dev';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Erro: MONGODB_URI não definida no arquivo .env');
} else {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('Conectado ao MongoDB com sucesso'))
        .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
}

// Schemas
const SupplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    logo: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Supplier = mongoose.model('Supplier', SupplierSchema);

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
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Hardcoded admin for simplicity/bootstrap
    if (email === 'admin@diretriz.com' && password === '123') {
        const user = { name: 'Administrador', email: 'admin@diretriz.com', role: 'admin' };
        const token = jwt.sign(user, JWT_SECRET, { expiresIn: '8h' });

        res.json({
            success: true,
            token,
            user
        });
    } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
});

// Get Suppliers (Public)
app.get('/suppliers', async (req, res) => {
    try {
        const suppliers = await Supplier.find().sort({ createdAt: -1 });
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar fornecedores', error });
    }
});

// Add Supplier (Protected)
app.post('/suppliers', authenticateToken, async (req, res) => {
    try {
        const { name, url, logo } = req.body;

        // Basic Validation
        if (!name || !url || !logo) {
            return res.status(400).json({ message: 'Todos os campos (nome, url, logo) são obrigatórios.' });
        }

        const newSupplier = new Supplier({ name, url, logo });
        await newSupplier.save();
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

        if (!name || !url || !logo) {
            return res.status(400).json({ message: 'Todos os campos (nome, url, logo) são obrigatórios.' });
        }

        const updatedSupplier = await Supplier.findByIdAndUpdate(id, { name, url, logo }, { new: true });

        if (updatedSupplier) {
            res.json(updatedSupplier);
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
        await Supplier.findByIdAndDelete(id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover fornecedor', error });
    }
});

// Health Check
app.get('/', (req, res) => {
    res.send('API Autopecas-Pro rodando com segurança!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
