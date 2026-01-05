"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../components/ui/fade-in";

type SpeakingEntry = {
  source: string;
  headline: string;
  description: string;
  src: string;
  url: string;
};

export default function SpeakingPage() {
  const speakingEntries = useMemo<SpeakingEntry[]>(() => [
    {
      source: "CSIS Economic Security Event",
      headline: "Securing America's Economic Future",
      description: "A 30-minute conversation on EXIM's Supply Chain Resiliency Initiative and efforts to strengthen U.S. supply chains by reducing reliance on China for critical minerals. Discusses the Make More in America Initiative and how EXIM advances U.S. economic security.",
      src: "/speaking/csis.jpg",
      url: "https://www.youtube.com/watch?v=5dXedW5OEjE"
    },
    {
      source: "EXIM President & Chair Final Remarks",
      headline: "Farewell Message to EXIM Customers and Partners",
      description: "Farewell remarks reflecting on her tenure as EXIM Chair during the Biden-Harris administration. Lewis thanks EXIM customers and partners for supporting American workers and expresses gratitude for the team's dedication in supporting U.S. exporters globally.",
      src: "/speaking/exim-final-remarks.png",
      url: "https://www.youtube.com/watch?v=onVHsaG9anE"
    },
    {
      source: "The Minority Leaders Podcast",
      headline: "Diversity, Mentorship, and Women's Leadership",
      description: "A podcast interview discussing diversity in foreign policy and national security, DC Fellowship opportunities, and mentorship. Lewis shares her perspective as a mentor and co-chair of Women of Color for Biden-Harris, emphasizing how women strengthen diplomatic corps.",
      src: "/speaking/minorityLeaders.jpg",
      url: "https://podcast.algenesajery.com/a-conversation-with-reta-jo-lewis-german-marshall-fund-of-the-united-states/"
    },
    {
      source: "University of Detroit Mercy Fireside Chat",
      headline: "Responsible Investing and Global Trade Leadership",
      description: "A fireside chat at the University of Detroit Mercy discussing responsible investing and global trade. Lewis shares insights on how EXIM financing can drive sustainable development and discusses her leadership journey as a woman in finance and diplomacy.",
      src: "/speaking/charlton.jpg",
      url: "https://www.youtube.com/watch?v=lVtLvuXDwtE"
    },
  ], []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Maroon Section Banner */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#720e1e] px-12 py-4">
          <h1 className="text-white text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
            Speaking Engagements
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-16">
        <p className="text-center text-gray-700 text-lg font-light">
          Selected keynotes, interviews, and discussions on economic security, international trade, and global leadership.
        </p>
      </div>

      {/* Grid of Speaking Cards */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {speakingEntries.map((entry, index) => (
            <FadeIn key={index} delay={index * 0.05} direction="up">
              <div className="group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-5 bg-gray-100">
                  <Image
                    src={entry.src}
                    alt={entry.headline}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized
                  />
                </div>

                {/* Source */}
                <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-3">
                  {entry.source}
                </p>

                {/* Headline */}
                <h2 className="font-serif text-gray-900 text-xl md:text-2xl leading-tight mb-4">
                  {entry.headline}
                </h2>

                {/* Description */}
                <p className="text-gray-700 font-light leading-relaxed mb-6 text-base">
                  {entry.description}
                </p>

                {/* Watch Full Video Button */}
                <Link
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border border-[#720e1e] text-[#720e1e] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#720e1e] hover:text-white transition-colors duration-300"
                >
                  Watch Full Video
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
