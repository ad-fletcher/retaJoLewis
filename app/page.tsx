import Image from "next/image";
import Hero from "./components/hero/hero";
import { LogosCarousel } from "./components/logos-carousel/source";
import About from "./components/about/about";
import { Speak } from "./components/speak/speak";
import CTA from "./components/cta/cta";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="w-full flex flex-col items-center pb-6 md:pb-12">
        <About />
      </div>
      <div className="w-full flex flex-col items-center pb-6 md:pb-12">
        <Speak />
      </div>
      <div className="w-full flex flex-col items-center py-12 md:py-20 bg-[#a7011a]">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 md:mb-16 text-white">Affiliations</h2>
        <LogosCarousel />
      </div>
      <CTA />
    </div>
  );
}
