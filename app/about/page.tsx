"use client";

import { useMemo } from "react";
import Image from "next/image";
import { FadeIn } from "../components/ui/fade-in";
import { SectionBreaker } from "../components/ui/section-breaker";

type Affiliation = {
  role: string;
  organization: string;
  description: string;
  logo?: string;
};

type Education = {
  degree: string;
  institution: string;
  years: string;
  logo?: string;
};

export default function AboutPage() {
  const currentAffiliations = useMemo<Affiliation[]>(() => [
    {
      role: "Non-Executive Director",
      organization: "Rare Earths Americas",
      description: "Rare Earths Americas is a company focused on developing and securing critical rare earth mineral resources essential for modern technology, clean energy, and national security. The organization works to establish a sustainable and secure supply chain for rare earth elements in the Americas.",
      logo: "/rareEarthAmericas.png",
    },
     {
      role: "Co-Chair, Global Future Council on Advance Manufacturing and Value Chains",
      organization: "World Economic Forum",
      description: "The World Economic Forum (WEF) is the international organization for Public-Private Cooperation. It provides a global, impartial and not-for-profit platform for meaningful connection between stakeholders to establish trust and build initiatives for cooperation and progress.",
      logo: "/wef.png",
    },
    {
      role: "Keynote Speaker",
      organization: "Leading Authorities, Inc.",
      description: "The Leading Authority, Inc. is Washington, D.C. top speakers bureau for sourcing and securing incredible keynote speakers, moderators and more for any type of meeting and for any audience.",
      logo: "/leadingauthorities.png",
    },

    {
      role: "Life Member",
      organization: "Council on Foreign Relations",
      description: "The Council on Foreign Relations (CFR) is an independent, nonpartisan American think tank specializing in U.S. foreign policy and international Relations.",
      logo: "/cfr.svg",
    },

    {
      role: "Board Services - Board Candidate",
      organization: "New York Stock Exchange",
      description: "The New York Stock Exchange launched NYSE Board Services in 2019 to support NYSE-listed companies by providing access to a pool of highly qualified board candidates. NYSE Board Services is built around three key pillars: Curated Board Searches, Candidate Network, and CEO Advisory Council. Engaged in strategic discussions and networking to boost board readiness. Selected and vetted by NYSE Board Services Candidate Network for the prestigious program.",
      logo: "/nyseLogo.jpeg",
    },
    {
      role: "Member of Advisory Board and Advisory Committee Economic Projects",
      organization: "American Leadership Initiative",
      description: "The American Leadership Initiative (ALI) is a non-profit organization that is developing a 21st century vision and policy agenda for American global leadership, based on American interest and shared values.",
      logo: "/americanLeadershipInitiative.webp",
    },
    {
      role: "Leadership Council Member",
      organization: "Leadership Council on Women in National Security",
      description: "The Leadership Council on Women in National Security (LCWINS) is a nonprofit 501(c)3 organization committed to advancing gender parity in national security and foreign policy decision-making.",
      logo: "/lcw.png",
    },

    {
      role: "Member",
      organization: "Ellis Island Medals of Honor Advisory Committee",
      description: "The Ellis Island Medals of Honor Advisory Committee is a nonprofit organization that celebrates immigrant contributions and American diversity through public recognition and civic engagement.",
      logo: "/ellisIsland.webp",
    },
    {
      role: "Member",
      organization: "Blue Star Families National Advisory Board",
      description: "The Blue Star Families (BSF) is the nations largest nonprofit dedicated to supporting military and veteran families through community building, career development, and policy advocacy.",
      logo: "/blueStarFamilies.png",
    },
    {
      role: "Co-Chair",
      organization: "Global Power Women's Network",
      description: "The Global Power Women's Network is dedicated to empowering female leaders by providing a platform for mentorship, knowledge-sharing, and professional development. Through specialized discussions, networking opportunities, and initiatives, the network supports women in navigating leadership challenges, driving innovation, and shaping the future of their industries.",
      logo: "/globalPowerWomen.png",
    },
  ], []);

  const pastAffiliations = useMemo<Affiliation[]>(() => [
    {
      role: "27th Chairman, President, and CEO (2022-2025)",
      organization: "Export-Import Bank of the United States",
      description: "The Export-Import Bank of the United States (EXIM) is the official export credit agency of the United States, providing financing and insurance to support American exports. During her tenure from 2022 to 2025, Reta Jo Lewis became the first African American and only the second woman to lead the agency, overseeing $135 billion in financing authority. Under her leadership, EXIM expanded its reach to 177 countries and authorized more than $22 billion in financing to support U.S. jobs and exports.",
      logo: "/exportImport.svg",
    },
    {
      role: "Senior Fellow and Director of Congressional Affairs",
      organization: "German Marshall Fund of the United States",
      description: "The German Marshall Fund of the United States (GMF) is a nonpartisan, nonprofit organization focused on transatlantic affairs. GMF was founded as an American foundation in 1972 with a gift from Germany in appreciation for aid received through the Marshall Plan after World War II.",
      logo: "/gmf.jpg",
    },
    {
      role: "African American Advisory Council Member",
      organization: "Nielsen",
      description: "Nielsen is a global data, measurement, and analytics company that provides independent insights into audience behavior across television, digital, audio, and retail platforms. Its products and services help media companies, advertisers, and brands understand consumer preferences, evaluate performance, and make data-driven decisions in markets worldwide.",
      logo: "/nielsen.png",
    },
    {
      role: "Vice President and Counselor to the President",
      organization: "United States Chamber of Commerce",
      description: "The U.S. Chamber of Commerce, a 501(c)(6) nonprofit business federation, works to strengthen America's long-term competitiveness by advocating for pro-growth policies and addressing developments that shape the U.S. economy and the global business environment.",
      logo: "/coc.svg",
    },
    {
      role: "Fellow",
      organization: "Presidential Management Fellows Program",
      description: "The Presidential Management Fellows Program (PMF) was a two-year fellowship training and leadership development program at a United States government agency, administered by the U.S. Office of Personnel Management for advanced degree holders entering public service.",
      logo: "/pmfFellow.png",
    },
  ], []);

  const education = useMemo<Education[]>(() => [
    {
      degree: "Doctor of Law (J.D.)",
      institution: "Emory University School of Law",
      years: "1986 – 1989",
      logo: "/emoryLogo.jpg",
    },
    {
      degree: "Master of Science Administration of Justice (M.S.A.J)",
      institution: "American University",
      years: "1976 – 1978",
      logo: "/auLogo.png",
    },
    {
      degree: "Bachelor of Arts (B.A.), Political Science",
      institution: "The University of Georgia",
      years: "1971 – 1975",
      logo: "/georgiaLogo.svg",
    },
  ], []);

  const renderItem = (item: Affiliation | Education, index: number, isEducation: boolean = false) => {
    return (
      <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 py-8 border-b border-gray-100 last:border-0">
        <div className="md:w-1/5 shrink-0">
          <div className="relative h-20 w-20 md:h-28 md:w-28 mx-auto md:mx-0 bg-white rounded-lg p-2 border border-gray-100 flex items-center justify-center">
             {item.logo ? (
                <Image
                  src={item.logo}
                  alt={(item as Affiliation).organization || (item as Education).institution}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 80px, 112px"
                  unoptimized={item.logo?.endsWith('.jpg') || item.logo?.endsWith('.webp') || item.logo?.endsWith('.png')}
                />
             ) : (
                <div className="w-full h-full bg-gray-50 rounded-md" />
             )}
          </div>
        </div>
        
        <div className="md:w-4/5 text-center md:text-left space-y-2">
           <h3 className="text-lg md:text-xl font-serif font-medium text-[#720e1e]">
             {isEducation ? (item as Education).degree : (item as Affiliation).role}
           </h3>
           <h4 className="text-base md:text-lg font-bold text-gray-900 uppercase tracking-wide">
             {isEducation ? (item as Education).institution : (item as Affiliation).organization}
           </h4>
           <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
             {isEducation ? (item as Education).years : (item as Affiliation).description}
           </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* 1. Bio Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 mb-12">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <FadeIn direction="up" className="relative">
               <div className="relative aspect-[3/4] w-full max-w-xs mx-auto md:max-w-sm overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src="/retaUSA.png"
                    alt="Reta Jo Lewis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                    unoptimized
                  />
               </div>
            </FadeIn>

            {/* Right: Content */}
            <FadeIn direction="up" delay={0.15} className="space-y-4">
               <div>
                  <h1 className="text-3xl md:text-4xl font-serif text-[#720e1e] leading-tight mb-3">
                    Reta Jo Lewis
                  </h1>
                  <div className="w-24 h-1 bg-[#d4af37] mb-4"></div>
                  <p className="text-lg md:text-xl font-serif text-[#720e1e] leading-relaxed">
                    Civic and Business Leader | Former President & Chair of the Export-Import Bank
                  </p>
               </div>

               <div className="text-gray-700 font-light leading-relaxed space-y-4 text-base">
                 <p>
                   Reta Jo Lewis is a global business strategist, lawyer, and advisor with a distinguished 30-year career spanning international trade, export finance, transatlantic relations, and subnational diplomacy. She served as the 27th Chairman, President, and CEO of the Export-Import Bank of the United States (EXIM), becoming the first African American and only the second woman to lead the agency.
                 </p>
  
               </div>
            </FadeIn>
         </div>
      </div>

      {/* 2. Current Positions Section */}
      <SectionBreaker title="Current Positions" />
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <FadeIn delay={0.2}>
           {currentAffiliations.map((item, index) => renderItem(item, index))}
        </FadeIn>
      </div>

      {/* 3. Past Experience Section */}
      <SectionBreaker title="Past Experience" />
      <div className="max-w-4xl mx-auto px-6 md:px-8">
         <FadeIn delay={0.2}>
            {pastAffiliations.map((item, index) => renderItem(item, index))}
         </FadeIn>
      </div>
      
      {/* 4. Education Section */}
      <SectionBreaker title="Education" />
      <div className="max-w-4xl mx-auto px-6 md:px-8">
         <FadeIn delay={0.2}>
            {education.map((item, index) => renderItem(item, index, true))}
         </FadeIn>
      </div>
    </div>
  );
}
