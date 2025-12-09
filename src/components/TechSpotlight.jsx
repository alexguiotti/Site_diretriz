import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin } from 'lucide-react';

const TechSpotlight = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-6">
                                <Truck size={16} />
                                <span>Logística Inteligente</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Referência em <br />
                                <span className="text-primary-light">Distribuição Automotiva</span>
                            </h2>

                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Mais do que peças, entregamos soluções. Nossa infraestrutura logística conecta as melhores fábricas diretamente ao seu negócio com agilidade e precisão.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    { icon: Package, text: "Estoque Pronta-Entrega", sub: "Mais de 50.000 itens disponíveis" },
                                    { icon: MapPin, text: "Cobertura Regional", sub: "Entregas diárias em todo o estado" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                        <div className="p-2 rounded-lg bg-blue-50 text-primary">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900 font-semibold">{item.text}</h4>
                                            <p className="text-slate-500 text-sm">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual/Image Side */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-10 blur-2xl -rotate-6"></div>
                                <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-2 shadow-xl overflow-hidden">
                                    <div className="w-full h-full bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                        <div className="relative z-10 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-slate-100">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-primary mb-1">50k+</div>
                                                <div className="text-xs text-slate-500 font-medium">ITENS ADICIONADOS</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Tech Badges */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-6 right-6 bg-white/90 backdrop-blur-md border border-slate-200 p-3 rounded-lg shadow-lg"
                                    >
                                        <Package size={24} className="text-primary" />
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-lg shadow-lg"
                                    >
                                        <span className="text-primary font-mono text-sm font-bold">ENTREGA RÁPIDA</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSpotlight;
