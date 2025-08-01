// src/sections/HeroSection/HeroSection.jsx
import React, { useState } from 'react';
import StatusIndicator from '../../components/StatusIndicator/StatusIndicator';
import BlurText from '../../components/BlurText/BlurText'; // Import BlurText
import './HeroSection.css';

function HeroSection() {
  const [status, setStatus] = useState('available');

  return (
    <section id="home" className="hero-section">
      {/* Status Indicator */}
      <div className="hero-status-bar">
        <StatusIndicator status={status} />
        <span className="hero-status-text">
          {status === 'available' ? 'Available for projects' : 'Currently busy'}
        </span>
      </div>

      {/* Blur Text for "Hi, I'm Bony Koshy. A BCA Graduate." */}
      <div className="hero-intro-text-container"> {/* Wrapper for alignment */}
        <p className="hero-intro-hi-im">Hi, I'm</p> {/* Smaller "Hi, I'm" */}
        <BlurText
          text="Bony Koshy."
          delay={80} // Adjust delay for animation speed
          animateBy="words"
          direction="top"
          className="hero-name-blur-text" // Custom class for styling
          minFontSize={80} // Base font size, BlurText will scale dynamically
          textColor="var(--text-color-primary)" // Theme-aware color
        />
        <BlurText
          text="A BCA Graduate."
          delay={80} // Adjust delay
          animateBy="words"
          direction="top"
          className="hero-bca-blur-text" // Custom class for styling
          minFontSize={40} // Smaller font size for the second line
          textColor="var(--text-color-secondary)" // Theme-aware color
        />
      </div>


      {/* Tagline (if still desired, or removed if the above is enough) */}
      {/* <p className="hero-tagline">
        A passionate developer building the future one line of code at a time
      </p> */}

      {/* Call to Action Buttons (Placeholder for now) */}
      <div className="hero-cta-buttons">
        <button className="hero-cta-button">Download Resume</button>
        <button className="hero-cta-button hero-cta-button--secondary">View Projects</button>
      </div>
    </section>
  );
}

export default HeroSection;