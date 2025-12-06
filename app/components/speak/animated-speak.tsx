"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import PhysicsButton from "../ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
export type Testimonial = {
  description: string;
  name: string;
  title: string;
  src: string;
  videoUrl: string;
};

export const AnimatedSpeaking = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  // Ensure active is always valid
  useEffect(() => {
    if (testimonials.length > 0 && active >= testimonials.length) {
      setActive(0);
    }
  }, [active, testimonials.length]);

  // Debug: log active state changes
  useEffect(() => {
    console.log("Active index:", active, "Image:", testimonials[active]?.src);
  }, [active, testimonials]);


  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  // Memoize random rotation to avoid re-renders
  const randomRotateY = useCallback(() => {
    return Math.floor(Math.random() * 21) - 10;
  }, []);

  return (
    <div className={cn("max-w-sm md:max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20 relative overflow-hidden", className)}>
      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-3 md:mb-16 text-white">See Reta Speak</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="relative h-[400px] w-full perspective-1000">
            <AnimatePresence mode="popLayout">
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
                      ? 999
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
                  <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-[#c0011e] border border-white/10 p-2">
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      unoptimized
                      priority={index === 0}
                      className="h-full w-full rounded-xl object-cover object-center"
                      onError={(e) => {
                        console.error("Failed to load image:", testimonial.src);
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-center flex-col py-4 order-1 md:order-2 space-y-8">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {testimonials[active].name}
            </h3>
            <p className="text-lg text-[#d4af37] font-medium mb-6">
              {testimonials[active].title}
            </p>
            <motion.p className="hidden md:block text-lg text-gray-300 leading-relaxed">
              {testimonials[active].description.split(" ").map((word, index) => (
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
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              <a href={testimonials[active].videoUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <PhysicsButton 
                  text="Watch Video" 
                  size="md" 
                  icon={<ExternalLink className="h-4 w-4" />}
                  className="w-full sm:w-auto justify-center bg-[#720e1e] text-white border-[#720e1e] hover:bg-[#8a1124]"
                />
              </a>
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group/button transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-110"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6 text-white group-hover/button:translate-x-[-2px] transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group/button transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-110"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6 text-white group-hover/button:translate-x-[2px] transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};