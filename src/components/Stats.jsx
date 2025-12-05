import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users, Calendar, TrendingUp } from 'lucide-react';

const stats = [
    { icon: Package, value: "50k+", label: "Itens em Estoque", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { icon: Users, value: "1200+", label: "Oficinas Parceiras", color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
    { icon: Calendar, value: "5+", label: "Anos de Mercado", color: "text-slate-700", bg: "bg-slate-100", border: "border-slate-200" },
    { icon: TrendingUp, value: "98%", label: "Satisfação", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
];

const Stats = () => {
    return (
        <section className="py-10 relative z-10 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-lg transition-all group border border-slate-200 hover:-translate-y-1 duration-300"
                        >
                            <div className={`mb-3 p-3 rounded-full ${stat.bg} ${stat.border} border ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
