// src/components/About/About.jsx
import React from 'react';
import './About.css';
import SectionTitle from '../SectionTitle/SectionTitle';

import AccordionCard from './AccordionCard/AccordionCard';
import TypingSpeed from './TypingSpeed/TypingSpeed';
import LocationCard from './LocationCard/LocationCard'; // Import LocationCard
import GithubActivity from './GithubActivity/GithubActivity';

function About() {
  return (
    <section id="about" className="content-section">
      <SectionTitle title="About Me" />
      <div className="about-grid">
        {/* Re-ordered cards and removed the 8th card */}
        <div className="grid-item div1">
          <AccordionCard />
        </div>
        <div className="grid-item div2">
          <TypingSpeed />
        </div>
        <div className="grid-item div7">
          <LocationCard />
        </div>
        <div className="grid-item div3">
          <GithubActivity />
        </div>
        <div className="grid-item div4">
          <div className="card-placeholder">4. Tech Carousel</div>
        </div>
        <div className="grid-item div5">
          <div className="card-placeholder">5. Education</div>
        </div>
        <div className="grid-item div6">
          <div className="card-placeholder">6. Certificates</div>
        </div>
      </div>
    </section>
  );
}

export default About;