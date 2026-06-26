import React from "react";

interface SectionTitleProps {
  title: string;
}

/** Renders a section title. */
const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="w-full mb-8">
      <h2 className="font-sans text-[clamp(1.2rem,3vw,1.5rem)] text-primary m-0 font-semibold uppercase tracking-[1.5px]">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
