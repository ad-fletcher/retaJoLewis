"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/retaSpeech.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[60vh] md:min-h-[70vh] items-center">
        <div className="mx-auto max-w-screen-xl px-6 md:px-12 w-full py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-snug mb-6">
              Strategic leadership at the crossroads of diplomacy, equity, and public service.
            </h1>
            
            <p className="text-base md:text-lg text-white/80 font-light mb-8 max-w-xl leading-relaxed">
              Advancing U.S. economic competitiveness, trade, and global investment through visionary policy leadership.
            </p>

            <Link href="/about" className="group inline-flex items-center gap-3">
              <span className="text-white text-xs tracking-[0.2em] uppercase pb-0.5 border-b border-white/30 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-all duration-300">
                Meet Reta
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform group-hover:text-[#d4af37]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
