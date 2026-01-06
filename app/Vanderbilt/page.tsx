"use client";

import RotatingEarth from "../components/globe/globe";
import { FadeIn } from "../components/ui/fade-in";

export default function VanderbiltPage() {
  const services = [
    {
      title: "Geopolitical Investment Advisory",
      description: "Legal and strategic guidance on cross-border investments in Africa, the Caribbean, Europe, and the Middle East. Project finance structuring, M&A, infrastructure development, and export credit financing expertise.",
    },
    {
      title: "U.S. Government Relations",
      description: "Advisory on relationships with U.S. institutions including EXIM, DFC, and Commerce. Navigation of trade finance programs and government contracting.",
    },
    {
      title: "Corporate Transactional Advice",
      description: "Energy development and finance transaction advisors with decades of experience in large-scale infrastructure, hydrocarbons, mining ventures, and public-private partnerships.",
    },
    {
      title: "Sovereign & Institutional Counsel",
      description: "Strategic counsel to governments, development institutions, and multilateral organizations. Support in negotiating bilateral and multilateral agreements.",
    },
    {
      title: "Policy Advocacy & Diplomacy",
      description: "Design and execution of advocacy campaigns for market access. High-level diplomatic interfacing and convening stakeholder dialogues and investment forums.",
    },
    {
      title: "State & Local Government",
      description: "Proven track record working with U.S. Governors, Mayors, and legislators. Helping companies leverage subnational engagement for global growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Maroon Section Banner */}
      <div className="flex justify-center mb-16">
        <div className="bg-[#720e1e] px-8 md:px-12 py-4 text-center">
          <h1 className="text-white text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
            Vanderbilt Global Strategy Group LLC
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Hero Text */}
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Strategic Portfolio Services
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8" />
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              A strategic portfolio of services for clients seeking geopolitical insight, counsel, and access across borders.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group h-full bg-white border border-gray-100 p-8 rounded-none hover:border-[#d4af37]/50 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-serif font-medium text-gray-900 mb-4 group-hover:text-[#720e1e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 mb-20 text-center">
          <FadeIn>
            <h3 className="text-2xl font-serif text-gray-900 mb-2">Get in Touch</h3>
            <p className="text-gray-600 font-light mb-6">
              Connect with our team to discuss how we can support your strategic objectives.
            </p>
            <a 
              href="mailto:info@vanderbiltglobalstrategy.com"
              className="text-lg md:text-xl font-medium text-[#720e1e] hover:text-[#d4af37] transition-colors border-b border-[#720e1e]/20 pb-1 hover:border-[#d4af37]"
            >
              info@vanderbiltglobalstrategy.com
            </a>
          </FadeIn>
        </div>

        {/* Globe Visualization */}
        <FadeIn delay={0.4} className="flex flex-col items-center opacity-80 pointer-events-none">
          <div className="relative w-full max-w-xl aspect-square flex items-center justify-center grayscale-[0.5] opacity-60">
             <RotatingEarth width={600} height={600} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
