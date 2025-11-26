"use client";

import { useMemo } from "react";
import { AnimatedSpeaking } from "./animated-speak";

function Speak() {
  const testimonials = useMemo(() => [
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

  return <AnimatedSpeaking testimonials={testimonials} />;
}



export { Speak };
