import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-tl-3xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-br-3xl"></div>
                            <iframe
                                src="https://maps.google.com/maps?q=Diretriz%20Distribuidora%20de%20Pe%C3%A7as%20Automotivas%20Goi%C3%A2nia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl shadow-2xl w-full h-[400px] relative z-10 bg-slate-100"
                                title="Localização Diretriz Automotiva"
                            ></iframe>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Mais de 5 anos de experiência no mercado
                        </h2>
                        <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                            A Diretriz Automotiva nasceu com a missão de simplificar a reposição automotiva para oficinas e revendedores.
                            Entendemos que cada minuto com um carro parado no elevador custa dinheiro, por isso investimos pesado
                            em logística e tecnologia.
                        </p>
                        <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                            Hoje, somos referência em Goiás, conectando as melhores marcas do mundo aos profissionais que movem a região.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-accent" size={24} />
                                <span className="text-primary font-medium">Centro de distribuição com 5000m²</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-accent" size={24} />
                                <span className="text-primary font-medium">Equipe de vendas técnica e especializada</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-accent" size={24} />
                                <span className="text-primary font-medium">Parceria direta com fabricantes globais</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
