import React from 'react';
import { FloatingNav } from './components/ui/floating-navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Footer from './components/Footer';
import { Home, Stethoscope, MapPin } from 'lucide-react';

const App = () => {
    const navItems = [
        {
            name: "Inicio",
            link: "#hero",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Servicios",
            link: "#servicios",
            icon: <Stethoscope className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Sedes",
            link: "#sedes",
            icon: <MapPin className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
    ];

    return (
        <div className="relative bg-background w-full">
            <FloatingNav navItems={navItems} />
            <Hero />
            <TrustSection />
            <Services />
            <Testimonials />
            <Locations />
            <Footer />
        </div>
    );
};

export default App;
