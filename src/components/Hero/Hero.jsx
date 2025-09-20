// src/components/Hero/Hero.jsx
import React, { useRef } from 'react';
import TextPressure from '../TextPressure/TextPressure';
import VariableProximity from '../VariableProximity/VariableProximity';
import './Hero.css';

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
            A passionate and creative developer focused on building beautiful, functional, and user-friendly digital experiences. I turn complex problems into elegant solutions.
          </p>

          <div className="hero-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.75A3.75 3.75 0 0010.5 3h-4.875zM15 4.875c0-.621.504-1.125 1.125-1.125h.375a.75.75 0 01.75.75v3.375c0 .621-.504 1.125-1.125 1.125h-.375a.75.75 0 01-.75-.75V4.875z" />
                <path d="M10.719 16.313c.397.034.781.14 1.144.306a.75.75 0 00.9-1.281 11.22 11.22 0 00-2.528-.934.75.75 0 00-.547 1.399c.394.195.78.358 1.15.487zM8.375 18.75a.75.75 0 000 1.5h7.25a.75.75 0 000-1.5h-7.25z" />
              </svg>
              <span>My Resume</span>
            </a>
            <a href="#about" className="btn btn-secondary">
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
              </svg>
              <span>View More</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;