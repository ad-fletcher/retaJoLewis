"use client";

import RotatingEarth from "../components/globe/globe";

export default function VanderbiltPage() {
  return (
    <div className="min-h-screen pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-[#4a121b] relative overflow-hidden">
      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 mt-8 sm:mt-12 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white font-serif">
            Reach out to
          </h1>
          <a 
            href="mailto:retajo@vanderbiltglobalstrategy.com" 
            className="text-xl sm:text-2xl md:text-3xl text-[#d4af37] hover:text-white transition-all duration-300 inline-block border-b border-[#d4af37]/30 hover:border-white pb-1"
          >
            retajo@vanderbiltglobalstrategy.com
          </a>
        </div>

        {/* Executive Profile Summary */}
        <div className="max-w-4xl mx-auto mb-16 text-left space-y-16 text-white/90 px-4">
          <section>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#d4af37] mb-6">Executive Profile Summary</h2>
            <p className="text-lg leading-relaxed mb-8 font-light">
              This Reta Lewis-led collaboration is a provider of comprehensive project and partnership solutions. It is comprised of highly experienced international advisors on matters of trade, US-focused government affairs, diplomacy, foreign/domestic investment and project finance.
            </p>
            
            <div className="bg-white/5 p-8 rounded-lg border border-[#d4af37]/20 backdrop-blur-sm">
              <h3 className="text-2xl font-serif text-[#d4af37] mb-4">Reta Jo Lewis</h3>
              <p className="text-lg leading-relaxed font-light">
                Ms. Lewis is the immediately prior President and Chair of the Export-Import Bank of the United States. She brings over 25 years of public and private sector leadership, having served in senior roles at the U.S. Department of State, the Clinton White House, and the German Marshall Fund. She has substantial, hands-on experience in projects in Africa, Europe, the Caribbean and the Middle East, among other regions.
              </p>
            </div>
          </section>

          {/* Core Services */}
          <section>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#d4af37] mb-8">Core Services</h2>
            <p className="text-lg leading-relaxed mb-10 font-light">
              These advisors offer a strategic portfolio of services to clients seeking insight, counsel, and access across borders:
            </p>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Service 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#d4af37]">1. International Investment Advisory</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 font-light leading-relaxed">
                  <li>Legal and strategic guidance on cross-border investments in Africa, the Caribbean, Europe, and the Middle East.</li>
                  <li>Project finance structuring, mergers & acquisitions, and infrastructure development.</li>
                  <li>In-depth advisory on energy, mining, and renewable energy ventures.</li>
                  <li>Deep knowledge of export credit financing and structuring public-private partnerships, key to supporting infrastructure, energy, oil and gas, critical integrals, transportation, technology and telecommunication project finance projects worldwide.</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#d4af37]">2. U.S. Government Relations & Trade Policy</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 font-light leading-relaxed">
                  <li>Advisory on building and sustaining strong relationships with U.S. government institutions, including EXIM, OPIC/DFC, and the U.S. Department of Commerce.</li>
                  <li>Navigation of U.S. trade finance programs and government contracting opportunities.</li>
                  <li>Support in accessing U.S. funding and export assistance initiatives.</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#d4af37]">3. Sovereign and Institutional Counsel</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 font-light leading-relaxed">
                  <li>Strategic counsel to governments, development institutions, and multilateral organizations.</li>
                  <li>Support in negotiating bilateral and multilateral agreements and infrastructure frameworks.</li>
                  <li>Diplomatic engagement and public-private partnership development.</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#d4af37]">4. Policy Advocacy and International Diplomacy</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 font-light leading-relaxed">
                  <li>Design and execution of advocacy campaigns for market access and global engagement.</li>
                  <li>High-level diplomatic interfacing on behalf of clients.</li>
                  <li>Convening stakeholder dialogues, investment forums, and policy roundtables.</li>
                </ul>
              </div>

               {/* Service 5 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#d4af37]">5. High Level and Complex Corporate Transactional Advice</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 font-light leading-relaxed">
                  <li>Highly renowned Energy Development and Finance Transaction Advisors.</li>
                  <li>Decades-long history of Transaction Advisory work on large scale infrastructure installations.</li>
                  <li>Internationally recognized expertise in all vertical aspects of Hydrocarbons transactions.</li>
                  <li>International renown in regards to the development and project financing of Mining ventures, most frequently on the side of sovereign principals.</li>
                  <li>Advisors in the Public International Law Sphere in regards to the protection of sovereign territory and natural resources.</li>
                  <li>General Transaction and Joint Venture advisory expertise.</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#d4af37]">6. State and Local Government Navigation</h3>
                <ul className="list-disc pl-5 space-y-2 text-white/80 font-light leading-relaxed">
                  <li>Proven track record of working with U.S. Governors, Mayors and legislators and their global counterparts.</li>
                  <li>Experienced in helping companies leverage subnational engagement for global business growth.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        
        <div className="flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity duration-500">
          <RotatingEarth width={800} height={600} />
        </div>
      </div>
    </div>
  );
}

