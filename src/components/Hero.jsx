import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, Star, ShieldCheck, Heart } from "lucide-react";

const Hero = () => {
    const whatsappNumber = "573144375899";
    const getWhatsappLink = (message) =>
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 overflow-hidden flex items-center pt-36 pb-20 lg:pt-28 lg:pb-20">
            {/* Organic Background Shapes */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-red-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 h-full">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center lg:text-left flex flex-col items-center lg:items-start pt-10 lg:pt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-red-100 text-primary font-bold text-xs uppercase tracking-wider mb-8"
                    >
                        <Heart size={14} className="fill-primary" /> Medicina Veterinaria con Amor
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-neutral-800 leading-[1.1] mb-6 font-heading tracking-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            Cuidamos a quien <br />
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                            className="text-primary relative inline-block"
                        >
                            más amas
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="text-lg md:text-xl text-neutral-600 mb-10 max-w-lg leading-relaxed"
                    >
                        Un equipo de expertos apasionados por la salud de tu mascota.
                        Tecnología avanzada y trato humano en cada consulta.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={getWhatsappLink("Hola, quiero agendar una cita para mi mascota.")}
                            target="_blank"
                            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-2xl bg-primary hover:bg-primary-hover text-white font-bold text-lg transition-all transform shadow-xl shadow-red-200 w-full sm:w-auto"
                        >
                            <Calendar size={20} /> Agendar Cita
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+573000000000"
                            className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 font-bold text-lg transition-all w-full sm:w-auto"
                        >
                            <Phone size={20} /> Urgencias 24/7
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="mt-12 flex items-center gap-4 text-sm font-medium text-neutral-500"
                    >
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i, index) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 1.7 + index * 0.1 }}
                                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm"
                                >
                                    <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Client" className="w-full h-full object-cover" />
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 2.1 }}
                            className="text-left"
                        >
                            <div className="flex items-center gap-1 text-yellow-500 mb-0.5">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <p>Miles de <span className="font-bold text-neutral-800">familias felices</span>.</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Emotional Image & Badges */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative mt-8 lg:mt-0"
                >
                    {/* Main Image with Soft Mask */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-100/50 border-[6px] border-white aspect-[4/5] lg:aspect-square"
                    >
                        <img
                            src="/assets/hero-video.webp"
                            alt="Veterinaria interactuando con mascota"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Floating Badges Container */}
                    <div className="flex flex-row justify-center gap-4 mt-6 w-full lg:w-auto lg:block lg:mt-0 lg:static">
                        {/* Floating Badge 1: Rating */}
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="relative lg:absolute lg:top-8 lg:-left-12 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 z-20 flex items-center gap-3"
                        >
                            <div className="bg-yellow-50 p-2.5 rounded-lg text-yellow-600">
                                <Star size={20} fill="currentColor" />
                            </div>
                            <div>
                                <div className="font-bold text-neutral-800 text-base">4.9/5</div>
                                <div className="text-xs text-neutral-500 font-medium">Google Reviews</div>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2: Certified */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                            whileHover={{ scale: 1.05, y: 10 }}
                            className="relative lg:absolute lg:bottom-10 lg:-right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 z-20 flex items-center gap-3"
                        >
                            <div className="bg-green-50 p-2.5 rounded-lg text-green-600">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-neutral-800 text-base">Certificado</div>
                                <div className="text-xs text-neutral-500 font-medium">Hospital Clase A</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
