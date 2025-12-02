"use client";

import { useMemo } from "react";
import Image from "next/image";
import { ExternalLink, PlayCircle } from "lucide-react";
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
      "title": "Securing America's Economic Future",
      "src": "/speaking/csis.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=5dXedW5OEjE"
    },
    {
      "description": "Farewell remarks reflecting on her tenure as EXIM Chair during the Biden-Harris administration. Lewis thanks EXIM customers and partners for supporting American workers and expresses gratitude for the team's dedication in supporting U.S. exporters globally.",
      "name": "EXIM President & Chair Final Remarks",
      "title": "Farewell Message to EXIM Customers and Partners",
      "src": "/speaking/exim-final-remarks.png",
      "videoUrl": "https://www.youtube.com/watch?v=onVHsaG9anE"
    },

    {
      "description": "A podcast interview discussing diversity in foreign policy and national security, DC Fellowship opportunities, and mentorship. Lewis shares her perspective as a mentor and co-chair of Women of Color for Biden-Harris, emphasizing how women strengthen diplomatic corps.",
      "name": "The Minority Leaders Podcast",
      "title": "Diversity, Mentorship, and Women's Leadership",
      "src": "/speaking/minorityLeaders.jpg",
      "videoUrl": "https://podcast.algenesajery.com/a-conversation-with-reta-jo-lewis-german-marshall-fund-of-the-united-states/"
    },
    {
      "description": "A fireside chat at the University of Detroit Mercy discussing responsible investing and global trade. Lewis shares insights on how EXIM financing can drive sustainable development and discusses her leadership journey as a woman in finance and diplomacy.",
      "name": "University of Detroit Mercy Fireside Chat",
      "title": "Responsible Investing and Global Trade Leadership",
      "src": "/speaking/charlton.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=lVtLvuXDwtE"
    }
  ], []);

  return (
    <div className="min-h-screen pt-24 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#4a121b] relative overflow-hidden">
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
        <div className="text-center mb-16 sm:mb-20 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white font-serif tracking-tight">
            Speaking Engagements
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8 rounded-full opacity-80" />
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            Selected keynotes, interviews, and discussions on economic security, international trade, and global leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <a
              href={testimonial.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group bg-[#2b0a0f]/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/5 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video bg-[#2b0a0f] overflow-hidden">
                <Image
                  src={testimonial.src}
                  alt={testimonial.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 text-white shadow-lg">
                    <PlayCircle className="w-12 h-12 text-[#d4af37]" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col grow relative">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-[#d4af37] border border-[#d4af37]/30 rounded-full uppercase bg-[#d4af37]/5 mb-3">
                    {testimonial.name}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-serif leading-tight group-hover:text-[#d4af37] transition-colors duration-300">
                    {testimonial.title}
                  </h3>
                </div>
                
                <p className="text-base text-gray-300 mb-8 line-clamp-3 leading-relaxed font-light">
                  {testimonial.description}
                </p>
                
                <div className="mt-auto flex items-center text-[#d4af37] font-medium text-sm tracking-wide group/btn">
                  <span className="mr-2 border-b border-transparent group-hover/btn:border-[#d4af37] transition-all">Watch Full Video</span>
                  <ExternalLink className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

