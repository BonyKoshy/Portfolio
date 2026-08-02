import { ArrowRight, Brain, Cpu, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { SiPython, SiFlask, SiSqlite } from "react-icons/si";
import { TbApi } from "react-icons/tb";

type TechItem = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const FEATURED_PROJECTS = [
  {
    id: "connectly",
    number: "01",
    projectId: "PRJ-01",
    title: "Connectly",
    description:
      "Real-time communication platform built around event-driven architecture with persistent messaging and live session management.",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "WebSockets", icon: TbApi },
      { name: "SQLite", icon: SiSqlite },
    ] as TechItem[],
    impact:
      "Enables real-time bidirectional communication with sub-second latency and persistent message history.",
    image: "/projects/proj1.webp",
    link: "/projects#connectly",
    status: "Completed",
  },
  {
    id: "emotion-detector",
    number: "02",
    projectId: "PRJ-02",
    title: "Emotion Detector",
    description:
      "Local AI inference engine powered by optimized on-device acceleration for real-time facial emotion classification.",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "OpenVINO", icon: Cpu },
      { name: "Computer Vision", icon: Eye },
      { name: "AI", icon: Brain },
    ] as TechItem[],
    impact:
      "Achieves real-time emotion classification with hardware-accelerated inference on consumer devices.",
    image: "/projects/proj2.webp",
    link: "/projects#emotion-detector",
    status: "Completed",
  },
];

export function HomeProjectsV2() {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-24 md:scroll-mt-28 flex flex-col relative"
    >
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col gap-2 w-full mb-8 sm:mb-10">
        <span className="font-jetbrains-mono text-xs sm:text-sm text-primary font-bold tracking-widest uppercase">
          05 // ENGINEERING WORK
        </span>
        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.04em] -ml-[0.05em] text-fg-primary">
          PROJECTS
        </h2>
      </div>

      {/* 2. CASE STUDY CARDS */}
      <div className="flex flex-col gap-1 w-full group/grid">
        {FEATURED_PROJECTS.map((project) => {
          return (
            <Link
              key={project.id}
              to={project.link}
              className="group/card relative w-full border border-border-default bg-bg-default rounded-sm overflow-hidden cursor-target transition-all duration-300 hover:border-fg-primary group-hover/grid:opacity-40 hover:!opacity-100"
            >
              {/* MOBILE: Stacked layout */}
              <div className="flex flex-col lg:hidden p-5 sm:p-6 gap-5">
                {/* Padded Screenshot (16:9 ratio) - Image First */}
                <div className="w-full p-2 bg-bg-surface/50 border border-border-default/60 rounded-sm">
                  <div className="w-full aspect-[16/9] bg-bg-surface border border-border-default/40 rounded-xs overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-80 transition-opacity duration-500 ease-out group-hover/card:opacity-100"
                    />
                  </div>
                </div>

                {/* Number Row */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-3xl sm:text-4xl font-normal text-fg-primary group-hover/card:text-primary transition-colors leading-none">
                      {project.number}
                    </span>
                    <span className="font-jetbrains-mono text-[9px] text-fg-tertiary uppercase tracking-widest">
                      [ {project.status} ]
                    </span>
                  </div>
                </div>

                {/* Title + Description (No icon) */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans text-lg sm:text-xl font-normal uppercase tracking-wide text-fg-primary">
                    {project.title}
                  </h3>
                  <p className="font-jetbrains-mono text-[11px] sm:text-[12px] text-fg-secondary/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-col gap-2">
                  <span className="font-jetbrains-mono text-[9px] text-fg-tertiary uppercase tracking-[0.2em] font-bold">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    {project.tech.map((t, i) => {
                      const TechIcon = t.icon;
                      return (
                        <span
                          key={t.name}
                          className="inline-flex items-center gap-1.5"
                        >
                          {TechIcon && (
                            <TechIcon className="w-3 h-3 text-fg-tertiary shrink-0" />
                          )}
                          <span className="font-jetbrains-mono text-[10px] text-fg-secondary uppercase tracking-wider">
                            {t.name}
                          </span>
                          {i < project.tech.length - 1 && (
                            <span className="text-fg-tertiary/40 ml-1">·</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Meta + Bottom Right Arrow */}
                <div className="flex items-center justify-between pt-3 border-t border-border-default/40">
                  <span className="font-jetbrains-mono text-[9px] text-fg-tertiary uppercase tracking-widest">
                    ■ {project.projectId}
                  </span>
                  <ArrowRight className="w-4 h-4 text-fg-tertiary group-hover/card:text-primary transition-colors shrink-0" />
                </div>
              </div>

              {/* DESKTOP: 4-Column Layout with Inset Vertical Separators (1 4 2+3 5) */}
              <div className="hidden lg:flex items-stretch w-full min-h-[210px]">
                {/* Column 1: Number on top end, ■ PRJ & [ Completed ] on bottom end */}
                <div className="w-[120px] xl:w-[140px] shrink-0 flex flex-col justify-between items-center text-center p-6">
                  <div className="flex flex-col items-center">
                    <span className="font-sans text-4xl xl:text-5xl font-normal text-fg-primary group-hover/card:text-primary transition-colors leading-none">
                      {project.number}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 mt-auto">
                    <span className="font-jetbrains-mono text-[9px] text-fg-tertiary uppercase tracking-widest whitespace-nowrap">
                      ■ {project.projectId}
                    </span>
                    <span className="font-jetbrains-mono text-[9px] text-fg-tertiary uppercase tracking-widest whitespace-nowrap">
                      [ {project.status} ]
                    </span>
                  </div>
                </div>

                {/* Vertical Separator 1 (inset) */}
                <div className="w-px bg-border-default/60 my-4 xl:my-5 shrink-0" />

                {/* Column 2: Inset Screenshot (16:9 ratio) with Padding */}
                <div className="w-[260px] xl:w-[300px] shrink-0 p-3.5 xl:p-4 flex items-center justify-center">
                  <div className="w-full aspect-[16/9] bg-bg-surface border border-border-default/60 rounded-sm overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-80 transition-opacity duration-500 ease-out group-hover/card:opacity-100"
                    />
                  </div>
                </div>

                {/* Vertical Separator 2 (inset) */}
                <div className="w-px bg-border-default/60 my-4 xl:my-5 shrink-0" />

                {/* Column 3: Title, Description, and Bottom Horizontal Tech Stack */}
                <div className="flex-1 p-6 xl:p-8 flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-sans text-xl xl:text-2xl font-normal uppercase tracking-wide text-fg-primary">
                      {project.title}
                    </h3>
                    <p className="font-jetbrains-mono text-[11px] xl:text-[12px] text-fg-secondary/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Horizontal Tech Stack at bottom end of Column 3 */}
                  <div className="flex items-center gap-x-3 gap-y-1.5 flex-wrap pt-4 border-t border-border-default/40 mt-auto">
                    {project.tech.map((t, i) => {
                      const TechIcon = t.icon;
                      return (
                        <span
                          key={t.name}
                          className="inline-flex items-center gap-1.5"
                        >
                          {TechIcon && (
                            <TechIcon className="w-3 h-3 text-fg-tertiary shrink-0" />
                          )}
                          <span className="font-jetbrains-mono text-[10px] text-fg-secondary uppercase tracking-wider">
                            {t.name}
                          </span>
                          {i < project.tech.length - 1 && (
                            <span className="text-fg-tertiary/40 ml-1">·</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Vertical Separator 3 (inset) */}
                <div className="w-px bg-border-default/60 my-4 xl:my-5 shrink-0" />

                {/* Column 4: Centered Arrow (accent on hover) */}
                <div className="w-[48px] xl:w-[56px] shrink-0 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-fg-tertiary group-hover/card:text-primary transition-colors shrink-0" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 3. RIGHT-ALIGNED CTA */}
      <div className="w-full flex justify-end mt-4 sm:mt-5">
        <Link
          to="/projects"
          className="flex items-center text-fg-secondary hover:text-fg-primary transition-colors cursor-pointer cursor-target font-jetbrains-mono text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase group px-2 py-1"
        >
          [ BROWSE PROJECT ARCHIVE{" "}
          <span className="text-primary font-jetbrains-mono ml-1 mr-1">
            &gt;
          </span>{" "}
          ]
        </Link>
      </div>
    </section>
  );
}
