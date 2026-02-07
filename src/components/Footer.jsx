import React from "react";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    const whatsappNumber = "573144375899";
    const getWhatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <footer className="bg-[#0B132B] text-white pt-16 pb-8" id="contacto">
            <div className="container mx-auto px-4">
                {/* Mobile-first stacked layout */}
                <div className="space-y-12 mb-12">
                    {/* Brand & Social - Centered on mobile */}
                    <div className="text-center space-y-6">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-extrabold font-heading text-primary">
                                PULGAS
                            </span>
                            <span className="text-xs font-bold tracking-[0.2em] text-cyan-400">
                                CENTRO VETERINARIO
                            </span>
                        </div>
                        <p className="text-neutral-400 max-w-sm mx-auto text-sm leading-relaxed">
                            Dedicados a la salud y bienestar de tus compañeros de vida con tecnología de punta y amor incondicional.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a
                                href="https://instagram.com/pulgasvalledupar2"
                                target="_blank"
                                className="bg-white/10 p-4 rounded-full hover:bg-primary transition-all hover:scale-110"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="#"
                                className="bg-white/10 p-4 rounded-full hover:bg-primary transition-all hover:scale-110"
                            >
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact CTA - Prominent on mobile */}
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 backdrop-blur-sm text-center">
                        <h4 className="text-xl font-bold mb-3 font-heading text-primary">
                            ¿Emergencia Veterinaria?
                        </h4>
                        <p className="text-neutral-400 mb-6 text-sm">
                            Estamos disponibles 24/7 para atender a tu mascota.
                        </p>
                        <a
                            href={getWhatsappLink("Hola, tengo una emergencia veterinaria.")}
                            target="_blank"
                            className="flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white py-4 px-6 rounded-xl font-bold transition-all hover:scale-105 shadow-lg mx-auto w-full max-w-xs"
                        >
                            <Phone size={20} /> +57 314 437 5899
                        </a>
                        <div className="flex items-center justify-center gap-2 text-neutral-400 text-sm mt-4">
                            <Mail size={16} /> info@veterinariapulgas.com
                        </div>
                    </div>

                    {/* Quick Links - Grid on larger screens */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <h4 className="text-lg font-bold mb-4 font-heading text-primary">Explora</h4>
                            <div className="flex flex-col space-y-3 text-neutral-400 text-sm">
                                <a href="#hero" className="hover:text-primary transition-colors py-1">
                                    Inicio
                                </a>
                                <a href="#servicios" className="hover:text-primary transition-colors py-1">
                                    Servicios
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 font-heading text-primary">Conoce</h4>
                            <div className="flex flex-col space-y-3 text-neutral-400 text-sm">
                                <a href="#sedes" className="hover:text-primary transition-colors py-1">
                                    Ubicaciones
                                </a>
                                <a href="#why-choose-us" className="hover:text-primary transition-colors py-1">
                                    Nosotros
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 font-heading text-primary">Legal</h4>
                            <div className="flex flex-col space-y-3 text-neutral-400 text-sm">
                                <a href="#" className="hover:text-primary transition-colors py-1">
                                    Privacidad
                                </a>
                                <a href="#" className="hover:text-primary transition-colors py-1">
                                    Términos
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 font-heading text-primary">Contacto</h4>
                            <div className="flex flex-col space-y-3 text-neutral-400 text-sm">
                                <a href="tel:+573144375899" className="hover:text-primary transition-colors py-1">
                                    WhatsApp
                                </a>
                                <a href="mailto:info@veterinariapulgas.com" className="hover:text-primary transition-colors py-1">
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center">
                    <p className="text-neutral-500 text-sm">
                        &copy; 2026 Veterinaria Pulgas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
