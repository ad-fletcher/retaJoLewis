"use client";

import { useMemo } from "react";
import Image from "next/image";

type Affiliation = {
  role: string;
  organization: string;
  description: string;
  logo?: string;
};

export default function AffiliationsPage() {
  const currentAffiliations = useMemo<Affiliation[]>(() => [
    {
      role: "Co-Chair, Global Future Council on Advance Manufacturing and Value Chains",
      organization: "World Economic Forum",
      description: "The World Economic Forum (WEF) is the international organization for Public-Private Cooperation. It provides a global, impartial and not-for-profit platform for meaningful connection between stakeholders to establish trust and build initiatives for cooperation and progress.",
      logo: "/wef.png",
    },

    {
      role: "Life Member",
      organization: "Council on Foreign Relations",
      description: "The Council on Foreign Relations (CFR) is an independent, nonpartisan American think tank specializing in U.S. foreign policy and international Relations.",
      logo: "/cfr.svg",
    },
    {
      role: "Board Member",
      organization: "Rare Earth Americas",
      description: "Rare Earth Americas is a company focused on developing and securing critical rare earth mineral resources essential for modern technology, clean energy, and national security. The organization works to establish a sustainable and secure supply chain for rare earth elements in the Americas.",
      logo: "/rareEarthAmericas.png",
    },
    {
      role: "Keynote Speaker",
      organization: "Leading Authorities, Inc.",
      description: "The Leading Authority, Inc. is Washington, D.C. top speakers bureau for sourcing and securing incredible keynote speakers, moderators and more for any type of meeting and for any audience.",
      logo: "/leadingauthorities.png",
    },
    {
      role: "Member of Advisory Board and Advisory Committee Economic Projects",
      organization: "American Leadership Initiative",
      description: "The American Leadership Initiative (ALI) is a non-profit organization that is developing a 21st century vision and policy agenda for American global leadership, based on American interest and shared values.",
      logo: "/americanLeadershipInitiative.webp",
    },
    {
      role: "Member",
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
      role: "Board Member",
      organization: "New York Stock Exchange",
      description: "The New York Stock Exchange (NYSE) is the world's largest stock exchange by market capitalization, providing a platform for companies to raise capital and for investors to trade securities. As a board member, Reta Jo Lewis contributes to strategic governance and oversight of the exchange's operations and policies.",
      logo: "/nyseLogo.jpeg",
    },
    {
      role: "Steering Committee",
      organization: "Global Power Women's Network",
      description: "The Global Power Women's Network is dedicated to empowering female leaders by providing a platform for mentorship, knowledge-sharing, and professional development. Through specialized discussions, networking opportunities, and initiatives, the network supports women in navigating leadership challenges, driving innovation, and shaping the future of their industries.",
      logo: "/globalPowerWomen.png",
    },

  ], []);

  const pastAffiliations = useMemo<Affiliation[]>(() => [
    {
      role: "27th Chairman, President, and CEO",
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
      role: "Vice President and Counselor to the President",
      organization: "United States Chamber of Commerce Foundation",
      description: "The U.S. Chamber of Commerce Foundation (USCCF) is a 501(c)(3) nonprofit affiliate of the U.S. Chamber of Commerce, dedicated to strengthening America's long term competitiveness by addressing developments that affect our nation, our economy and the global business environment.",
      logo: "/coc.svg",
    },
    {
      role: "Fellow",
      organization: "Presidential Management Fellows Program",
      description: "The Presidential Management Fellows Program (PMF) was a two-year fellowship training and leadership development program at a United States government agency, administered by the U.S. Office of Personnel Management for advanced degree holders entering public service.",
      logo: "/pmfFellow.png",
    },
  ], []);

  const renderAffiliationCard = (affiliation: Affiliation, index: number) => {
    return (
      <div
        key={index}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-10 border-b border-gray-200 last:border-b-0"
      >
        {affiliation.logo && (
          <div className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 flex justify-center sm:justify-start sm:self-start">
            <div className="relative w-full h-full">
              <Image
                src={affiliation.logo}
                alt={affiliation.organization}
                fill
                className="object-contain"
                sizes="128px"
                unoptimized={affiliation.logo?.endsWith('.jpg') || affiliation.logo?.endsWith('.webp') || affiliation.logo?.endsWith('.png')}
              />
            </div>
          </div>
        )}
        <div className="flex-1 prose prose-sm sm:prose-base md:prose-lg max-w-none">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-gray-900">
            {affiliation.role}
          </h3>
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">
            {affiliation.organization}
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {affiliation.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="py-8 sm:py-12 md:py-20">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
              Reta Jo Lewis
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8">
              Affiliations
            </h2>
          </div>

          {/* Current Affiliations */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-300">
              Current Affiliations
            </h2>
            <div className="space-y-0">
              {currentAffiliations.map((affiliation, index) => renderAffiliationCard(affiliation, index))}
            </div>
          </section>

          {/* Past Affiliations */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-300">
              Past Affiliations
            </h2>
            <div className="space-y-0">
              {pastAffiliations.map((affiliation, index) => renderAffiliationCard(affiliation, index))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
