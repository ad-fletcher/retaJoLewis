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
        "name": "Innovating Leadership Podcast \u2013 Women on the Rise",
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
    ,
  ], []);

  return <AnimatedSpeaking testimonials={testimonials} />;
}



export { Speak };