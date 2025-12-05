import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Erro: MONGODB_URI não definida no arquivo .env');
    // Não encerra o processo para permitir que o usuário veja o erro, mas a API vai falhar nas chamadas de banco
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

// Login Endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Hardcoded admin for simplicity/bootstrap
    // Em produção real, você usaria um UserSchema e hash de senha (bcrypt)
    if (email === 'admin@diretriz.com' && password === '123') {
        res.json({
            success: true,
            token: 'fake-jwt-token-production',
            user: { name: 'Administrador', email: 'admin@diretriz.com' }
        });
    } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
});

// Get Suppliers
app.get('/suppliers', async (req, res) => {
    try {
        const suppliers = await Supplier.find().sort({ createdAt: -1 });
        res.json(suppliers);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar fornecedores', error });
    }
});

// Add Supplier
app.post('/suppliers', async (req, res) => {
    try {
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.json(newSupplier);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar fornecedor', error });
    }
});

// Update Supplier
app.put('/suppliers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSupplier = await Supplier.findByIdAndUpdate(id, req.body, { new: true });

        if (updatedSupplier) {
            res.json(updatedSupplier);
        } else {
            res.status(404).json({ message: 'Fornecedor não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar fornecedor', error });
    }
});

// Delete Supplier
app.delete('/suppliers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Supplier.findByIdAndDelete(id);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover fornecedor', error });
    }
});

// Health Check (para serviços de hospedagem saberem que está rodando)
app.get('/', (req, res) => {
    res.send('API Autopecas-Pro rodando!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
