import React from "react";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle.jsx";

import AccordionCard from "./AccordionCard/AccordionCard.jsx";
import TypingSpeed from "./TypingSpeed/TypingSpeed.jsx";
import LocationCard from "./LocationCard/LocationCard.jsx";
import GithubActivity from "./GithubActivity/GithubActivity.jsx";
import TechCarousel from "./TechCarousel/TechCarousel.jsx";

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full max-w-[1600px] mx-auto px-4 py-20 z-[1] overflow-hidden scroll-mt-32">
      <SectionTitle title="About Me" />
      <div className="w-full grid gap-6 grid-cols-4 auto-rows-auto lg:grid-cols-6">
        {/* Accordion Card: Desktop(Row 1-2, Col 1-4) */}
        <div className="bg-[var(--panel-bg)] rounded-xl p-6 shadow-sm transition-all duration-300 flex flex-col relative z-10 hover:translate-y-0 hover:shadow-md hover:z-20 col-span-4 min-h-[450px] lg:col-span-4 lg:row-span-2 lg:col-start-1 lg:row-start-1">
          <AccordionCard />
        </div>

        {/* Typing Speed: Desktop(Row 1, Col 5-6) */}
        <div className="bg-[var(--panel-bg)] rounded-xl p-6 shadow-sm transition-all duration-300 flex flex-col relative z-10 hover:translate-y-0 hover:shadow-md hover:z-20 col-span-4 min-h-[120px] lg:col-span-2 lg:col-start-5 lg:row-start-1">
          <TypingSpeed />
        </div>

        {/* Location Card: Desktop(Row 2, Col 5-6) */}
        <div className="bg-[var(--panel-bg)] rounded-xl p-6 shadow-sm transition-all duration-300 flex flex-col relative z-10 hover:translate-y-0 hover:shadow-md hover:z-20 col-span-4 min-h-[120px] lg:col-span-2 lg:col-start-5 lg:row-start-2">
          <LocationCard />
        </div>

        {/* Tech Carousel: Desktop(Row 3, Col 1-6) */}
        <div className="bg-[var(--panel-bg)] rounded-xl p-6 shadow-sm transition-all duration-300 flex flex-col relative z-10 hover:translate-y-0 hover:shadow-md hover:z-20 col-span-4 min-h-[150px] lg:col-span-6 lg:row-start-3 lg:col-start-1">
          <TechCarousel />
        </div>

        {/* Github Activity: Desktop(Row 4, Col 1-6) */}
        <div className="bg-[var(--panel-bg)] rounded-xl p-6 shadow-sm transition-all duration-300 flex flex-col relative z-10 hover:translate-y-0 hover:shadow-md hover:z-20 col-span-4 min-h-[200px] lg:col-span-6 lg:row-start-4 lg:col-start-1">
          <GithubActivity />
        </div>
      </div>
    </section>
  );
};

export default About;
