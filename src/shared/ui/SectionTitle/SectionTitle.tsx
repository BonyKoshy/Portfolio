import React, { useRef } from "react";
import VariableProximity from "../VariableProximity/VariableProximity";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full mb-8" ref={containerRef}>
      <h2 className="font-sans text-[clamp(1.2rem,3vw,1.5rem)] text-(--accent) m-0 font-semibold uppercase tracking-[1.5px]">
        <VariableProximity
          label={title}
          fromFontVariationSettings="'wght' 300, 'opsz' 12"
          toFontVariationSettings="'wght' 900, 'opsz' 48"
          containerRef={containerRef}
          radius={200}
        />
      </h2>
    </div>
  );
};

export default SectionTitle;
