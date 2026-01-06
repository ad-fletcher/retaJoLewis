"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[85vh] w-full overflow-hidden bg-[#1a1a1a]">
      {/* Background Image - Hidden on mobile */}
      <div 
        className="absolute inset-0 z-0 hidden md:block bg-no-repeat bg-size-[150%_auto] bg-position-[right_35%]"
        style={{ backgroundImage: "url('/reta.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/10 via-black/40 to-black/90"></div>
      </div>

      {/* Mobile gradient background */}
      <div className="absolute inset-0 z-0 md:hidden bg-linear-to-b from-[#2a1a1a] via-[#1a1a1a] to-[#1a1a1a]"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[60vh] md:min-h-[85vh] items-center justify-center md:justify-end">
        <div className="mx-auto max-w-7xl px-6 md:px-12 w-full py-12 md:py-16 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-lg text-center md:text-center md:mr-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-white/50"></span>
              <span className="text-sm tracking-[0.2em] uppercase text-white/90 font-medium">Meet Reta</span>
              <span className="h-px w-12 bg-white/50"></span>
            </div>

            <p className="text-lg md:text-2xl lg:text-3xl font-serif text-white leading-relaxed mb-8">
              Ambassador Reta Jo Lewis is a global business strategist, lawyer, and civic leader focused on strengthening American competitiveness through effective policy, partnership, and innovation.
            </p>
            
            <Link href="/about" className="inline-block">
              <span className="inline-flex items-center justify-center px-8 py-3 bg-[#5c1c1c] text-white tracking-widest text-xs uppercase hover:bg-[#4a1616] transition-colors duration-300">
                Bio
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
