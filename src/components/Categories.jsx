import React from 'react';
import { Disc, Activity, Zap, Battery, Wrench } from 'lucide-react';

const Categories = () => {
    const categories = [
        { name: "Freios", icon: <Disc size={32} />, count: "1200+ itens", color: "bg-blue-500" },
        { name: "Suspensão", icon: <Activity size={32} />, count: "850+ itens", color: "bg-orange-500" },
        { name: "Motor", icon: <SettingsIcon size={32} />, count: "2300+ itens", color: "bg-slate-700" },
        { name: "Elétrica", icon: <Zap size={32} />, count: "1500+ itens", color: "bg-yellow-500" },
        { name: "Acessórios", icon: <Wrench size={32} />, count: "500+ itens", color: "bg-green-500" },
    ];

    // Helper component for the Motor icon since we used Settings in Features
    function SettingsIcon({ size, className }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        );
    }

    return (
        <section id="categories" className="py-16 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Categorias</h2>
                        <p className="text-slate-300 text-lg max-w-xl">Encontre exatamente o que seu veículo precisa em nosso catálogo completo.</p>
                    </div>
                    <a href="#" className="flex items-center text-accent font-bold hover:text-white transition-colors group">
                        Ver catálogo completo <ArrowRightIcon size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                            <div className={`w-14 h-14 ${cat.color} rounded-xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-white text-xl mb-2">{cat.name}</h3>
                            <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{cat.count}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-accent font-semibold hover:text-white transition-colors">
                        Ver todo o catálogo <ArrowRightIcon size={20} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

function ArrowRightIcon({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    )
}

export default Categories;
