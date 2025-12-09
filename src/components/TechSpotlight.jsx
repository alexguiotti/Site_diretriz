import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, MapPin } from 'lucide-react';

const HIGHLIGHT_AREAS = [
    { title: "LINHA PESADA", subtitle: "Caminhões e Ônibus" },
    { title: "ELÉTRICA", subtitle: "Alternadores e Partida" },
    { title: "ILUMINAÇÃO", subtitle: "LED e Halógenas" },
    { title: "INJEÇÃO", subtitle: "Eletrônica Avançada" },
    { title: "ACESSÓRIOS", subtitle: "Linha Completa" }
];

const TechSpotlight = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HIGHLIGHT_AREAS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

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
                                    { icon: Package, text: "Estoque Pronta-Entrega", sub: "Mais de 15.000 itens disponíveis" },
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

                    {/* Visual Side - Typography Animation */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative w-full aspect-square max-w-md mx-auto">
                                {/* Abstract Background Elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-full opacity-50 blur-3xl"></div>

                                <div className="relative h-full bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 group hover:border-accent/20 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                    {/* Animated Text Content */}
                                    <div className="relative z-10 w-full text-center">
                                        <div className="h-32 flex items-center justify-center">
                                            <motion.div
                                                key={currentIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="flex flex-col items-center"
                                            >
                                                <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                                                    {HIGHLIGHT_AREAS[currentIndex].title}
                                                </h3>
                                                <p className="text-slate-500 font-medium text-lg uppercase tracking-widest">
                                                    {HIGHLIGHT_AREAS[currentIndex].subtitle}
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Progress Indicators */}
                                        <div className="flex justify-center gap-3 mt-12">
                                            {HIGHLIGHT_AREAS.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-slate-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative floating badges */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-8 right-8 text-primary/10"
                                    >
                                        <Package size={48} />
                                    </motion.div>
                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                        className="absolute bottom-8 left-8 text-accent/10"
                                    >
                                        <Truck size={48} />
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
