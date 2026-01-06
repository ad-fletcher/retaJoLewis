"use client";

import Image from "next/image";
import { FadeIn } from "../components/ui/fade-in";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <FadeIn direction="up" className="relative order-1 md:order-1">
            <div className="relative w-full max-w-md mx-auto overflow-hidden">
              <Image
                src="/retaConnect.png"
                alt="Reta Jo Lewis"
                width={500}
                height={600}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn direction="up" delay={0.2} className="space-y-8 order-2 md:order-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#720e1e] mb-4">
                Contact
              </h1>
              <div className="w-24 h-1 bg-[#d4af37] mb-6" />
              <h2 className="text-xs font-bold tracking-[0.2em] text-gray-900 uppercase mb-6">
                Speaking, Advisory Inquiries, Press
              </h2>
              
              <div className="text-gray-600 font-light leading-relaxed space-y-4">
                <p>
                  Contact Reta Jo's team using the email below to explore speaking and partnership opportunities:{" "}
                  <a href="mailto:info@retajolewis.com" className="text-[#720e1e] hover:text-[#d4af37] transition-colors underline">
                    info@retajolewis.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
