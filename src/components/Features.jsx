import React from 'react';
import { Truck, Settings, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            icon: <Truck size={40} className="text-primary" />,
            title: "Logística Inteligente",
            description: "Algoritmos de rota otimizados para entrega expressa em todo o território nacional."
        },
        {
            icon: <Settings size={40} className="text-accent" />,
            title: "Peças Certificadas",
            description: "Rastreabilidade total e garantia de procedência das melhores marcas globais."
        },
        {
            icon: <Headset size={40} className="text-primary-light" />,
            title: "Suporte Especializado",
            description: "Consultores técnicos disponíveis em tempo real para auxiliar na sua compra."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="features" className="py-16 relative bg-white overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Por que escolher a <span className="text-accent">Diretriz</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Tecnologia de ponta aplicada à distribuição de autopeças para impulsionar o seu negócio.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="tech-card p-8 rounded-2xl group relative overflow-hidden bg-white border border-slate-200 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/10"></div>

                            <div className="mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-blue-100 group-hover:border-blue-200 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
