// src/components/About/TechCarousel/TechCarousel.jsx
import React from 'react';
import LogoLoop from '../../LogoLoop/LogoLoop';
import {
  SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiReact, SiNodedotjs,
  SiDotnet, SiFlask, SiSpring, SiMysql, SiSqlite, 
  SiOracle, SiDocker, SiNetlify, SiVercel,
  SiGit, SiGithub, SiAndroidstudio,
  SiBlender, SiFigma
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // 1. Import the correct Java icon
import './TechCarousel.css';

const techLogos = [
  // Programming Languages
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com" }, // 2. Use the correct component
  { node: <SiC />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org/" },

  // Web Development
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiReact />, title: "React.js", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiDotnet />, title: ".NET (ASP.NET & MAUI)", href: "https://dotnet.microsoft.com" },
  { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com/" },
  { node: <SiSpring />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },

  // Databases
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiSqlite />, title: "SQLite", href: "https://www.sqlite.org/" },
  { node: <SiOracle />, title: "Oracle Database", href: "https://www.oracle.com/database/" },

  // Cloud & DevOps
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com/" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },

  // Tools & Platforms
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiAndroidstudio />, title: "Android Studio", href: "https://developer.android.com/studio" },
  { node: <SiBlender />, title: "Blender", href: "https://www.blender.org/" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
];


function TechCarousel() {
  return (
    <div className="tech-carousel-card">
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={48}
        gap={50}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
        fadeOutColor="var(--panel-bg)"
      />
    </div>
  );
}

export default TechCarousel;