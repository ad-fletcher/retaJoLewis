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
      "description": "A 10-minute inspirational keynote at Women's Entrepreneurship Day emphasizing 'You can be the first, but don't be the last.' Highlights women's role in driving innovation and discusses EXIM's $135 billion financing authority supporting women entrepreneurs and small businesses.",
      "name": "WEDO 2024 Keynote Address",
      "title": "Women's Entrepreneurship Day Organization Keynote",
      "src": "/speaking/wedo.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=v8hDSYTOhZ8"
    },
    {
      "description": "A 21-minute panel discussion at the Concordia Summit examining how geopolitical tensions are reshaping global trade and supply chains. Discusses strategies for building resilience through partnerships and leveraging export finance for American competitiveness.",
      "name": "Concordia Summit 2024 Panel Discussion",
      "title": "Building Resilience: Geopolitics and Global Trade",
      "src": "/speaking/concordia.png",
      "videoUrl": "https://www.youtube.com/watch?v=L_UHbh6wGYY"
    },
    {
      "description": "An hour-long interview on women leaders. Lewis shares her journey as the first African-American president and chair of EXIM, discussing working for something bigger than yourself, how skills prepare you for opportunities, and the role of networks and mentors.",
      "name": "Innovating Leadership Podcast – Women on the Rise",
      "title": "A Leadership Journey: Mentorship and Women's Advancement",
      "src": "/speaking/leadershipThumbnail.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=Bf0bdP4YVQM"
    },
    {
      "description": "A keynote at the Concordia Summit discussing building a prosperous economy for the next generation. Highlights EXIM's China and Transformational Export Program, the Make More in America Initiative, and President Biden's Partnership for Global Infrastructure.",
      "name": "Concordia Summit 2022 Keynote",
      "title": "Building a Prosperous Economy for the Next Generation",
      "src": "/speaking/concordia-2022.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=_BQNfVzN2i4"
    },
    {
      "description": "Discussion at the Atlantic Council Regional Conference on Clean and Secure Energy in Istanbul. Discusses EXIM's investments in clean energy, U.S. export financing's role in advancing renewable energy in Eastern Europe, and nuclear energy's place in the transition.",
      "name": "Atlantic Council Istanbul Conference",
      "title": "EXIM Support for Clean and Secure Energy Transitions",
      "src": "/speaking/atlantic-istanbul-2024.jpg",
      "videoUrl": "https://www.youtube.com/watch?v=PynCuYJMkbY"
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
    },
    {
      "description": "An international media interview on Voice of America Africa marking the one-year anniversary of her swearing-in and honoring Black History Month. Discusses EXIM's vision and critical role in creating U.S. jobs by financing exports, with renewed focus on Africa.",
      "name": "Voice of America (VOA) Africa Interview",
      "title": "EXIM's Role in Global Trade and African Markets",
      "src": "/speaking/voaAfrica.png",
      "videoUrl": "https://www.voaafrica.com/a/6946660.html"
    },
    {
      "description": "A 15-minute podcast discussing how EXIM supports American companies in international markets through export financing, insurance, and guarantees. Highlights small business success stories and explores how export finance serves as a tool for economic security.",
      "name": "The San Francisco Experience Podcast",
      "title": "EXIM's Role in Supporting U.S. Exports and Jobs",
      "src": "/speaking/sfPodcast.png",
      "videoUrl": "https://creators.spotify.com/pod/profile/james-herlihy/episodes/Talking-with-Reta-Jo-Lewis--President-and-Chairwoman-of-the-EXIM-Bank-of-the-United-States-e2a65p6"
    },
    {
      "description": "An interview conducted two days after the U.S. midterm elections discussing transatlantic leadership and international relations. Provides insights on U.S. policies, international inclusion, and whether U.S.-European ties have reached a turning point.",
      "name": "Geneva Centre for Security Policy Interview",
      "title": "US Policies and International Inclusion Discussion",
      "src": "/speaking/geneva-2018.png",
      "videoUrl": "https://www.youtube.com/watch?v=aunl7q212MA"
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

