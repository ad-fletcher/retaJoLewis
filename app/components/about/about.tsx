"use client";

import { FadeIn } from "../ui/fade-in";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full max-w-screen-xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Image */}
        <FadeIn direction="up" className="relative">
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto md:max-w-md md:mx-auto overflow-hidden bg-[#1a1a1a]">
             <Image 
               src="/retaGA.png" 
               alt="Reta Jo Lewis" 
               fill 
               className="object-cover"
               sizes="(max-width: 768px) 100vw, 400px"
             />
          </div>
        </FadeIn>

        {/* Right: Content */}
        <FadeIn direction="up" delay={0.15} className="space-y-6 md:pt-8">
          {/* Name */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#720e1e] leading-tight mb-4">
              Reta Jo Lewis
            </h2>
            {/* Gold decorative underline */}
            <div className="w-48 h-1 bg-[#d4af37] rounded-full"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-serif text-[#720e1e] leading-relaxed">
            Board Member, Strategic Advisor, Speaker  | Former President, Chairman and CEO of Export-Import Bank (2022-2025)
          </p>
          
          {/* Body Text */}
          <div className="text-gray-700 font-light leading-relaxed space-y-4 text-base">
            <p>
              Reta Jo Lewis is a senior strategic advisor, lawyer, and former U.S. government leader with more than 30 years of experience guiding executives and boards at the intersection of global markets, geopolitical risk, and economic security. She most recently served as Chairman, President, and CEO of the Export-Import Bank of the United States, where she helped align U.S. export finance and supply-chain strategy with national security and competitiveness objectives during a period of heightened global uncertainty. Across leadership roles in government, finance, and international policy, Lewis has advised organizations on navigating regulatory and geopolitical complexity, strengthening resilience, and building effective public-private partnerships. She is widely sought after for her ability to translate global risk into actionable strategy for decision-makers operating in complex, cross-border environments.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
