import React from "react";
import { Heart, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const TrustSection = () => {
    const features = [
        {
            title: "Especialistas Senior",
            description: "Equipo médico con años de experiencia en cirugías complejas y diagnósticos precisos.",
            image: "/assets/Especialistas Senior .webp",
            icon: <Award className="w-6 h-6 text-primary" />,
        },
        {
            title: "Amor Incondicional",
            description: "Tratamos a cada paciente como si fuera nuestro, con ternura, paciencia y dedicación.",
            image: "/assets/amorincondicional.webp",
            icon: <Heart className="w-6 h-6 text-red-500" />,
        },
        {
            title: "Monitoreo 24/7",
            description: "Tus mascotas nunca están solas. Contamos con personal veterinario las 24 horas.",
            image: "/assets/monitoreo.webp",
            icon: <Clock className="w-6 h-6 text-blue-500" />,
        },
    ];

    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden" id="why-choose-us">
            {/* Background Pattern */}
            <div className="absolute inset-0 h-full w-full bg-neutral-50 dark:bg-neutral-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Por qué elegirnos</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 font-heading leading-tight">
                        Excelencia Veterinaria <br className="hidden md:block" /> con <span className="text-primary">Calidez Humana</span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        Combinamos la mejor tecnología médica con un trato amoroso para garantizar el bienestar integral de tu compañero de vida.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ title, description, icon, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-neutral-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-800 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-neutral-900/90 p-2 rounded-full backdrop-blur-sm shadow-md z-20">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default TrustSection;
