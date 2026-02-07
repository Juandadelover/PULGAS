import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <motion.a
                    href={item?.link}
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    target="_blank"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className={item.className}>
                        <CardTitle icon={item.icon} color={item.color} category={item.category}>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </motion.a>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 border border-transparent dark:border-white/[0.2] group-hover:border-primary/50 relative z-20 shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
    icon: Icon,
    color,
    category
}) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className={cn("text-xs font-semibold px-2 py-1 rounded-full", color === 'red' ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' : color === 'blue' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300')}>
                    {category}
                </span>
            </div>
            <h4 className={cn("text-black dark:text-white font-bold tracking-wide flex items-center gap-3", className)}>
                {Icon && <div className={cn("p-3 rounded-xl shadow-md", color === 'red' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400')}><Icon size={24} /></div>}
                <span className="text-lg">{children}</span>
            </h4>
        </div>
    );
};

export const CardDescription = ({
    className,
    children,
}) => {
    return (
        <p
            className={cn(
                "mt-6 text-neutral-600 dark:text-neutral-300 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
