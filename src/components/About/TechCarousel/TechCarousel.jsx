// src/components/About/TechCarousel/TechCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import LogoLoop from "../../LogoLoop/LogoLoop";
import useResponsiveValue from "../../../hooks/useResponsiveValue";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiSpring,
  SiCplusplus,
  SiTypescript,
  SiBootstrap,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiOracle,
  SiDocker,
  SiNetlify,
  SiVercel,
  SiAndroidstudio,
  SiBlender,
  SiDotnet,
} from "react-icons/si";
import { FaJava, FaAws, FaWindows, FaLinux, FaUbuntu } from "react-icons/fa";
import { TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import "./TechCarousel.css";

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
  { node: <TbBrandCSharp />, title: "C#" },
  { node: <SiDotnet />, title: "ASP.NET" },
  { node: <SiSpring />, title: "Spring Boot" },
  { node: <SiFlask />, title: "Flask" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiSqlite />, title: "SQLite" },
  { node: <SiOracle />, title: "Oracle" },
  { node: <DiMsqlServer />, title: "SQL Server" },
  { node: <SiDocker />, title: "Docker" },
  { node: <FaAws />, title: "AWS" },
  { node: <VscAzure />, title: "Azure" },
  { node: <SiNetlify />, title: "Netlify" },
  { node: <SiVercel />, title: "Vercel" },
  { node: <TbBrandPowershell />, title: "PowerShell" },
  { node: <FaWindows />, title: "Windows" },
  { node: <FaLinux />, title: "Linux" },
  { node: <FaUbuntu />, title: "Ubuntu" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiAndroidstudio />, title: "Android Studio" },
  { node: <DiVisualstudio />, title: "Visual Studio" },
  { node: <BiLogoVisualStudio />, title: "Visual Studio Code" },
  { node: <SiBlender />, title: "Blender" },
  { node: <SiFigma />, title: "Figma" },
];

function TechCarousel() {
  const [expanded, setExpanded] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleLogoClick = (title) => {
    // Only set the new title and expand state
    setSelectedTitle(title);
    setExpanded(true);
  };

  // This effect now handles closing the card when clicking anywhere
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the card is expanded and the click is outside the card's area
      if (
        expanded &&
        cardRef.current &&
        !cardRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  const isPaused = isHovered || expanded;

  return (
    <div
      ref={cardRef}
      className={`tech-carousel-card ${expanded ? "expanded" : ""}`}
      // Add a click handler to the entire card to close it
      onClick={() => {
        if (expanded) setExpanded(false);
      }}
    >
      <div className="tech-carousel-header">
        <Zap size={20} />
        <h3>Tech Stack</h3>
      </div>
      <div
        className="logo-loop-container"
        // Stop clicks inside the loop from closing the card immediately
        onClick={(e) => e.stopPropagation()}
      >
        <LogoLoop
          logos={techLogos}
          speed={50}
          logoHeight={useResponsiveValue(60, 40)}
          gap={useResponsiveValue(60, 32)}
          fadeOut
          fadeOutColor="var(--panel-bg)"
          onLogoClick={handleLogoClick}
          activeLogoTitle={selectedTitle}
          isPaused={isPaused}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="selected-tech-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
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
