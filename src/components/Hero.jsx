import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
            {/* Background Image with Overlay */}
            {/* Background with Abstract Pattern */}
            <div className="absolute inset-0 z-0 bg-slate-50">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>
                <div className="absolute right-0 bottom-0 -z-10 h-[310px] w-[310px] rounded-full bg-accent/5 opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-slate-900"
                    >
                        O futuro da <br />
                        <span className="text-primary-light">reposição automotiva</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
                    >
                        Conectando tecnologia e logística para entregar mais de 15.000 itens com precisão e velocidade. A evolução do seu negócio começa aqui.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-3 mb-10"
                    >
                        {["Linha Leve", "Linha Média", "Linha Pesada"].map((line, i) => (
                            <span key={i} className="px-4 py-2 bg-blue-50 text-primary-light rounded-lg font-semibold text-sm border border-blue-100 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent"></span>
                                {line}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <a
                            href="https://wa.me/556232994488"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Falar com Especialista
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#categories"
                            className="group w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-primary/30"
                        >
                            Ver Catálogo
                        </a>
                    </motion.div>

                    {/* Stats/Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-10 border-t border-slate-200 max-w-2xl"
                    >
                        {[
                            { icon: Zap, label: "Entrega Flash", desc: "Logística otimizada" },
                            { icon: Shield, label: "Garantia Total", desc: "Produtos originais" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                <div className="p-3 bg-blue-50 rounded-lg text-primary">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-slate-900 font-semibold">{item.label}</h3>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
