"use client";

import { motion } from "motion/react";
import PhysicsButton from "@/app/components/ui/arrowButton";

export default function Hero() {
    return (
        <div className="min-h-[60vh] bg-white flex items-center justify-center relative overflow-hidden">
            {/* Grid background pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #000 1px, transparent 1px),
                        linear-gradient(to bottom, #000 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />
            
            {/* Gradient fade at bottom to blur grid transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
            
            {/* Background blur effect */}
            <div className="absolute -z-10 w-96 h-96 rounded-full bg-[#f8b3c4] blur-3xl opacity-20 -top-20 -right-20"></div>
            <div className="absolute -z-10 w-96 h-96 rounded-full bg-[#f8b3c4] blur-3xl opacity-20 -bottom-20 -left-20"></div>
            
            <div className="max-w-7xl mx-auto px-4 md:pl-4 md:pr-0 lg:pl-6 py-12 md:py-24 relative z-20">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                    {/* Text Content - Left on desktop, centered on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4 md:space-y-6 text-center md:text-left flex-1 w-full md:w-auto md:pl-0"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tighter">
                            Reta Jo Lewis
                        </h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-black/80">
                            27th President<br className="md:hidden" /> of the Export–Import<br className="hidden md:inline" /> Bank<br className="md:hidden" /> of the United States
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-4 md:pt-6"
                        >
                            <PhysicsButton
                                text="See Reta Speak"
                                href="/Speaking"
                                size="md"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Image - Right on desktop, centered on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full md:w-auto flex justify-center md:justify-end flex-1 md:pr-0 px-4 md:px-0"
                    >
                        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                            <div className="absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-[#f8b3c4]/30 to-transparent blur-2xl"></div>
                            <img
                                src="/retaSpeech.png"
                                alt="Reta Jo Lewis"
                                className="rounded-2xl shadow-2xl w-full object-cover filter brightness-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
