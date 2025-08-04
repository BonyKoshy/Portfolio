// src/sections/HeroSection/HeroSection.jsx
import React from 'react';
import BlurText from '../../components/BlurText/BlurText';
import Button from '../../components/Button/Button';
import './HeroSection.css';

function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Main Blur Text Introduction Block */}
      <div className="hero-intro-text-block">
        <BlurText
          text="Hi, I'm Bony Koshy." // <-- ENSURE THIS STRING HAS SPACES
          delay={50}
          animateBy="letters"
          direction="bottom"
          className="hero-main-blur-text"
        />
        <BlurText
          text="A BCA Graduate." // <-- ENSURE THIS STRING HAS SPACES
          delay={50}
          animateBy="letters"
          direction="bottom"
          className="hero-main-blur-text hero-second-line"
        />
      </div>

      {/* Description below the main blur text */}
      <div className="hero-description-container">
        <p className="hero-description-line">“Freshly graduated, fully motivated.”</p>
        <p className="hero-description-line hero-description-single-line">
          Crafting smart solutions with a passion for digital excellence.
        </p>
      </div>

      {/* Call to Action Buttons */}
      <div className="hero-cta-buttons">
        <Button
          variant="primary"
          iconSrc="/icons/resume_icon.png"
          iconAlt="Resume Icon"
          onClick={() => window.open('/resume.pdf', '_blank', 'noopener noreferrer')}
        >
          Resume
        </Button>
        <Button
          variant="secondary"
          iconSrc="/icons/view_more_icon.png"
          iconAlt="View More Icon"
          onClick={() => scrollToSection('about')}
        >
          View More
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;