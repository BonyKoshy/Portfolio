// src/components/About/TechCarousel/TechCarousel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoLoop from '../../LogoLoop/LogoLoop';
import {
  SiReact, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiPython,
  SiGit, SiGithub, SiFigma, SiTailwindcss, SiSpring, SiDotnet, SiCplusplus,
  SiTypescript, SiBootstrap, SiFlask, SiMysql, SiSqlite, 
  SiOracle, SiDocker, SiNetlify, SiVercel, SiAndroidstudio, SiBlender
} from 'react-icons/si';
import { FaJava, FaAws } from "react-icons/fa";
import './TechCarousel.css';

// Your final list of technologies
const techLogos = [
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiReact />, title: "React.js" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiPython />, title: "Python" },
    { node: <FaJava />, title: "Java" },
    { node: <SiCplusplus />, title: "C++" },
    { node: <SiDotnet />, title: "C#" },
    { node: <SiSpring />, title: "Spring Boot" },
    { node: <SiFlask />, title: "Flask" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiSqlite />, title: "SQLite" },
    { node: <SiOracle />, title: "Oracle" },
    { node: <FaAws />, title: "AWS" },
    { node: <SiDocker />, title: "Docker" },
    { node: <SiNetlify />, title: "Netlify" },
    { node: <SiVercel />, title: "Vercel" },
    { node: <SiGit />, title: "Git" },
    { node: <SiGithub />, title: "GitHub" },
    { node: <SiAndroidstudio />, title: "Android Studio" },
    { node: <SiBlender />, title: "Blender" },
    { node: <SiFigma />, title: "Figma" },
];

function TechCarousel() {
  const [expanded, setExpanded] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleLogoClick = (title) => {
    if (expanded && selectedTitle === title) {
      // If the same logo is clicked again, collapse the card
      setExpanded(false);
      setSelectedTitle('');
    } else {
      // Otherwise, expand and show the new title
      setSelectedTitle(title);
      setExpanded(true);
    }
  };

  return (
    <div className={`tech-carousel-card ${expanded ? 'expanded' : ''}`}>
      <div className="logo-loop-container">
        <LogoLoop
          logos={techLogos}
          speed={50}
          logoHeight={0}
          gap={30}
          fadeOut
          pauseOnHover={!expanded} // Disable hover pause when expanded
          scaleOnHover={!expanded} // Disable hover scale when expanded
          fadeOutColor="var(--panel-bg)"
          onLogoClick={handleLogoClick}
        />
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="selected-tech-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {selectedTitle}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TechCarousel;