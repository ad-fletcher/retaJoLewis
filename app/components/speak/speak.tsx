"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../ui/fade-in";

export function Speak() {
  const testimonials = useMemo(() => [
    {
      description: "A 30-minute conversation on EXIM's Supply Chain Resiliency Initiative and efforts to strengthen U.S. supply chains by reducing reliance on China for critical minerals.",
      name: "CSIS Economic Security Event",
      title: "Securing America's Economic Future",
      src: "/speaking/csis.jpg",
      videoUrl: "https://www.youtube.com/watch?v=5dXedW5OEjE"
    },
    {
      description: "A fireside chat at the University of Detroit Mercy discussing responsible investing and global trade. Lewis shares insights on how EXIM financing can drive sustainable development.",
      name: "University of Detroit Mercy Fireside Chat",
      title: "Responsible Investing and Global Trade Leadership",
      src: "/retaUSA.png",
      videoUrl: "https://www.youtube.com/watch?v=lVtLvuXDwtE"
    }
  ], []);

  return (
    <section className="w-full max-w-screen-xl mx-auto px-6 md:px-12 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {testimonials.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
            <Link href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative aspect-video w-full overflow-hidden mb-5 bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#720e1e] ml-0.5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                   </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-serif text-gray-900 group-hover:text-[#720e1e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {item.name}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
