"use client";

import { useMemo } from "react";
import Image from "next/image";

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

export default function AffiliationsPage() {
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

  const renderAffiliationCard = (affiliation: Affiliation, index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-xl transition-all hover:shadow-2xl"
      >
        {affiliation.logo && (
          <div className="shrink-0 flex items-center justify-center sm:justify-start sm:self-start mx-auto sm:mx-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gray-50 rounded-xl p-4 shadow-sm flex items-center justify-center border border-gray-100">
              <Image
                src={affiliation.logo}
                alt={affiliation.organization}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 128px, 160px"
                unoptimized={affiliation.logo?.endsWith('.jpg') || affiliation.logo?.endsWith('.webp') || affiliation.logo?.endsWith('.png')}
              />
            </div>
          </div>
        )}
        <div className="flex-1 prose prose-sm sm:prose-base md:prose-lg max-w-none">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-medium mb-1 sm:mb-2 text-gray-700">
            {affiliation.role}
          </h3>
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-black">
            {affiliation.organization}
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            {affiliation.description}
          </p>
        </div>
      </div>
    );
  };

  const renderEducationCard = (edu: Education, index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-xl transition-all hover:shadow-2xl"
      >
        {edu.logo && (
          <div className="shrink-0 flex items-center justify-center sm:justify-start sm:self-start mx-auto sm:mx-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-gray-50 rounded-xl p-4 shadow-sm flex items-center justify-center border border-gray-100">
              <Image
                src={edu.logo}
                alt={edu.institution}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 128px, 160px"
                unoptimized={edu.logo?.endsWith('.jpg') || edu.logo?.endsWith('.webp') || edu.logo?.endsWith('.png')}
              />
            </div>
          </div>
        )}
        <div className="flex-1 prose prose-sm sm:prose-base md:prose-lg max-w-none">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-medium mb-1 sm:mb-2 text-gray-700">
            {edu.degree}
          </h3>
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-black">
            {edu.institution}
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            {edu.years}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 bg-[#f30126] relative">
        {/* Grid background pattern */}
        <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="py-6 sm:py-8 md:py-12 lg:py-20">
          {/* Page Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 sm:mb-3 md:mb-4 text-white">
              Reta Jo Lewis
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium mb-4 sm:mb-6 md:mb-8 text-white">
              Affiliations
            </h2>
          </div>

          {/* Current Affiliations */}
          <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2 sm:pb-3 md:pb-4 border-b border-[#d4af37]/30 text-white">
              Current Affiliations
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {currentAffiliations.map((affiliation, index) => renderAffiliationCard(affiliation, index))}
            </div>
          </section>

          {/* Past Affiliations */}
          <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2 sm:pb-3 md:pb-4 border-b border-[#d4af37]/30 text-white">
              Past Affiliations
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {pastAffiliations.map((affiliation, index) => renderAffiliationCard(affiliation, index))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2 sm:pb-3 md:pb-4 border-b border-[#d4af37]/30 text-white">
              Education
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => renderEducationCard(edu, index))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
