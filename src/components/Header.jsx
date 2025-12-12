import React from 'react';
import { UserCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const Header = ({ onLoginClick }) => {
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

                {/* Login Button */}
                <div>
                    <button
                        onClick={onLoginClick}
                        className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                        <UserCircle size={20} />
                        Área do Colaborador
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
