import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import LogoLoop from "@/shared/ui/LogoLoop/LogoLoop"; // Ensure import matches export
import { techLogos, TechLogo } from "@/shared/config/techStack";

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

