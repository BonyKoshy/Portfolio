// src/components/About/About.jsx
import React, { useState } from 'react'; // Import useState
import './About.css';
import SectionTitle from '../SectionTitle/SectionTitle';

import AccordionCard from './AccordionCard/AccordionCard';
import TypingSpeed from './TypingSpeed/TypingSpeed';
import GithubActivity from './GithubActivity/GithubActivity';
// ... other future imports

function About() {
  // State to manage if the GitHub card is expanded
  // true = GitHub expanded, TypingSpeed collapsed
  // false = GitHub collapsed, TypingSpeed expanded
  const [isGithubExpanded, setIsGithubExpanded] = useState(false);

  const toggleExpand = () => {
    setIsGithubExpanded(prev => !prev);
  };

  return (
    <section id="about" className="content-section">
      <SectionTitle title="About Me" />
      <div className="about-grid">
        <div className="grid-item div1">
          <AccordionCard />
        </div>
        <div className="grid-item div2">
          {/* TypingSpeed is expanded when GitHub is NOT */}
          <TypingSpeed isExpanded={!isGithubExpanded} />
        </div>
        <div className="grid-item div3">
          {/* Pass the state and the toggle function to the GitHub card */}
          <GithubActivity isExpanded={isGithubExpanded} toggleExpand={toggleExpand} />
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