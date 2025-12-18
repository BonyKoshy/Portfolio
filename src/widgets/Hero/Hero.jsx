// src/components/Hero/Hero.jsx
import React, { useRef } from "react";
import { FileUser, ArrowDown } from "lucide-react";
import TextPressure from "@/shared/ui/TextPressure/TextPressure";
import VariableProximity from "@/shared/ui/VariableProximity/VariableProximity";
import "./Hero.css";

function Hero() {
  const heroRef = useRef(null);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h2 className="hero-tagline">
            <VariableProximity
              label="Full Stack Developer"
              fromFontVariationSettings="'wght' 300, 'opsz' 12"
              toFontVariationSettings="'wght' 900, 'opsz' 48"
              containerRef={heroRef}
              radius={150}
            />
          </h2>

          <div className="hero-title-container">
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

          <p className="hero-description">
            A passionate and creative developer focused on building beautiful,
            functional, and user-friendly digital experiences. I turn complex
            problems into elegant solutions.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FileUser className="btn-icon" size={20} /> {/* Replaced icon */}
              <span>My Resume</span>
            </a>
            <a href="#about" className="btn btn-secondary">
              <ArrowDown className="btn-icon" size={20} /> {/* Replaced icon */}
              <span>View More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
