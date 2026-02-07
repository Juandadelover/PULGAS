import React from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const Locations = () => {
    return (
        <section className="py-20 bg-background" id="sedes">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-4 font-heading">
                        Nuestras Sedes
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-300">
                        Estamos cerca de ti para brindar la mejor atención.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Sede Valledupar */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border border-neutral-100 dark:border-neutral-800 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                            Sede Valledupar
                        </h3>
                        <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary flex-shrink-0" size={24} />
                                <p>Cra. 18D #7B-25 Barrio La Esperanza, Valledupar</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-primary flex-shrink-0" size={24} />
                                <p>+57 300 000 0000</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className="text-primary flex-shrink-0" size={24} />
                                <p>Lun - Sab: 8:00am - 7:00pm</p>
                            </div>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/Hckwb8L57WjbDWc99"
                            target="_blank"
                            className="inline-flex items-center gap-2 mt-8 font-bold text-text hover:text-primary transition-colors"
                        >
                            Ver en Mapa <ExternalLink size={18} />
                        </a>
                    </div>

                    {/* Sede La Jagua */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border border-neutral-100 dark:border-neutral-800 hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                            Sede La Jagua
                        </h3>
                        <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary flex-shrink-0" size={24} />
                                <p>Calle Principal, La Jagua de Ibirico</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-primary flex-shrink-0" size={24} />
                                <p>+57 314 437 5899</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className="text-primary flex-shrink-0" size={24} />
                                <p>Lun - Vie: 8:00am - 6:00pm</p>
                            </div>
                        </div>
                        <a
                            href="#"
                            target="_blank"
                            className="inline-flex items-center gap-2 mt-8 font-bold text-text hover:text-primary transition-colors"
                        >
                            Ver en Mapa <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
