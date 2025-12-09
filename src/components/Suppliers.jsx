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

    // Try Google's high-res favicon service first as it's very reliable for BR domains
    // If a custom logoUrl exists, use that instead
    const logoUrl = supplier.logoUrl || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

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
                        className="max-w-[80%] max-h-[80px] object-contain transition-all duration-300 group-hover:scale-110"
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                        <span className="font-bold text-xl">{supplier.name.substring(0, 2)}</span>
                        <ImageOff size={24} className="mt-2" />
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
    { name: 'ZM', url: 'https://www.zm.com.br' },
    { name: 'IKRO', url: 'https://www.ikro.com.br' },
    { name: 'Gauss', url: 'https://www.gauss.com.br' },
    { name: 'Delco Remy', url: 'https://www.delcoremy.com.br' },
    { name: 'Unifap', url: 'https://www.unifap.com.br' },
    { name: 'ASX', url: 'https://www.asxiluminacao.com.br' },
    { name: 'Bosch', url: 'https://www.bosch.com.br' },
    { name: 'Kostal', url: 'https://www.kostalbrasil.com.br' },
    { name: 'Marília', url: 'https://www.marilia-sa.com.br' },
    { name: 'DNI', url: 'https://www.dni.com.br' },
    { name: 'Euro', url: 'https://www.euroautomotive.com.br' },
    { name: 'Hella', url: 'https://www.hella.com' },
    { name: 'BZM', url: 'https://www.bzm.com.br' },
    { name: 'Turotest', url: 'https://www.turotest.com.br' },
    { name: 'Contacts', url: 'https://www.contacts.com.br' },
    { name: '3RHO', url: 'https://www.3rho.com.br' },
    { name: 'Osram', url: 'https://www.osram.com.br' },
    { name: 'MTE-Thomson', url: 'https://www.mte-thomson.com.br' },
    { name: 'Pradolux', url: 'https://www.pradolux.com.br' },
    { name: 'Dita', url: 'https://www.ditaauto.com.br' },
    { name: 'Ospina', url: 'https://www.ospina.com.br' },
    { name: 'Facobras', url: 'https://www.facobras.com.br' },
    { name: 'TSA', url: 'https://www.tsadobrasil.com.br' },
    { name: 'D\'Paula', url: 'https://www.dpaula.com.br' },
    { name: 'Rainha das Sete', url: 'https://www.rainhadasete.com.br' },
    { name: 'Cinap', url: 'https://www.cinap.com.br' },
    { name: 'DS', url: 'https://www.ds.ind.br' },
    { name: 'Schadek', url: 'https://www.schadek.com.br' },
    { name: 'Power', url: 'https://www.powerautomotiva.com.br' },
    { name: 'FAG', url: 'https://www.schaeffler.com.br' },
    { name: 'H3', url: 'https://www.h3imports.com' },
    { name: 'Fortluz', url: 'https://www.farois-fortluz.com.br' },
    { name: 'IVA', url: 'https://www.iva-autopecas.com.br' },
    { name: 'Snap-on', url: 'https://www.snapon.com.br' },
    { name: 'Marflex', url: 'https://www.marflex.com.br' },
    { name: 'Engatcar', url: 'https://www.engatcar.com.br' },
    { name: 'Forjisinter', url: 'https://www.forjisinter.com.br' },
    { name: 'Conex', url: 'https://www.conex.com.br' },
    { name: 'Bobinauto', url: 'https://www.bobinauto.com.br' },
    { name: 'TC Chicotes', url: 'https://www.tcchicotes.com.br' },
    { name: 'Destaque', url: 'https://www.destaque.com.br' },
    { name: 'Sinalsul', url: 'https://www.sinalsul.com.br' },
    { name: 'Autopoli', url: 'https://www.autopoli.com.br' },
    { name: 'Fiamm', url: 'https://www.fiamm.com' },
    { name: 'Hikari', url: 'https://www.hikarilampadas.com.br' },
    { name: 'Sulcarbon', url: 'https://www.sulcarbon.com.br' },
    { name: 'Paraflu', url: 'https://www.paraflu.com.br' },
    { name: 'Edaulo', url: 'https://www.edaulo.com.br' },
    { name: 'AMS', url: 'https://www.ams-osram.com' },
    { name: 'Wahler', url: 'https://www.wahler.com.br' },
    { name: 'Auto Impact', url: 'https://www.autoimpact.com.br' },
    { name: 'Sherman', url: 'https://www.sherman.com.br' },
    { name: 'Frontec', url: 'https://www.frontec.com.br' },
    { name: 'G.Busch', url: 'https://www.gbusch.com.br' },
    { name: 'Qualyten', url: 'https://www.qualyten.com.br' },
    { name: 'Granero', url: 'https://www.granero.com.br' },
    { name: 'Orbi Química', url: 'https://www.orbiquimica.com.br' },
    { name: 'Roltens', url: 'https://www.roltens.com.br' },
    { name: 'Ori', url: 'https://www.ori.com.br' }
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
        <section id="suppliers" className="py-16 bg-primary relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-primary"></div>
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <div className="container mx-auto px-4 mb-12 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Excelência Garantida pelos <span className="text-accent underline decoration-4 decoration-accent/30 underline-offset-4">Melhores Fabricantes</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Selecionamos rigorosamente marcas de excelência global para garantir que seu estoque tenha a máxima confiabilidade e performance que o mercado exige.
                </p>
            </div>

            <div className="relative w-full pause-on-hover">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

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
