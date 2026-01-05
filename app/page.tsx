import Hero from "./components/hero/hero";
import { LogosCarousel } from "./components/logos-carousel/source";
import About from "./components/about/about";
import { Speak } from "./components/speak/speak";
import CTA from "./components/cta/cta";
import { FadeIn } from "./components/ui/fade-in";
import { SectionBreaker } from "./components/ui/section-breaker";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">


      <div className="relative z-10 bg-white">
        {/* About Section */}
        <About />
        
        
        {/* Current Position Breaker */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
           <SectionBreaker title="Current Position" />
        </div>

        {/* Affiliations */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center mb-12">
          </div>
          <div className="flex justify-center">
             <LogosCarousel />
          </div>
        </section>

        {/* Speaking Breaker */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
           <SectionBreaker title="Speaking Engagements" />
        </div>

        {/* Speaking Section */}
        <Speak />
        
        {/* CTA */}
        <CTA />
      </div>
    </main>
  );
}
