"use client";

import RotatingEarth from "../components/globe/globe";

export default function VanderbiltPage() {
  return (
    <div className="min-h-screen pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 mt-4 sm:mt-8 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Reach out to
          </h1>
          <a 
            href="mailto:retajo@vanderbiltglobalstrategy.com" 
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 hover:text-gray-900 transition-colors inline-block"
          >
            retajo@vanderbiltglobalstrategy.com
          </a>
        </div>
        
        <div className="flex justify-center items-center">
          <RotatingEarth width={800} height={600} />
        </div>
      </div>
    </div>
  );
}

