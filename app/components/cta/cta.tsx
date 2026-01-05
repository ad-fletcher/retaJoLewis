"use client";

import { FadeIn } from "../ui/fade-in";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]"></div>

      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight">
            Ready to Connect?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Explore partnership opportunities, speaking engagements, and advisory services with Reta Jo Lewis.
          </p>
          
          <div className="pt-8">
            <Link href="/Contact" className="inline-block group">
              <div className="border border-[#d4af37] text-[#d4af37] px-12 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#d4af37] hover:text-white">
                Get in Touch
              </div>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
