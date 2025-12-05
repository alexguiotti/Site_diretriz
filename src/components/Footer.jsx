import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer id="footer" className="bg-primary text-slate-300 py-12 border-t border-slate-700">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={logo} alt="Diretriz Automotiva Logo" className="h-10 w-auto rounded-xl" />
                            <span className="text-xl font-bold text-white tracking-tight">Diretriz Automotiva</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Sua parceira confiável em distribuição de autopeças. Qualidade e agilidade para o seu negócio.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/diretriz_automotiva/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Navegação</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="hover:text-accent transition-colors">Início</a></li>
                            <li><a href="#features" className="hover:text-accent transition-colors">Destaques</a></li>
                            <li><a href="#categories" className="hover:text-accent transition-colors">Catálogo</a></li>
                            <li><a href="#suppliers" className="hover:text-accent transition-colors">Fornecedores</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors">Sobre Nós</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Produtos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Freios</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Suspensão</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Motor</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Elétrica</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Acessórios</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contato</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-0.5" />
                                <span>R. João Alfredo, N° 447 - Quadra 61 Lote 15<br />Capuava, Goiânia - GO, 74450-340</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent" />
                                <span>(62) 3299-4488</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent" />
                                <a href="mailto:vendas@diretrizdistribuidora.com.br" className="hover:text-accent transition-colors">vendas@diretrizdistribuidora.com.br</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Diretriz Automotiva. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
