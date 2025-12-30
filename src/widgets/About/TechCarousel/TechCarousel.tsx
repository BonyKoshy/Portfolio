import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import LogoLoop from "@/shared/ui/LogoLoop/LogoLoop"; // Ensure import matches export
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
  SiCplusplus,
  SiTypescript,
  SiBootstrap,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiNetlify,
  SiVercel,
  SiAndroidstudio,
  SiBlender,
  SiDotnet,
} from "react-icons/si";
import { FaJava, FaAws, FaWindows, FaLinux, FaUbuntu } from "react-icons/fa";
import { TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

// Define logo type for TechCarousel
type TechLogo = {
  node: React.ReactNode;
  title: string;
};

const techLogos: TechLogo[] = [
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
  { node: <SiFlask />, title: "Flask" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiSqlite />, title: "SQLite" },
  { node: <FaAws />, title: "AWS" },
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

const TechCarousel: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = (title: string) => {
    setSelectedTitle(title);
    setExpanded(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expanded &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  // If expanded, pause speed (set to 0)
  const currentSpeed = expanded ? 0 : 100;

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col justify-start gap-6 transition-all duration-400 overflow-hidden h-full cursor-pointer p-0 ${expanded ? "" : ""}`}
      onClick={() => {
        if (expanded) setExpanded(false);
      }}
    >
        {/* Force height style from CSS if needed, but flex grow handles it usually */}
        
      <div className="flex items-center gap-3 text-text-primary w-full justify-start pl-6 pt-6">
        <Zap size={20} />
        <h3 className="text-base font-semibold m-0">Tech Stack</h3>
      </div>
      
      <div
        className="w-full grow flex items-center px-6 pb-4 cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <LogoLoop
          logos={techLogos}
          speed={currentSpeed}
          logoHeight={60}
          gap={60}
          fadeOut={true}
          fadeOutColor="var(--panel-bg)"
          renderItem={(item) => {
             // Cast item to TechLogo to access title since LogoItem is the union type
             const techItem = item as TechLogo;
             return (
                <div 
                    onClick={() => handleLogoClick(techItem.title || "")}
                    className="cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 text-text-secondary hover:text-accent"
                >
                    {techItem.node}
                </div>
             );
          }}
          ariaLabel="Technology partners"
        />
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="text-text-primary font-bold text-[1.5rem] md:text-[1.8rem] whitespace-nowrap overflow-hidden text-ellipsis px-6 pb-6 w-full leading-none text-center md:text-left"
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
};

export default TechCarousel;

