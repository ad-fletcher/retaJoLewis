"use client";

import { useMemo } from "react";
import Image from "next/image";

type Affiliation = {
  name: string;
  description: string;
  role: string;
  period?: string;
  logo?: string;
  links?: { label: string; url: string }[];
  additionalInfo?: string;
  fullDescription?: boolean; // If true, description already contains full text including role
};

export default function AffiliationsPage() {
    const currentAffiliations = useMemo<Affiliation[]>(() => [
        {
          name: "Export–Import Bank of the United States (EXIM)",
          description: "The official export credit agency of the United States, providing financing and insurance to support American exports.",
          role: "President and Chair of the Board of Directors",
          period: "February 2022 – present",
          logo: "/exportImport.svg",
        },
        {
          name: "Council on Foreign Relations (CFR)",
          description: "An independent, nonpartisan think tank focused on foreign policy and international affairs.",
          role: "Life Member",
          logo: "/cfr.svg",
        },
        {
          name: "Leadership Council for Women in National Security (LCWINS)",
          description: "A nonprofit organization dedicated to advancing women's leadership in national security.",
          role: "Steering Committee Member (former Board Member)",
          logo: "/lcw.svg",
        },
        {
          name: "D.C. Democratic State Committee",
          description: "The governing body of the Democratic Party in the District of Columbia.",
          role: "At-Large Committeewoman",
        },
        {
          name: "International Women's Forum (IWF)",
          description: "A global organization of women leaders working to advance women's leadership across all sectors.",
          role: "Member",
          logo: "/iwfLogo.svg",
        },
      ], []);
      

      const pastGovernmentRoles = useMemo<Affiliation[]>(() => [
        {
          name: "U.S. Department of State",
          description: "Federal executive department responsible for foreign policy and international relations.",
          role: "Special Representative for Global Intergovernmental Affairs",
          period: "2010–2013, Obama Administration",
          logo: "/state.svg",
        },
        {
          name: "The White House",
          description: "Executive office of the President of the United States.",
          role: "Special Assistant to the President for Political Affairs",
          period: "1993–1995, Clinton Administration",
        },
        {
          name: "District of Columbia Government",
          description: "Local government of the District of Columbia, responsible for municipal services and administration.",
          role: "Chief of Staff, Department of Public Works",
          period: "Early 1990s",
          additionalInfo: "And later chaired the D.C. Commission for Women",
        },
        {
          name: "Obama-Biden Transition Project",
          description: "Transition team preparing for the Obama-Biden administration.",
          role: "Director of Business Outreach",
          period: "2008–2009",
        },
        {
          name: "Political Campaign Roles",
          description: "Active in political campaigns, serving on the National Finance Committee for Hillary Clinton's 2008 and 2016 presidential campaigns, as a pledged delegate to the 2016 Democratic National Convention, and as a candidate in the 2014 D.C. mayoral election.",
          role: "",
          fullDescription: true,
        },
        {
          name: "German Marshall Fund of the United States (GMF)",
          description: "Nonpartisan policy organization dedicated to strengthening transatlantic cooperation, focused on working with Congress and public sector partners.",
          role: "Senior Fellow and Director of Congressional Affairs",
          period: "2015–2022",
          logo: "/gmf.jpg",
        },
        {
          name: "U.S. Chamber of Commerce",
          description: "Leading business advocacy organization; role focused on public-private outreach and government-facing initiatives.",
          role: "Vice President and Counselor to the President",
          period: "Early 2000s",
          logo: "/coc.svg",
          additionalInfo: "Focusing on outreach to small businesses and women- and minority-owned enterprises",
        },
      ], []);
      

      const pastPrivateRoles = useMemo<Affiliation[]>(() => [
        {
          name: "Arter & Hadden LLP",
          description: "Of Counsel, specializing in representing government officials and guiding regulatory and policy matters.",
          role: "Of Counsel",
          period: "1996–1997",
        },
        {
          name: "Greenberg Traurig LLP",
          description: "Shareholder (Partner), active in Government Affairs and Public Finance, represented multinational corporations, trade associations, and government entities.",
          role: "Shareholder",
          period: "1997–2000",
        },
        {
          name: "Edwards Angell Palmer & Dodge LLP (later Edwards Wildman Palmer LLP)",
          description: "Counsel, provided strategic and legal counsel for international business development, focusing on emerging markets.",
          role: "Counsel",
          period: "2007–2009",
        },
        {
          name: "Vanderbilt Consulting, LLC",
          description: "Managing director of a firm offering government relations and strategic counsel to clients for regulatory, policy, and international business development issues.",
          role: "Managing Director",
          period: "2005–2007",
        },
      ], []);
      

  const renderAffiliationCard = (affiliation: Affiliation, index: number) => {
    const hasLogo = !!affiliation.logo;
    
    return (
      <div
        key={index}
        className={`flex flex-col ${hasLogo ? "sm:flex-row" : ""} gap-3 sm:gap-4 md:gap-6 items-start`}
      >
        {hasLogo && (
          <div className="shrink-0 w-full sm:w-32 md:w-40 flex justify-center sm:justify-start">
            <div className="relative w-full aspect-[4/3] max-w-[120px] sm:max-w-[160px] md:max-w-none">
              <Image
                src={affiliation.logo!}
                alt={affiliation.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 120px, (max-width: 768px) 128px, 160px"
                unoptimized={affiliation.logo?.endsWith('.jpg')}
              />
            </div>
          </div>
        )}
        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            {affiliation.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
            {affiliation.fullDescription ? (
              affiliation.description
            ) : (
              <>
                {affiliation.description}
                {affiliation.role && (
                  <>
                    {" "}Reta {affiliation.period ? "served" : "serves"} as {affiliation.role}
                    {affiliation.period && ` (${affiliation.period})`}
                    {affiliation.additionalInfo && ` ${affiliation.additionalInfo}`}.
                  </>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="py-8 sm:py-12 md:py-20">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">
              Affiliations
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Reta Jo Lewis&apos;s professional affiliations and roles across government, private sector, and nonprofit organizations.
            </p>
          </div>

          {/* Current Affiliations */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-200">
              Current Affiliations
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {currentAffiliations.map((affiliation, index) => renderAffiliationCard(affiliation, index))}
            </div>
          </section>

          {/* Past Government & Public Sector Roles */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-200">
              Past Government & Public Sector Roles
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {pastGovernmentRoles.map((affiliation, index) => renderAffiliationCard(affiliation, index))}
            </div>
          </section>

          {/* Past Private Sector & Nonprofit Roles */}
          <section className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-200">
              Past Private Sector & Nonprofit Roles
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {pastPrivateRoles.map((affiliation, index) => renderAffiliationCard(affiliation, index))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

