import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiNetapp, SiVeritas, SiDocker } from "react-icons/si";
import { cn } from "@/shared/lib/utils";
import { techLogos } from "@/entities/technology/model/techStack";

function RubrikIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1538 1530" className={className} fill="currentColor">
      <path
        fillRule="evenodd"
        d="m779.9 0.5q1.8 0.6 3.5 1.4 1.7 0.8 3.3 1.8 1.6 1 3.1 2.2 1.4 1.1 2.8 2.5l210.3 209.7c3.1 3.1 5.6 6.7 7.2 10.8 1.7 4 2.6 8.3 2.6 12.7 0 4.3-0.9 8.6-2.6 12.7-1.6 4-4.1 7.6-7.2 10.7l-210.3 209.8c-3.1 3-6.8 5.5-10.8 7.2-4 1.6-8.4 2.5-12.7 2.5-4.4 0-8.7-0.9-12.7-2.5-4.1-1.7-7.7-4.2-10.8-7.2l-210.7-209.8c-3.1-3.1-5.6-6.7-7.3-10.7-1.6-4.1-2.5-8.4-2.5-12.7 0-4.4 0.9-8.7 2.5-12.7 1.7-4.1 4.2-7.7 7.3-10.8l210.7-209.7q1.3-1.4 2.8-2.5 1.5-1.2 3.1-2.2 1.6-1 3.3-1.8 1.7-0.8 3.4-1.4zm-29.4 1051.5q2.7-1.8 5.7-3.1 3-1.3 6.2-1.9 3.2-0.6 6.5-0.6 3.3-0.1 6.5 0.6 3.3 0.6 6.3 1.9 3.1 1.2 5.8 3.1 2.8 1.9 5.1 4.2l210.3 209.8c3.1 3 5.5 6.6 7.2 10.6 1.7 4 2.5 8.3 2.5 12.6 0 4.4-0.8 8.6-2.5 12.6-1.7 4-4.1 7.6-7.2 10.7l-210.3 210.1q-1.1 1.1-2.3 2-1.1 1-2.4 1.8-1.2 0.8-2.5 1.6-1.3 0.7-2.7 1.3h-27.2q-1.4-0.6-2.7-1.3-1.3-0.8-2.6-1.6-1.2-0.8-2.4-1.8-1.1-0.9-2.2-2l-210.8-210.1c-3-3.1-5.5-6.7-7.1-10.7-1.7-4-2.6-8.2-2.6-12.6 0-4.3 0.9-8.6 2.6-12.6 1.6-4 4.1-7.6 7.1-10.6l210.8-209.8q2.2-2.3 4.9-4.2zm519.6-520.9q2.3-2.3 5.1-4 2.7-1.8 5.8-3 3-1.3 6.3-1.9 3.2-0.6 6.5-0.5 3.2 0 6.4 0.6 3.1 0.6 6.1 1.8 3 1.2 5.7 3 2.7 1.8 5.1 4l210.3 209.8c3.2 3 5.7 6.7 7.4 10.8 1.7 4 2.6 8.4 2.6 12.8 0 4.4-0.9 8.8-2.6 12.8-1.7 4.1-4.2 7.8-7.4 10.9l-210 209.3c-3 3.1-6.7 5.5-10.7 7.2-4.1 1.7-8.4 2.5-12.7 2.5-4.4 0-8.7-0.8-12.7-2.5-4.1-1.7-7.7-4.1-10.8-7.2l-210.8-209.7c-3-3.2-5.3-6.8-6.9-10.8-1.7-4.1-2.5-8.4-2.5-12.7 0-4.3 0.8-8.6 2.5-12.6 1.6-4 3.9-7.7 6.9-10.8l210.8-209.4zm-789.7 785.7q1.3-1.5 2.8-2.8 1.6-1.3 3.4-2.3 1.7-0.9 3.7-1.5 1.9-0.6 3.9-0.9c5.9 0 9.9 5.9 9.9 17v143.1c0.5 3.8-0.1 7.7-1.6 11.2-1.6 3.6-4.2 6.6-7.4 8.7-3.2 2.2-7 3.3-10.8 3.4-3.9 0.1-7.7-0.8-11-2.8l-79-39.4c-3.7-1.6-6.9-4-9.4-7.2-2.5-3.2-4.1-6.9-4.7-10.9-0.6-3.9-0.1-8 1.3-11.7 1.4-3.8 3.8-7.1 6.9-9.7l93.6-94.2zm552.1 7.9c0-11 3.9-16.9 9.8-16.9q2 0.2 3.9 0.8 1.9 0.6 3.6 1.6 1.7 1 3.2 2.2 1.5 1.3 2.8 2.8l93.5 93.1c3.1 2.5 5.5 5.8 7 9.5 1.4 3.7 1.9 7.8 1.4 11.7-0.6 4-2.2 7.8-4.6 10.9-2.4 3.2-5.6 5.7-9.3 7.3l-80.9 39.4c-3.3 1.9-7.1 2.8-10.9 2.6-3.8-0.1-7.5-1.3-10.6-3.5-3.2-2.1-5.7-5.1-7.3-8.5-1.5-3.5-2.1-7.3-1.6-11.1zm224.9-297.2c4.4 0 8.6 0.8 12.6 2.5 4 1.6 7.7 4 10.7 7 3.1 3.1 5.6 6.7 7.2 10.6 1.7 4 2.6 8.3 2.7 12.6v189.2c-0.1 4.5-1 9-2.8 13.1-1.8 4.1-4.5 7.9-7.7 10.9-3.3 3.1-7.2 5.5-11.4 7.1-4.2 1.6-8.7 2.3-13.2 2h-189.9c-4.3 0-8.6-0.9-12.6-2.6-4-1.7-7.6-4.1-10.7-7.2-3.1-3-5.5-6.7-7.2-10.7-1.7-4-2.6-8.2-2.6-12.6v-189.2c0-4.3 0.9-8.6 2.6-12.6 1.7-3.9 4.2-7.5 7.2-10.6 3.1-3 6.7-5.4 10.7-7 4-1.7 8.3-2.5 12.6-2.5zm159.1-641.4l-1.2 1.1q0 0 0 0.1zm-1.1 1.1q1.6-1.8 3.6-3.3 2.1-1.5 4.4-2.6 2.3-1 4.7-1.6 2.5-0.6 5-0.7c2.2 0 4.4 0.4 6.6 1.1 2.1 0.7 4.2 1.7 6 2.9 1.9 1.3 3.6 2.8 5.1 4.5 1.4 1.7 2.6 3.6 3.6 5.6l39.4 78.9c1.9 3.3 2.7 7.1 2.6 10.9-0.2 3.8-1.4 7.5-3.5 10.6-2.1 3.2-5.1 5.7-8.5 7.4-3.5 1.6-7.3 2.2-11.1 1.8h-140.9c-18.1 0-22.5-10.6-9.8-23.2zm-381.3-324.4c-0.4-2.8-0.2-5.7 0.6-8.4 0.8-2.7 2.2-5.2 4.1-7.4 1.9-2.1 4.2-3.8 6.8-5 2.6-1.1 5.4-1.7 8.2-1.7q1.1-0.2 2.3-0.2 1.1-0.1 2.3-0.1 1.1 0.1 2.2 0.3 1.2 0.1 2.3 0.4l80.9 39.4c3.7 1.6 6.9 4.1 9.3 7.3 2.5 3.2 4 6.9 4.6 10.9 0.5 4 0.1 8-1.4 11.7-1.5 3.7-3.9 7-7 9.6l-93.5 93.4c-13 12.6-23.3 8.3-23.3-9.9v-140.3zm-948.1 323.5c1.4-1.7 3.1-3.3 4.9-4.5 1.9-1.3 3.9-2.2 6-2.9 2.2-0.7 4.4-1.1 6.6-1.1q2.6 0.1 5.1 0.6 2.5 0.6 4.8 1.7 2.4 1.1 4.4 2.6 2.1 1.5 3.9 3.4l93.5 91.8c13 12.6 8.7 23.3-9.9 23.3h-141.7c-3.8 0.5-7.7 0-11.2-1.6-3.5-1.6-6.6-4.1-8.7-7.4-2.1-3.2-3.3-6.9-3.4-10.8-0.1-3.8 0.9-7.7 2.8-11l39.5-78.8c0.9-1.7 2-3.6 3.4-5.3zm386.5-139.4c4.3 0 8.6 0.9 12.6 2.6 4 1.7 7.7 4.1 10.7 7.2 3.1 3.1 5.5 6.7 7.2 10.7 1.7 4 2.6 8.3 2.7 12.6v189.2c-0.1 4.4-1 8.7-2.7 12.7-1.7 3.9-4.1 7.6-7.2 10.6-3 3.1-6.7 5.6-10.7 7.2-4 1.7-8.3 2.6-12.6 2.7h-189.8c-4.4-0.1-8.7-1-12.6-2.7-4-1.6-7.6-4.1-10.8-7.2-3-3-5.5-6.7-7.1-10.6-1.7-4-2.6-8.3-2.7-12.7v-189.2c0.1-4.3 1-8.6 2.7-12.6 1.6-4 4.1-7.6 7.1-10.7 3.1-3.1 6.8-5.5 10.8-7.2 3.9-1.7 8.2-2.6 12.6-2.6zm3.9-204.2q1.3-0.6 2.7-1 1.3-0.4 2.7-0.7 1.4-0.3 2.8-0.5 1.5-0.2 2.9-0.2c2.8 0.1 5.6 0.7 8.1 1.9 2.6 1.1 4.9 2.8 6.7 5 1.9 2.1 3.3 4.6 4.1 7.3 0.9 2.7 1.1 5.5 0.8 8.3v142.3c0 18.1-10.6 22.5-23.7 9.9l-93.5-93.5c-3.1-2.5-5.5-5.8-6.9-9.6-1.5-3.7-1.9-7.8-1.3-11.8 0.6-3.9 2.2-7.7 4.7-10.8 2.5-3.2 5.7-5.7 9.4-7.2l78.9-39.4zm856 986.3h142.5c3.8-0.4 7.6 0.1 11.1 1.7 3.5 1.6 6.4 4.1 8.5 7.2 2.2 3.2 3.4 6.8 3.5 10.6 0.2 3.8-0.7 7.6-2.6 10.9l-39.4 78.8c-1.6 3.7-4.2 6.8-7.3 9.2-3.2 2.4-6.9 4-10.8 4.6-4 0.6-8 0.2-11.7-1.2-3.7-1.4-7.1-3.6-9.7-6.6l-93.9-93.5c-12.6-13-8.3-23.2 9.8-23.2zm-859.9-1.6c4.3 0 8.6 0.8 12.6 2.5 4 1.6 7.6 4 10.7 7.1 3.1 3 5.5 6.6 7.2 10.6 1.7 3.9 2.6 8.2 2.6 12.5v189.2c0 4.4-0.9 8.7-2.6 12.7-1.7 4-4.1 7.6-7.2 10.6-3 3.1-6.7 5.6-10.7 7.2-4 1.7-8.3 2.6-12.6 2.7h-189.8c-4.4-0.1-8.7-1-12.7-2.7-4-1.6-7.6-4.1-10.7-7.2-3-3-5.5-6.6-7.2-10.6-1.6-4-2.5-8.3-2.6-12.7v-189.2c0.1-4.3 1-8.6 2.7-12.5 1.6-4 4.1-7.6 7.2-10.6 3-3.1 6.7-5.5 10.7-7.1 4-1.7 8.2-2.5 12.6-2.5zm-407.7-1.6h142.1c18.5 0 22.9 10.3 9.8 23.3l-93.5 93.4c-2.6 3.1-5.9 5.5-9.6 6.9-3.8 1.5-7.8 1.9-11.8 1.3-4-0.6-7.7-2.2-10.9-4.7-3.2-2.5-5.6-5.7-7.2-9.4l-39.4-78.9c-1.9-3.3-2.8-7-2.6-10.8 0.1-3.8 1.3-7.5 3.5-10.6 2.1-3.2 5.1-5.7 8.5-7.3 3.5-1.5 7.3-2.1 11.1-1.6zm1190.7-779c4.3 0 8.6 0.9 12.6 2.6 4 1.7 7.6 4.1 10.7 7.2 3.1 3.1 5.5 6.7 7.2 10.7 1.7 4 2.6 8.3 2.6 12.6v189.2c0 4.4-0.9 8.7-2.6 12.7-1.7 3.9-4.1 7.6-7.2 10.6-3.1 3.1-6.7 5.6-10.7 7.2-4 1.7-8.3 2.6-12.6 2.7h-189.9c-4.3-0.1-8.6-1-12.6-2.7-4-1.6-7.6-4.1-10.7-7.2-3.1-3-5.5-6.7-7.2-10.6-1.7-4-2.6-8.3-2.6-12.7v-189.2c0-4.3 0.9-8.6 2.6-12.6 1.7-4 4.1-7.6 7.2-10.7 3.1-3.1 6.7-5.5 10.7-7.2 4-1.7 8.3-2.6 12.6-2.6zm-1029.7 280.6q2.7-1.8 5.7-3 3-1.2 6.1-1.8 3.2-0.6 6.4-0.6 3.3-0.1 6.5 0.5 3.3 0.6 6.3 1.9 3.1 1.2 5.8 3 2.8 1.7 5.1 4l210.4 209.4c3.1 3 5.5 6.7 7.2 10.7 1.7 4 2.5 8.4 2.5 12.7 0 4.4-0.8 8.7-2.5 12.7-1.7 4-4.1 7.7-7.2 10.8l-210.4 209.7c-3.1 3.1-6.7 5.5-10.8 7.2-4 1.7-8.3 2.5-12.7 2.5-4.3 0-8.6-0.8-12.7-2.5-4.1-1.7-7.7-4.1-10.7-7.2l-210.8-209.7c-3.1-3.1-5.5-6.8-7.2-10.8-1.7-4-2.5-8.3-2.5-12.7 0-4.3 0.8-8.7 2.5-12.7 1.7-4 4.1-7.7 7.2-10.7l210.8-209.4q2.3-2.2 5-4z"
      />
    </svg>
  );
}

type TechStackItem = {
  name: string;
  level: string;
  node: React.ReactNode;
};

const ENTERPRISE_LOGOS: TechStackItem[] = [
  { name: "NetApp ONTAP", level: "MASTER", node: <SiNetapp /> },
  { name: "Veritas NetBackup", level: "EXPERT", node: <SiVeritas /> },
  { name: "Rubrik Security", level: "ADVANCED", node: <RubrikIcon /> },
  { name: "Docker", level: "PRO", node: <SiDocker /> },
];

const LEVEL_MAP: Record<string, string> = {
  HTML5: "MASTER",
  CSS3: "MASTER",
  JavaScript: "EXPERT",
  TypeScript: "EXPERT",
  "React.js": "MASTER",
  "Node.js": "EXPERT",
  "Tailwind CSS": "EXPERT",
  Python: "EXPERT",
  Java: "ADVANCED",
  AWS: "ADVANCED",
  Git: "EXPERT",
  GitHub: "EXPERT",
  Windows: "EXPERT",
  Linux: "EXPERT",
};

const ALL_TECH_STACK: TechStackItem[] = [
  ...ENTERPRISE_LOGOS,
  ...techLogos.map((item) => ({
    name: item.title,
    node: item.node,
    level: LEVEL_MAP[item.title] || "PRO",
  })),
];

type CertificationItem = {
  name: string;
  issuer: string;
};

const CERTIFICATIONS: CertificationItem[] = [
  { name: "IBM Java Developer Professional Certificate", issuer: "IBM" },
  { name: "Google IT Support Professional Certificate", issuer: "Google" },
  { name: "AWS Cloud Technical Essentials", issuer: "Amazon Web Services" },
  { name: "Applied Software Engineering Fundamentals", issuer: "IBM" },
];

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc. Digital and Cyber Forensic Science",
    institution: "Government Institute of Forensic Science",
    period: "2022 - 2025",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    period: "2020 - 2022",
  },
];

function TelemetryScanner() {
  const [stepIndex, setStepIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
    }, 2800); // Pause 2.1s, slide 0.7s

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = () => {
    if (isSliding) {
      setStepIndex((prev) => (prev + 1) % ALL_TECH_STACK.length);
      setIsSliding(false);
    }
  };

  const queueCount = 11;
  const MID_INDEX = 5; // 6th item is centered

  const visibleItems = Array.from({ length: queueCount }).map((_, i) => {
    const index = (stepIndex + i) % ALL_TECH_STACK.length;
    return {
      ...ALL_TECH_STACK[index],
      slotIndex: i,
    };
  });

  // Base card width (130px) + gap (20px) = 150px shift per step
  const stepDistance = 150;

  return (
    <div className="relative w-full h-55 md:h-65 flex items-center justify-center overflow-hidden rounded-(--radius-card) bg-bg-default border border-border-default px-4 md:px-8">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ x: isSliding ? -stepDistance : 0 }}
          transition={
            isSliding
              ? { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
              : { duration: 0 }
          }
          onAnimationComplete={handleAnimationComplete}
          className="flex items-center justify-center gap-5 shrink-0"
        >
          {visibleItems.map((item, i) => {
            // Slot MID_INDEX is active when resting; Slot MID_INDEX+1 activates as it glides into center
            const isActive =
              (!isSliding && i === MID_INDEX) ||
              (isSliding && i === MID_INDEX + 1);

            return (
              <div
                key={`${item.name}-${i}`}
                className={cn(
                  "w-32.5 h-40 shrink-0 flex items-center justify-center transition-all duration-500",
                  Math.abs(i - MID_INDEX) <= 1 || (isSliding && i === MID_INDEX + 2)
                    ? "flex"
                    : "hidden sm:flex"
                )}
              >
                <div
                  className={cn(
                    "w-full rounded-sm flex flex-col items-center justify-center gap-2.5 transition-all duration-500 border",
                    isActive
                      ? "bg-bg-surface border-border-default opacity-100 grayscale-0 scale-110 md:scale-125 shadow-lg z-20 h-37.5 md:h-40 p-3"
                      : "bg-transparent border-transparent opacity-30 grayscale scale-90 z-0 h-30 p-2"
                  )}
                >
                  <div className="flex items-center justify-center text-4xl md:text-5xl shrink-0 transition-colors duration-300">
                    {item.node && (
                      <div
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? "text-fg-primary" : "text-fg-secondary"
                        )}
                      >
                        {item.node}
                      </div>
                    )}
                  </div>

                  <div
                    className={cn(
                      "flex flex-col items-center gap-1 w-full transition-all duration-500",
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none hidden"
                    )}
                  >
                    <span className="font-jetbrains-mono font-bold text-fg-primary text-[10px] md:text-xs uppercase tracking-wide text-center truncate w-full">
                      {item.name}
                    </span>
                    <span className="text-violet-400 font-jetbrains-mono text-[8px] md:text-[9px] bg-violet-500/10 px-2 py-0.5 rounded-xs border border-violet-500/20 whitespace-nowrap">
                      [ LVL: {item.level} ]
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export function Capabilities() {
  return (
    <div id="capabilities" className="w-full flex flex-col scroll-mt-24 md:scroll-mt-28">
      <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[-0.06em] text-fg-primary mb-4 sm:mb-6">
        Capabilities
      </h2>

      <div className="w-full flex flex-col gap-8 md:gap-12">
        <TelemetryScanner />

        {/* BOTTOM GRID (CLEARANCES & BASE INITIALIZATION) */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {/* BOTTOM LEFT: SYSTEM CLEARANCES (CERTIFICATIONS) */}
          <div className="flex flex-col">
            <h3 className="font-jetbrains-mono text-fg-secondary text-sm mb-4 tracking-wider uppercase">
              &gt;_ ACTIVE_CLEARANCES
            </h3>

            <div className="flex flex-col border border-border-default bg-bg-default rounded-sm overflow-hidden">
              {CERTIFICATIONS.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`flex justify-between items-center p-3.5 sm:p-4 hover:bg-bg-surface transition-colors cursor-default group ${
                    index !== CERTIFICATIONS.length - 1
                      ? "border-b border-border-default"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains-mono text-xs text-primary font-bold">
                      0{index + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-sans font-bold text-fg-primary text-xs sm:text-sm uppercase tracking-wide group-hover:text-primary transition-colors">
                        {cert.name}
                      </span>
                      <span className="font-jetbrains-mono text-[10px] text-fg-tertiary">
                        ISSUER: {cert.issuer}
                      </span>
                    </div>
                  </div>

                  <span className="font-jetbrains-mono text-[9px] sm:text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-xs border border-emerald-500/20 shrink-0">
                    [ VERIFIED ]
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/certifications"
              className="w-full mt-3 py-2.5 text-center font-jetbrains-mono text-xs text-fg-secondary hover:text-violet-400 transition-colors border border-dashed border-border-default hover:border-violet-500/40 rounded-sm cursor-pointer block"
            >
              [ VIEW_ALL_CLEARANCES ]
            </Link>
          </div>

          {/* BOTTOM RIGHT: BASELINE INITIALIZATION (EDUCATION) */}
          <div className="flex flex-col">
            <h3 className="font-jetbrains-mono text-fg-secondary text-sm mb-4 tracking-wider uppercase">
              &gt;_ BASE_INITIALIZATION
            </h3>

            <div className="border-l border-border-default ml-2 pl-6 relative space-y-6 py-1">
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="relative group cursor-default"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-7.25 top-1.5 w-2.5 h-2.5 bg-fg-tertiary rounded-full transition-all duration-300 group-hover:bg-violet-500 group-hover:shadow-[0_0_8px_rgba(124,58,237,0.8)]" />

                  {/* Node Content */}
                  <div className="flex flex-col gap-0.5">
                    <span className="font-jetbrains-mono text-xs text-fg-tertiary">
                      {item.period}
                    </span>
                    <h4 className="font-sans font-bold uppercase text-fg-primary text-sm group-hover:text-primary transition-colors tracking-wide">
                      {item.degree}
                    </h4>
                    <span className="font-jetbrains-mono text-xs text-fg-secondary">
                      {item.institution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
