import React from 'react';
import { Menu, X, UserCircle } from 'lucide-react';
import logo from '../assets/logo.png';

import { motion } from 'framer-motion';

const Header = ({ onLoginClick }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Diretriz Automotiva Logo" className="h-16 w-auto rounded-xl" />
                    <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary">Diretriz Automotiva</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {['Início', 'Destaques', 'Catálogo', 'Fornecedores', 'Sobre', 'Contato'].map((item) => (
                        <a
                            key={item}
                            href={`#${item === 'Início' ? 'home' : item === 'Destaques' ? 'features' : item === 'Catálogo' ? 'categories' : item === 'Fornecedores' ? 'suppliers' : item === 'Sobre' ? 'about' : 'footer'}`}
                            className="text-slate-600 hover:text-accent font-medium transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Login Button (Desktop) */}
                <div className="hidden md:block">
                    <button
                        onClick={onLoginClick}
                        className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                        <UserCircle size={20} />
                        Área do Colaborador
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-800 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white border-t border-slate-200 shadow-lg"
                >
                    <div className="flex flex-col p-4 space-y-4">
                        {['Início', 'Destaques', 'Catálogo', 'Fornecedores', 'Sobre', 'Contato'].map((item) => (
                            <a
                                key={item}
                                href={`#${item === 'Início' ? 'home' : item === 'Destaques' ? 'features' : item === 'Catálogo' ? 'categories' : item === 'Fornecedores' ? 'suppliers' : item === 'Sobre' ? 'about' : 'footer'}`}
                                className="text-slate-600 hover:text-accent transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                onLoginClick();
                                setIsMenuOpen(false);
                            }}
                            className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full font-semibold w-full flex justify-center items-center gap-2 shadow-md"
                        >
                            <UserCircle size={20} />
                            Área do Colaborador
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
