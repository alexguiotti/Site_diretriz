import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 selection:bg-accent selection:text-white">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main Gradient Base */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>

                {/* Animated Glowing Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-light/20 rounded-full blur-[120px]"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]"
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-blue-400 text-sm font-medium mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Líder em Distribuição de Autopeças
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight text-white"
                    >
                        Potência para <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                            mover o seu negócio
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
                    >
                        Mais do que peças, entregamos soluções. Conecte-se ao maior ecossistema de reposição automotiva e tenha acesso a tecnologia, velocidade e precisão.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap justify-center md:justify-start gap-4 mb-10"
                    >
                        {["Linha Leve", "Linha Pesada", "Utilitários"].map((line, i) => (
                            <div key={i} className="px-4 py-2 bg-slate-800/50 text-slate-200 rounded-lg border border-slate-700/50 backdrop-blur-sm flex items-center gap-2 text-sm font-medium hover:bg-slate-700/50 transition-colors cursor-default">
                                <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-accent' : 'bg-blue-500'}`}></div>
                                {line}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="https://wa.me/556232994488"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-1"
                        >
                            Falar com Consultor
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#categories"
                            className="group w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 hover:border-slate-500 backdrop-blur-sm"
                        >
                            Ver Catálogo
                        </a>
                    </motion.div>
                </div>

                {/* Floating Cards / Visual Interest */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="relative"
                    >
                        {/* Abstract Geometric Composition */}
                        <div className="relative z-10 grid gap-6">
                            {[
                                { icon: Zap, title: "Envio Expresso", val: "24h", color: "text-amber-400" },
                                { icon: Truck, title: "Cobertura", val: "Nacional", color: "text-blue-400" },
                                { icon: Shield, title: "Garantia", val: "100%", color: "text-green-400" }
                            ].map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: -10 }}
                                    className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl flex items-center gap-4 w-64 ml-auto shadow-2xl"
                                >
                                    <div className={`p-3 rounded-xl bg-slate-700/50 ${card.color}`}>
                                        <card.icon size={24} />
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold">{card.title}</div>
                                        <div className="text-white font-bold text-lg">{card.val}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
