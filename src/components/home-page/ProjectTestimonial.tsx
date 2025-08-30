"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const ProjectTestimonial = ({ autoplay = false }: { autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

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
      <div className="container mx-auto antialiased py-10 md:py-12 border-b border-[var(--custom-bg-accent)]/40">
        <div className="mb-8 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center capitalize darkLight-text-color relative"
          >
            testimonials
          </motion.h2>
        </div>
        
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 h-full pb-0 md:pb-10">
          {/* Image Stack */}
          <div className="relative h-80 w-[80%] md:w-[90%] mx-auto group">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: getRotationForIndex(index),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : getRotationForIndex(index),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 origin-bottom"
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden mx-4">
                  <Image
                    src={testimonial.src}
                    fill
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t dark:from-[var(--custom-bg-accent)]/60 from-[var(--custom-bg-primary)]/60 via-transparent dark:via-transparent to-[var(--custom-bg-white)]/40 dark:to-[var(--custom-bg-white)]/40" />
                  {isActive(index) && (
                    <motion.div 
                      className="absolute inset-0 border-2 border-[var(--custom-bg-accent)]/50 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* Floating indicator dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-4 h-4 cursor-pointer rounded-full transition-all duration-300 ${
                    isActive(index) 
                      ? 'bg-[var(--custom-bg-accent)] scale-125' 
                      : 'bg-[var(--custom-bg-primary)] border border-[var(--custom-bg-white)]/40 dark:bg-[var(--custom-bg-white)]/80 dark:hover:bg-[var(--custom-bg-white)]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text section */}
          <div className="flex flex-col justify-between">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="space-y-4"
            >
              <motion.div 
                className="text-6xl text-[var(--custom-text-primary)]/80 dark:text-[var(--custom-text-white)] font-serif mb-0 pb-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                &ldquo;
              </motion.div>
              
              <motion.p 
                className="text-lg leading-relaxed text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {testimonials[active].quote}
              </motion.p>
              
              <div className="space-y-2">
                <motion.h3 
                  className="text-2xl font-bold text-[var(--custom-text-primary)] dark:text-[var(--custom-text-white)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {testimonials[active].name}
                </motion.h3>
                <motion.p 
                  className="text-sm text-[var(--custom-text-primary)] dark:text-[var(--custom-text-secondary)] font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {testimonials[active].designation}
                </motion.p>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex gap-4 pt-6  md:pt-0">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group/button flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--custom-bg-primary)] dark:bg-[var(--custom-bg-accent)] backdrop-blur-sm border border-[var(--custom-bg-accent)]/50 transition-all duration-300 hover:bg-[var(--custom-bg-primary)]/80 dark:hover:bg-[var(--custom-bg-accent)] hover:border-[var(--custom-bg-accent)]"
              >
                <ArrowLeft className="h-5 w-5 text-[var(--custom-bg-white)] transition-all duration-300 group-hover/button:text-[var(--custom-text-white)] group-hover/button:-translate-x-0.5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group/button flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[var(--custom-bg-primary)] dark:bg-[var(--custom-bg-accent)] backdrop-blur-sm border border-[var(--custom-bg-accent)]/50 transition-all duration-300 hover:bg-[var(--custom-bg-primary)]/80 dark:hover:bg-[var(--custom-bg-accent)] hover:border-[var(--custom-bg-accent)]"
              >
                <ArrowRight className="h-5 w-5 text-[var(--custom-bg-white)] transition-all duration-300 group-hover/button:text-[var(--custom-text-white)] group-hover/button:translate-x-0.5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTestimonial;