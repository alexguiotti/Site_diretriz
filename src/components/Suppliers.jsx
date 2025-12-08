import React, { useState, useEffect } from 'react';
import { ExternalLink, ImageOff } from 'lucide-react';
import { api } from '../services/api';

// Function to get domain from URL for logo fetching
const getDomain = (url) => {
    try {
        const domain = new URL(url).hostname;
        return domain.replace('www.', '');
    } catch (e) {
        return '';
    }
};

const SupplierCard = ({ supplier }) => {
    const [imageError, setImageError] = useState(false);
    const domain = getDomain(supplier.url);
    // Use custom logo URL if provided, otherwise fallback to Clearbit
    const logoUrl = supplier.logoUrl || `https://logo.clearbit.com/${domain}`;

    return (
        <a
            href={supplier.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-72 h-48 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between mx-6 group relative overflow-hidden"
            title={supplier.name}
        >
            <div className="flex-1 w-full flex items-center justify-center p-6">
                {!imageError ? (
                    <img
                        src={logoUrl}
                        alt={`${supplier.name} logo`}
                        className="max-w-full max-h-20 object-contain transition-all duration-300 group-hover:scale-110"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        <ImageOff size={32} className="mb-2" />
                    </div>
                )}
            </div>

            <div className="w-full py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                <span className="font-bold text-sm text-slate-700 group-hover:text-white transition-colors">{supplier.name}</span>
            </div>

            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-accent" />
            </div>
        </a>
    );
};

const DEFAULT_SUPPLIERS = [
    { name: 'Bosch', url: 'https://www.bosch.com.br', logoUrl: 'https://cdn.worldvectorlogo.com/logos/bosch.svg' },
    { name: 'Continental', url: 'https://www.continental.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/continental-3.svg' },
    { name: 'Delphi', url: 'https://www.delphiautoparts.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/delphi-2.svg' },
    { name: 'Valeo', url: 'https://www.valeo.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/valeo.svg' },
    { name: 'Magneti Marelli', url: 'https://www.magnetimarelli.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/magneti-marelli-1.svg' },
    { name: 'Schaeffler', url: 'https://www.schaeffler.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/schaeffler.svg' },
    { name: 'Monroe', url: 'https://www.monroe.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/monroe.svg' },
    { name: 'Pirelli', url: 'https://www.pirelli.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/pirelli.svg' },
    { name: 'Osram', url: 'https://www.osram.com.br', logoUrl: 'https://cdn.worldvectorlogo.com/logos/osram.svg' },
    { name: 'Hella', url: 'https://www.hella.com', logoUrl: 'https://cdn.worldvectorlogo.com/logos/hella-1.svg' },
    { name: 'ASX', url: 'https://www.asxiluminacao.com.br', logoUrl: 'https://asxiluminacao.com.br/wp-content/uploads/2023/06/logo-asx-header.png' },
    { name: 'Delco Remy', url: 'https://www.delcoremy.com.br', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Delco_Remy_Logo.svg/2560px-Delco_Remy_Logo.svg.png' },
    { name: 'Gauss', url: 'https://www.gauss.com.br', logoUrl: 'https://gauss.com.br/wp-content/uploads/2020/11/logo_gauss_novo.png' }
];

const Suppliers = () => {
    // Initialize with defaults so it shows up immediately
    const [suppliers, setSuppliers] = useState(DEFAULT_SUPPLIERS);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const data = await api.getSuppliers();
                // Only override defaults if we get a non-empty array from the API
                if (Array.isArray(data) && data.length > 0) {
                    setSuppliers(data);
                }
            } catch (error) {
                console.error("Failed to fetch suppliers, using defaults", error);
                // No need to set defaults here as they are already set
            }
        };
        fetchSuppliers();
    }, []);

    if (suppliers.length === 0) return null;

    return (
        <section id="suppliers" className="py-16 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">Nossos Parceiros</h2>
                <p className="text-slate-600">Trabalhamos com as marcas mais confiáveis do mercado automotivo.</p>
            </div>

            <div className="relative w-full pause-on-hover">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Container */}
                <div className="flex animate-marquee w-max">
                    {/* First set of items */}
                    <div className="flex items-center">
                        {suppliers.map((supplier, index) => (
                            <SupplierCard key={`s1-${index}`} supplier={supplier} />
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center">
                        {suppliers.map((supplier, index) => (
                            <SupplierCard key={`s2-${index}`} supplier={supplier} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suppliers;
