"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#c0011e] to-[#800114] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10"
        >
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-2 sm:px-0">
              Ready to Connect?
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Explore partnership opportunities, speaking engagements, and advisory services with Reta Jo Lewis.
            </p>
          </div>
          
          <div className="pt-2 sm:pt-4 flex justify-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

