"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="min-h-[85vh] bg-transparent flex items-center justify-center relative overflow-hidden pt-16">
            {/* Grid background pattern */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #fff 1px, transparent 1px),
                        linear-gradient(to bottom, #fff 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />
            
            {/* Gradient fade at bottom to blur grid transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#f30126] pointer-events-none z-10"></div>
            
            {/* Background blur effect */}
            <div className="absolute -z-10 w-[800px] h-[800px] rounded-full bg-[#720e1e]/20 blur-3xl -top-[200px] -right-[200px]"></div>
            <div className="absolute -z-10 w-[600px] h-[600px] rounded-full bg-[#d4af37]/5 blur-3xl -bottom-[100px] -left-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 md:pl-4 md:pr-0 lg:pl-6 py-12 md:py-24 relative z-20 w-full">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center">
                    {/* Text Content - Left on desktop, centered on mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-8 md:space-y-10 text-center md:text-left flex-1 w-full md:w-auto"
                    >
                        <div className="space-y-4">
                            <motion.div 
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "80px" }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="h-1.5 bg-[#d4af37] mb-8 mx-auto md:mx-0 hidden md:block rounded-full"
                            />
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter font-serif drop-shadow-2xl">
                                Reta Jo <br className="hidden lg:block" />
                                <span className="text-white/95">Lewis</span>
                            </h1>
                        </div>
                        
                        <div className="space-y-6 max-w-2xl mx-auto md:mx-0">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#d4af37] font-medium italic tracking-wide">
                                Strategic Global Leader
                            </h2>
                            <p className="text-lg sm:text-xl font-light text-white/90 leading-relaxed font-sans [text-wrap:balance]">
                                Advancing <span className="text-white font-semibold underline decoration-[#d4af37] decoration-2 underline-offset-4">U.S. economic competitiveness</span>, trade, and global investment through visionary policy leadership and strategic international insights.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="pt-4"
                        >
                            <Link href="/Contact" className="inline-block group/btn">
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative px-12 py-5 bg-white text-[#f30126] font-serif font-bold text-xl shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-3"
                                >
                                    <span>Get in Touch</span>
                                    <svg 
                                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image - Right on desktop, centered on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full md:w-auto flex justify-center md:justify-end flex-1 px-4 md:px-0"
                    >
                        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl group">
                            {/* Sophisticated Glow */}
                            <div className="absolute -inset-10 bg-[#d4af37]/10 rounded-full blur-3xl group-hover:bg-[#d4af37]/20 transition-colors duration-1000"></div>
                            
                            {/* Main Image Container */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] bg-[#720e1e]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#f30126]/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                                <img
                                    src="/reta.png"
                                    alt="Reta Jo Lewis"
                                    className="w-full h-auto object-cover transform transition-all duration-1000 group-hover:scale-[1.03] relative z-0"
                                />
                                
                                {/* Bottom gold accent line on image */}
                                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#d4af37] z-20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                            </div>

                            {/* Decorative Frame Element */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr-3xl -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#d4af37]/40 rounded-bl-3xl -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
