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
      <div className="w-full flex flex-col items-center pb-6 md:pb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 md:mb-12">Affiliations</h2>
        <LogosCarousel />
      </div>
      <CTA />
    </div>
  );
}
