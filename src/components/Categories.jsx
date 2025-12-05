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
        <section id="categories" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Categorias</h2>
                        <p className="text-secondary">Encontre exatamente o que você precisa</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-accent font-semibold hover:text-orange-600 transition-colors">
                        Ver todo o catálogo <ArrowRightIcon size={20} className="ml-2" />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer border border-slate-100 group">
                            <div className={`w-12 h-12 ${cat.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-primary text-lg">{cat.name}</h3>
                            <p className="text-sm text-slate-500 mt-1">{cat.count}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-accent font-semibold hover:text-orange-600 transition-colors">
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
