import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { Stethoscope, Microscope, HeartPulse, Scan, Waves, Syringe, Sparkles, Home, Scissors } from "lucide-react";

const Services = () => {
    const services = [
        { title: "Consultas", icon: Stethoscope, category: "Medical", color: "red", description: "Atención médica profesional para el bienestar de tu mascota." },
        { title: "Laboratorio Clínico", icon: Microscope, category: "Diagnostic", color: "blue", description: "Diagnósticos precisos con equipos de última generación." },
        { title: "Cirugía General", icon: HeartPulse, category: "Medical", color: "red", description: "Procedimientos seguros con monitoreo constante." },
        { title: "Rayos X Digitales", icon: Scan, category: "Diagnostic", color: "blue", description: "Imágenes de alta resolución para diagnósticos inmediatos." },
        { title: "Ecografía", icon: Waves, category: "Diagnostic", color: "blue", description: "Estudios no invasivos para evaluación detallada de órganos." },
        { title: "Vacunación", icon: Syringe, category: "Medical", color: "red", description: "Esquemas completos de prevención para proteger a tu mascota." },
        { title: "Profilaxis Dental", icon: Sparkles, category: "Medical", color: "yellow", description: "Limpieza profunda para mantener la salud bucal." },
        { title: "Guardería", icon: Home, category: "Care", color: "yellow", description: "Un espacio seguro y divertido para socializar." },
        { title: "Peluquería & Spa", icon: Scissors, category: "Care", color: "yellow", description: "Estética profesional con productos de alta calidad." },
    ];

    const whatsappNumber = "573144375899";
    const getWhatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const items = services.map(service => ({
        title: service.title,
        description: service.description,
        icon: service.icon,
        color: service.color,
        category: service.category,
        link: getWhatsappLink(`Hola, me gustaría recibir más información sobre el servicio de ${service.title}.`),
        className: service.category === 'Medical' ? 'border-l-4 border-l-red-500 bg-gradient-to-br from-red-50/50 to-transparent dark:from-red-900/10 dark:to-transparent' : service.category === 'Diagnostic' ? 'border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent' : 'border-l-4 border-l-yellow-500 bg-gradient-to-br from-yellow-50/50 to-transparent dark:from-yellow-900/10 dark:to-transparent'
    }));

    return (
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden" id="servicios">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-4 mb-4 text-center relative z-10">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Atención Integral</span>
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-heading">Nuestros Servicios</h2>
                <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">Brindamos soluciones médicas y de bienestar de primer nivel con tecnología de vanguardia.</p>
            </div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <HoverEffect items={items} />
            </div>
        </section>
    );
};

export default Services;
