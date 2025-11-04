// src/components/SectionTitle/SectionTitle.jsx
import React, { useRef } from "react";
import VariableProximity from "../VariableProximity/VariableProximity";
import "./SectionTitle.css";

function SectionTitle({ title }) {
  const containerRef = useRef(null);

  return (
    <div className="section-title-container" ref={containerRef}>
      <h2 className="section-title">
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
}

export default SectionTitle;
