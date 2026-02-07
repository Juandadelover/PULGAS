import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = () => {
    const testimonials = [
        {
            quote:
                "La atención en la endoscopía de Toby fue increíble. ¡Gracias! Se nota el amor que tienen por los animales.",
            name: "María González",
            title: "Dueña de Toby (Schnauzer)",
        },
        {
            quote:
                "Los mejores equipos que he visto en Valledupar. Viajé desde lejos solo para que atendieran a Luna aquí.",
            name: "Carlos Ruiz",
            title: "Dueño de Luna (Golden)",
        },
        {
            quote: "Excelente servicio de guardería. Mi perro siempre llega feliz y cansado de tanto jugar. Muy recomendado.",
            name: "Ana Martínez",
            title: "Dueña de Rocky (Beagle)",
        },
        {
            quote: "Salvaron a mi gata cuando otros veterinarios no daban esperanza. Estaré eternamente agradecida.",
            name: "Lucía Pérez",
            title: "Dueña de Misha (Siamesa)",
        },
        {
            quote: "La peluquería es impecable. Dejaron a mi Max hermoso y con un olor delicioso.",
            name: "Jorge Díaz",
            title: "Dueño de Max (Poodle)",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden" id="testimonials">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 mb-12 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading bg-gradient-to-r from-white via-primary/90 to-secondary/90 bg-clip-text text-transparent">
                    Mimados y Dueños Felices
                </h2>
                <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
                    Lo que dicen quienes confían en nosotros el cuidado de sus mejores amigos.
                </p>
            </div>
            <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
};

export default Testimonials;
