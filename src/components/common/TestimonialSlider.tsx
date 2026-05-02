"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Testimonial } from "@/types/api";

type TestimonialItem = {
    id: number | string;
    quote: string;
    name: string;
    designation: string;
    src: string;
};

interface TestimonialSliderProps {
    autoplay?: boolean;
    titleAlign?: "center" | "left";
    testimonials?: Testimonial[];
}

const fallbackTestimonials: TestimonialItem[] = [
    {
        id: 1,
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Sarah Chen",
        designation: "Product Manager at TechFlow",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: 2,
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Michael Rodriguez",
        designation: "CTO at InnovateSphere",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: 3,
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Emily Watson",
        designation: "Operations Director at CloudScale",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: 4,
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "James Kim",
        designation: "Engineering Lead at DataPro",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: 5,
        quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
        name: "Lisa Thompson",
        designation: "VP of Technology at FutureNet",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
];

const TestimonialSlider = ({ autoplay = false, titleAlign = "center", testimonials: propsTestimonials }: TestimonialSliderProps) => {
    const [active, setActive] = useState(0);

    const testimonials: (Testimonial | TestimonialItem)[] = (propsTestimonials && propsTestimonials.length) ? propsTestimonials : fallbackTestimonials;

    // Fixed rotations for each testimonial to prevent hydration mismatch
    const getRotationForIndex = (index: number) => {
        const rotations = [-8, 5, -3, 7, -10]; // Deterministic values
        return rotations[index] || 0;
    };

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => index === active;

    useEffect(() => {
        if (autoplay) {
            const next = () => setActive((prev) => (prev + 1) % testimonials.length);
            const interval = setInterval(next, 3000);
            return () => clearInterval(interval);
        }
    }, [autoplay, testimonials.length]);

    return (
        <section className="px-4 ">
            <div className="container mx-auto antialiased py-10 md:py-14 sectionSpaceBorder">
                <div className="mb-8 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`text-3xl sm:text-4xl md:text-5xl font-bold capitalize darkLight-text-color relative ${titleAlign === "center" ? "text-center" : "text-left"
                            }`}
                    >
                        testimonials
                    </motion.h2>
                </div>

                <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 h-full pb-0 md:pb-10">
                    {/* Image Stack */}
                    <div className="relative h-80 w-[80%] md:w-[90%] mx-auto group">
                        {testimonials.map((testimonial, index: number) => {
                            const t = testimonial as Testimonial & TestimonialItem;
                            return (
                            <motion.div
                                key={testimonial.id}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                    rotate: getRotationForIndex(index),
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0.8,
                                    scale: isActive(index) ? 1 : 0.95,
                                    rotate: isActive(index) ? 0 : getRotationForIndex(index),
                                    zIndex: isActive(index)
                                        ? 8
                                        : testimonials.length + 1 - index,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-2 origin-bottom"
                            >
                                <div className="relative h-full w-full rounded-2xl overflow-hidden mx-4">
                                    <Image
                                        src={t.src || t.image || "/assets/images/placeholder.png"}
                                        fill
                                        alt={t.name}
                                        draggable={false}
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t dark:from-primary/60 from-[var(--brand-dark)]/60 via-transparent dark:via-transparent to-white/40 dark:to-white/40" />
                                    {isActive(index) && (
                                        <motion.div
                                            className="absolute inset-0 border-2 border-primary/50 rounded-2xl"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ); })}

                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-[9]">
                            {testimonials.map((testimonial: Testimonial | TestimonialItem, index: number) => (
                                <button
                                    key={testimonial.id || index}
                                    onClick={() => setActive(index)}
                                    className={`w-4 h-4 cursor-pointer rounded-full transition-all duration-300 ${isActive(index)
                                        ? 'bg-primary scale-125'
                                        : 'bg-[var(--brand-dark)] border border-white/40 dark:bg-white/80 dark:hover:bg-white'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Text section */}
                    <div className="flex flex-col justify-between">
                        {(() => {
                            const tActive = testimonials[active] as Testimonial & TestimonialItem;
                            return (
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="space-y-4"
                                >
                                    <motion.div
                                        className="text-6xl text-[var(--brand-dark)]/80 dark:text-white font-serif mb-0 pb-0"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        &ldquo;
                                    </motion.div>

                                    <motion.p
                                        className="text-lg leading-relaxed text-[var(--brand-dark)] dark:text-white"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                    >
                                        {tActive.quote || tActive.content}
                                    </motion.p>

                                    <div className="space-y-2">
                                        <motion.h3
                                            className="text-2xl font-bold text-[var(--brand-dark)] dark:text-white"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            {tActive.name}
                                        </motion.h3>
                                        <motion.p
                                            className="text-sm text-[var(--brand-dark)] dark:text-primary font-medium"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                        >
                                            {tActive.designation || tActive.position}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            );
                        })()}

                        {/* Navigation buttons */}
                        <div className="flex gap-4 pt-6  md:pt-0">
                            <motion.button
                                onClick={handlePrev}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="group/button flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--brand-dark)] dark:bg-primary backdrop-blur-sm border border-primary/50 transition-all duration-300 hover:bg-[var(--brand-dark)]/80 dark:hover:bg-primary hover:border-primary"
                            >
                                <ArrowLeft className="h-5 w-5 text-white transition-all duration-300 group-hover/button:text-white group-hover/button:-translate-x-0.5" />
                            </motion.button>
                            <motion.button
                                onClick={handleNext}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="group/button flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--brand-dark)] dark:bg-primary backdrop-blur-sm border border-primary/50 transition-all duration-300 hover:bg-[var(--brand-dark)]/80 dark:hover:bg-primary hover:border-primary"
                            >
                                <ArrowRight className="h-5 w-5 text-white transition-all duration-300 group-hover/button:text-white group-hover/button:translate-x-0.5" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
