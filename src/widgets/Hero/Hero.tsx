import React, { useRef } from "react";
import { FileUser, ArrowDown } from "lucide-react";
import TextPressure from "@/shared/ui/TextPressure/TextPressure";
import VariableProximity from "@/shared/ui/VariableProximity/VariableProximity";
import { RippleButton } from "@/shared/ui/magicui/ripple-button";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen w-full flex p-8"
    >
      <div className="w-full flex items-center justify-start max-[900px]:justify-center">
        <div className="flex flex-col items-start gap-2 max-w-1/2 text-left max-[900px]:max-w-[80%] max-[900px]:items-center max-[900px]:text-center max-[640px]:max-w-full">
          <h2 className="text-[clamp(1.2rem,3vw,1.5rem)] text-(--accent) m-0 font-light uppercase tracking-[1.5px]">
            <VariableProximity
              label="Full Stack Developer"
              fromFontVariationSettings="'wght' 300, 'opsz' 12"
              toFontVariationSettings="'wght' 900, 'opsz' 48"
              containerRef={heroRef}
              radius={150}
            />
          </h2>

          <div className="w-full max-w-150 h-27.5 max-[640px]:h-20">
            <TextPressure
              text="Bony Koshy"
              textColor="var(--text-primary)"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={false}
              italic={true}
              minFontSize={48}
            />
          </div>

          <p className="font-[Poppins] text-[clamp(1rem,2vw,1.1rem)] text-(--text-secondary) m-0 max-w-150 leading-[1.7] font-normal text-justify max-[900px]:text-center max-[640px]:text-center">
            A passionate and creative developer focused on building beautiful,
            functional, and user-friendly digital experiences. I turn complex
            problems into elegant solutions.
          </p>

          <div className="flex gap-4 mt-6">
            <RippleButton
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg no-underline font-semibold text-lg transition-all duration-300 border-2 border-transparent bg-(--accent) text-(--background) hover:bg-transparent hover:text-(--accent) hover:border-(--accent) group"
            >
              <FileUser size={20} className="transition-transform duration-300 group-hover:translate-y-0.5 max-[640px]:hidden" />
              <span>My Resume</span>
            </RippleButton>
            <RippleButton
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg no-underline font-semibold text-lg transition-all duration-300 border-2 bg-transparent text-(--text-secondary) border-(--text-secondary) hover:text-(--accent) hover:border-(--accent) group"
            >
              <ArrowDown size={20} className="transition-transform duration-300 group-hover:translate-y-0.5 max-[640px]:hidden" />
              <span>View More</span>
            </RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
