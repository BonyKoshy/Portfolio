// src/components/About/About.jsx
import React from 'react'; // Removed useState
import './About.css';
import SectionTitle from '../SectionTitle/SectionTitle';

import AccordionCard from './AccordionCard/AccordionCard';
import TypingSpeed from './TypingSpeed/TypingSpeed';
import GithubActivity from './GithubActivity/GithubActivity';

function About() {
  // The state for expanding/collapsing is no longer needed
  return (
    <section id="about" className="content-section">
      <SectionTitle title="About Me" />
      <div className="about-grid">
        <div className="grid-item div1">
          <AccordionCard />
        </div>
        <div className="grid-item div2">
          {/* Now just renders the component directly */}
          <TypingSpeed />
        </div>
        <div className="grid-item div3">
          {/* Now just renders the component directly */}
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
        <div className="grid-item div7">
          <div className="card-placeholder">7. Location</div>
        </div>
        <div className="grid-item div8 social-icons">
          <div className="card-placeholder">8</div>
        </div>
      </div>
    </section>
  );
}

export default About;