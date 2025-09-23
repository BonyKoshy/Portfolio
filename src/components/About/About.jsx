// src/components/About/About.jsx
import React from 'react';
import './About.css';
import SectionTitle from '../SectionTitle/SectionTitle';

import AccordionCard from './AccordionCard/AccordionCard';
import TypingSpeed from './TypingSpeed/TypingSpeed';
import LocationCard from './LocationCard/LocationCard';
import GithubActivity from './GithubActivity/GithubActivity';
import TechCarousel from './TechCarousel/TechCarousel';
import CertificatesCard from './CertificatesCard/CertificatesCard'; // Import the new component

function About() {
  return (
    <section id="about" className="content-section">
      <SectionTitle title="About Me" />
      <div className="about-grid">
        <div className="grid-item div1"><AccordionCard /></div>
        <div className="grid-item div2"><TypingSpeed /></div>
        <div className="grid-item div7"><LocationCard /></div>
        <div className="grid-item div3"><GithubActivity /></div>
        <div className="grid-item div4"><TechCarousel /></div>
        <div className="grid-item div5"><CertificatesCard /></div>
        <div className="grid-item div6">
          <div className="card-placeholder">6. Coming Soon</div>
        </div>
      </div>
    </section>
  );
}

export default About;