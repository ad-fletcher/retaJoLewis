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
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#4a121b] pointer-events-none z-10"></div>
            
            {/* Background blur effect */}
            <div className="absolute -z-10 w-[800px] h-[800px] rounded-full bg-[#720e1e]/20 blur-3xl -top-[200px] -right-[200px]"></div>
            <div className="absolute -z-10 w-[600px] h-[600px] rounded-full bg-[#d4af37]/5 blur-3xl -bottom-[100px] -left-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-4 md:pl-4 md:pr-0 lg:pl-6 py-12 md:py-24 relative z-20 w-full">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-center">
                    {/* Text Content - Left on desktop, centered on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="space-y-6 md:space-y-8 text-center md:text-left flex-1 w-full md:w-auto md:pl-0"
                    >
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "100px" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-1 bg-[#d4af37] mb-6 mx-auto md:mx-0 hidden md:block"
                            />
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight font-serif">
                                Reta Jo Lewis
                            </h1>
                        </div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 leading-relaxed max-w-2xl mx-auto md:mx-0 font-sans">
                            A global leader in advancing <span className="text-[#d4af37] font-medium">U.S. economic competitiveness</span>, trade, and investment. She delivers strategic insights and policy leadership that strengthen economic opportunity at home and abroad.
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-6 md:pt-8"
                        >
                            <Link href="/Contact" className="inline-block">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 25,
                                    }}
                                    className="relative bg-white text-[#720e1e] font-serif font-medium rounded-none shadow-lg overflow-hidden cursor-pointer border border-white px-10 py-4 text-lg hover:bg-gray-50 transition-colors duration-300"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        Get in Touch
                                    </span>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image - Right on desktop, centered on mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full md:w-auto flex justify-center md:justify-end flex-1 md:pr-0 px-4 md:px-0"
                    >
                        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl group">
                            {/* Glow behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#720e1e] to-[#d4af37] rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-1000"></div>
                            
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#4a121b]/40 to-transparent z-10"></div>
                                <img
                                    src="/reta.png"
                                    alt="Reta Jo Lewis"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
