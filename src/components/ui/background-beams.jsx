"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({
    className,
}) => {
    const beamsRef = useRef(null);

    useEffect(() => {
        // Animation logic would go here
        // For simplicity, we are using a CSS-based fallback or a simplified version
        // The full Aceternity implementation is quite complex and requires external dependencies like framer-motion unique imports
        // or direct canvas manipulation.
        // For this "manual integration", I will use a simplified Canvas animation which gives a similar effect.

        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                opacity: Math.random(),
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
            });
        }

        const render = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });

            // Draw beams
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            ctx.moveTo(0, 0);
            ctx.lineTo(canvas.width, canvas.height);
            ctx.stroke();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };

    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-950 to-neutral-800 -z-20 overflow-hidden",
                className
            )}
        >
            <canvas ref={beamsRef} className="h-full w-full absolute inset-0 opacity-40 pointer-events-none" />
        </div>
    );
};
