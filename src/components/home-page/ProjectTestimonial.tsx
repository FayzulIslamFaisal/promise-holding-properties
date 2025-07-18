
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 3000); 
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <section className="px-4 bg-custom-bg-body">
      <div className="container mx-auto antialiased pb-14 pt-12 border-b border-[var(--custom-bg-accent)]/40">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-bold capitalize text-[var(--custom-bg-white)] relative"
          >
            testimonials
          </motion.h2>
        </div>
        
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2 py-6">
          {/* Image Stack */}
          <div className="relative h-80 w-full group">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src={testimonial.src}
                      fill
                      alt={testimonial.name}
                      draggable={false}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--custom-bg-accent)]/60 via-transparent to-[var(--custom-bg-white)]" />
                    {/* Golden border for active image */}
                    {isActive(index) && (
                      <motion.div 
                        className="absolute inset-0 border-2 border-[var(--custom-bg-accent)] rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Floating indicator dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive(index) 
                      ? 'bg-[var(--custom-bg-accent)] scale-125' 
                      : 'bg-[var(--custom-bg-white)]/80 hover:bg-[var(--custom-bg-white)]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text section */}
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Quote icon */}
              <motion.div 
                className="text-6xl text-[var(--custom-text-primary)]/60 font-serif leading-none"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                &ldquo;
              </motion.div>
              
              {/* Quote text with word-by-word animation */}
              <motion.p className="text-lg leading-relaxed text-[var(--custom-text-white)]">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              
              {/* Author info */}
              <div className="space-y-2">
                <motion.h3 
                  className="text-2xl font-bold text-[var(--custom-text-white)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {testimonials[active].name}
                </motion.h3>
                <motion.p 
                  className="text-sm text-[var(--custom-text-primary)] font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {testimonials[active].designation}
                </motion.p>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex gap-4 pt-12 md:pt-0">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-[var(--custom-border-primary)] backdrop-blur-sm border border-[var(--custom-bg-accent)]/30 transition-all duration-300 hover:bg-[var(--custom-bg-accent)] hover:border-[var(--custom-bg-accent)]"
              >
                <ArrowLeft className="h-5 w-5 text-[var(--custom-bg-white)] transition-all duration-300 group-hover/button:text-[var(--custom-text-white)] group-hover/button:-translate-x-0.5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-[var(--custom-border-primary)] backdrop-blur-sm border border-[var(--custom-bg-accent)]/30 transition-all duration-300 hover:bg-[var(--custom-bg-accent)] hover:border-[var(--custom-bg-accent)]"
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