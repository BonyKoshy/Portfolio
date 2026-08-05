import { Server, HardDrive, Shield, Cloud } from "lucide-react";
import { FaWindows, FaLinux, FaAws } from "react-icons/fa6";
import {
  SiPython,
  SiFlask,
  SiReact,
  SiSqlite,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiGnubash,
  SiNetapp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNetlify,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandPowershell, TbApi } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";

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

type DomainCard = {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
};

const DOMAIN_CARDS: DomainCard[] = [
  {
    id: "card-01",
    number: "01",
    title: "Infrastructure",
    description: "Architecting and securing enterprise Windows.",
    tags: ["Windows Server", "ADDS", "Hyper-V", "PowerShell"],
    icon: Server,
  },
  {
    id: "card-02",
    number: "02",
    title: "Storage Engineering",
    description: "Building resilient enterprise storage arrays.",
    tags: ["NetApp", "SAN/NAS", "Snapshots", "SnapMirror"],
    icon: HardDrive,
  },
  {
    id: "card-03",
    number: "03",
    title: "Data Protection",
    description: "Deploying backup, recovery and data security.",
    tags: ["NetBackup", "Rubrik", "Disaster Recovery", "Automation"],
    icon: Shield,
  },
  {
    id: "card-04",
    number: "04",
    title: "Cloud & Automation",
    description: "Deploying cloud resources and infrastructure.",
    tags: ["AWS", "Azure", "Python", "PowerShell"],
    icon: Cloud,
  },
];

type TechItem = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageSrc?: string;
};

const ECOSYSTEM_TECH: TechItem[] = [
  // Enterprise Infrastructure
  { name: "Windows", icon: FaWindows },
  { name: "Linux", icon: FaLinux },
  { name: "PowerShell", icon: TbBrandPowershell },
  { name: "Bash", icon: SiGnubash },
  { name: "Docker", icon: SiDocker },

  // Enterprise Storage & Data Protection
  { name: "NetApp ONTAP", icon: SiNetapp },
  { name: "NetBackup", imageSrc: "/NetBackup.png" },
  { name: "Rubrik", icon: RubrikIcon },
  { name: "EverPure", imageSrc: "/EverPure.svg" },

  // Cloud & DevOps
  { name: "AWS", icon: FaAws },
  { name: "Azure", icon: VscAzure },
  { name: "Netlify", icon: SiNetlify },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "REST APIs", icon: TbApi },

  // Backend
  { name: "Python", icon: SiPython },
  { name: "Flask", icon: SiFlask },
  { name: "Node.js", icon: SiNodedotjs },

  // Frontend
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  // Database
  { name: "MySQL", icon: SiMysql },
  { name: "SQLite", icon: SiSqlite },

  // Development
  { name: "Visual Studio Code", icon: BiLogoVisualStudio },
  { name: "Visual Studio", icon: DiVisualstudio },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="w-full scroll-mt-24 md:scroll-mt-28 flex flex-col"
    >
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col gap-2 w-full mb-8 sm:mb-10">
        <span className="font-jetbrains-mono text-xs sm:text-sm text-primary font-bold tracking-widest uppercase">
          02 // ACTIVE DOMAINS
        </span>
        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.04em] ml-[-0.05em] text-fg-primary">
          EXPERTISE
        </h2>
      </div>

      {/* 2 & 3. MAIN CONTENT CONTAINER (All 5 cards grouped with uniform spacing) */}
      <div className="flex flex-col gap-1 w-full">
        {/* 2. FOUR VERTICAL BENTO DOMAIN CARDS IN ONE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full group/grid">
          {DOMAIN_CARDS.map((card) => {
            const CardIcon = card.icon;
            return (
              <div
                key={card.id}
                className="group/card relative border border-border-default bg-bg-default rounded-sm px-5 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 flex flex-col h-full transition-all duration-300 cursor-default group-hover/grid:opacity-40 hover:opacity-100! hover:border-fg-primary hover:bg-bg-surface/30"
              >
                {/* Top Indicator Row with Topic-Specific Icon */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="font-jetbrains-mono text-xs font-bold text-fg-tertiary group-hover/card:text-primary transition-colors tracking-widest">
                    [ {card.number} ]
                  </span>
                  <CardIcon className="w-4 h-4 text-fg-tertiary group-hover/card:text-primary transition-colors shrink-0" />
                </div>

                {/* Content: Title & Description */}
                <div className="flex flex-col gap-3 mb-8 flex-1">
                  <h3 className="font-jetbrains-mono text-base sm:text-lg font-bold uppercase tracking-wide text-fg-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-jetbrains-mono text-[13px] text-fg-secondary/90 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Tags Row */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border-default/60 mt-auto">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-xs text-[10px] sm:text-[11px] font-jetbrains-mono bg-bg-default border border-border-default text-fg-secondary group-hover/card:border-fg-secondary/50 group-hover/card:text-fg-primary transition-colors shrink-0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. TECHNOLOGY ECOSYSTEM LOGO LOOP CARD (5TH CARD) */}
        <div className="w-full border border-border-default bg-bg-default rounded-sm px-5 sm:px-6 py-5 sm:py-6 flex flex-col gap-5 sm:gap-6 relative overflow-hidden">
          {/* Title (Inside Card) */}
          <div className="w-full">
            <h3 className="font-jetbrains-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-fg-primary">
              ECOSYSTEM
            </h3>
          </div>

          {/* Marquee Outer Wrapper */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Natural Edge Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-20 md:w-28 bg-linear-to-r from-bg-default to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-20 md:w-28 bg-linear-to-l from-bg-default to-transparent z-10" />

            {/* Marquee Moving Track */}
            <div className="flex w-max gap-10 sm:gap-14 items-center animate-marquee hover:[animation-play-state:paused] group/track">
              {[...ECOSYSTEM_TECH, ...ECOSYSTEM_TECH].map((tech, idx) => {
                const IconNode = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${idx}`}
                    className="group/item flex items-center gap-3 py-1 transition-all duration-200 cursor-default cursor-target shrink-0 group-hover/track:opacity-30 hover:opacity-100!"
                  >
                    {tech.imageSrc ? (
                      <img
                        src={tech.imageSrc}
                        alt={tech.name}
                        className="w-8 h-8 sm:w-8 sm:h-8 object-contain opacity-60 group-hover/item:opacity-100 grayscale group-hover/item:grayscale-0 transition-all shrink-0"
                      />
                    ) : IconNode ? (
                      <IconNode className="w-8 h-8 sm:w-8 sm:h-8 text-fg-tertiary group-hover/item:text-fg-primary transition-colors shrink-0" />
                    ) : null}
                    <span className="hidden sm:inline font-jetbrains-mono text-xs sm:text-sm text-fg-secondary group-hover/item:text-fg-primary uppercase tracking-wider font-semibold whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
