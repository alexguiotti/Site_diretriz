import React from 'react';
import { Construction, ArrowLeft } from 'lucide-react';

const UnderDevelopment = ({ onBack }) => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <Construction size={48} className="text-yellow-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Em Desenvolvimento</h1>

            <p className="text-xl text-slate-600 max-w-2xl mb-8 leading-relaxed">
                Estamos construindo algo incrível para você! <br />
                O painel administrativo está passando por melhorias para oferecer uma experiência ainda mais completa.
            </p>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-md w-full mb-8">
                <h3 className="font-bold text-primary mb-2">O que vem por aí?</h3>
                <ul className="text-left space-y-3 text-slate-600">
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Gestão completa de fornecedores
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Dashboard financeiro em tempo real
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Integração direta com Power BI
                    </li>
                </ul>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium"
            >
                <ArrowLeft size={20} />
                Voltar para o site
            </button>
        </div>
    );
};

export default UnderDevelopment;
