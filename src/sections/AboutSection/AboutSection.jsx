// src/sections/AboutSection/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hello! I'm Bony Koshy, a passionate BCA Graduate with a strong foundation in web development.
        I thrive on creating innovative and user-friendly digital experiences.
        My journey in tech began with a curiosity for how things work, evolving into a dedication
        to craft elegant solutions.
      </p>
      <p className="about-description">
        I specialize in front-end technologies and enjoy bringing ideas to life through clean,
        efficient, and modern code. When I'm not coding, you can find me exploring new design trends
        or diving deeper into the world of algorithms. I'm always eager to learn and take on new challenges.
      </p>
    </section>
  );
}

export default AboutSection;