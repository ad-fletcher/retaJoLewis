"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import PhysicsButton from "../components/ui/button";

type Testimonial = {
  description: string;
  name: string;
  title: string;
  src: string;
  videoUrl: string;
};

export default function SpeakingPage() {
  const testimonials = useMemo<Testimonial[]>(() => [
    {
      "description": "A 30-minute conversation on EXIM's Supply Chain Resiliency Initiative and efforts to strengthen U.S. supply chains by reducing reliance on China for critical minerals. Discusses the Make More in America Initiative and how EXIM advances U.S. economic security.",
      "name": "CSIS Economic Security Event",
      "title": "Securing America's Economic Future: Supply Chain and Competitiveness",
      "src": "/speaking/csis.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=5dXedW5OEjE"
    },
    {
      "description": "Farewell remarks reflecting on her tenure as EXIM Chair during the Biden-Harris administration. Lewis thanks EXIM customers and partners for supporting American workers and expresses gratitude for the team's dedication in supporting U.S. exporters globally.",
      "name": "EXIM President & Chair Final Remarks",
      "title": "Farewell Message to EXIM Customers and Partners (January 2025)",
      "src": "/speaking/exim-final-remarks.png",
      "videoUrl": "https://www.youtube.com/watch?v=onVHsaG9anE"
    },

    {
      "description": "A podcast interview discussing diversity in foreign policy and national security, DC Fellowship opportunities, and mentorship. Lewis shares her perspective as a mentor and co-chair of Women of Color for Biden-Harris, emphasizing how women strengthen diplomatic corps.",
      "name": "The Minority Leaders Podcast with Algene Sajery",
      "title": "Diversity, Mentorship, and Women's Leadership in Foreign Policy",
      "src": "/speaking/minorityLeaders.jpg",
      "videoUrl": "https://podcast.algenesajery.com/a-conversation-with-reta-jo-lewis-german-marshall-fund-of-the-united-states/"
    },
    {
      "description": "A fireside chat at the University of Detroit Mercy discussing responsible investing and global trade. Lewis shares insights on how EXIM financing can drive sustainable development and discusses her leadership journey as a woman in finance and diplomacy.",
      "name": "University of Detroit Mercy Charlton Center Fireside Chat",
      "title": "Responsible Investing and Global Trade Leadership",
      "src": "/speaking/charlton.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=lVtLvuXDwtE"
    }
  ], []);

  return (
    <div className="min-h-screen pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-8 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4">Speaking Engagements</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Reta Jo Lewis&apos;s speaking engagements, interviews, and keynotes on topics ranging from economic security to women&apos;s leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-100">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                  onError={(e) => {
                    console.error("Failed to load image:", testimonial.src);
                  }}
                />
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 flex flex-col grow">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {testimonial.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                  {testimonial.title}
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-4 grow">
                  {testimonial.description}
                </p>
                
                <a
                  href={testimonial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <PhysicsButton 
                    text="Watch" 
                    size="sm" 
                    className="w-full" 
                    icon={<ExternalLink className="h-4 w-4" />}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

