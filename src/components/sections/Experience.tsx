import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Shield, Briefcase, Check } from "lucide-react";

const JOURNEY_MODULES = [
  {
    category: "FOUNDATION",
    role: "BCA Graduate",
    org: "CMS College of Science & Commerce",
    date: "Jun 2022 – May 2025",
    status: "Completed",
    icon: GraduationCap,
    skills: ["Python", "Java", "Database Systems", "Web Development"],
  },
  {
    category: "COMMUNITY",
    role: "Web Management Wing",
    org: "CMS CyberSecurity Council",
    date: "Oct 2024 – May 2025",
    status: "Completed",
    icon: Shield,
    skills: ["Web Management", "UI Design", "Content Systems"],
  },
  {
    category: "ENTERPRISE",
    role: "Storage & Backup Associate",
    org: "ᐳ Accenture (L12)",
    date: "Aug 2026 – Present",
    status: "Active",
    icon: Briefcase,
    skills: ["Windows Server", "NetApp", "NetBackup", "Rubrik", "PowerShell"],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px 0px",
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="experience"
      className="w-full scroll-mt-24 md:scroll-mt-28 flex flex-col relative"
    >
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col gap-2 w-full mb-12 sm:mb-16">
        <span className="font-jetbrains-mono text-xs sm:text-sm text-accent-primary font-bold tracking-widest uppercase">
          04 // PROFESSIONAL JOURNEY
        </span>
        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal uppercase tracking-[-0.04em] ml-[-0.05em] text-fg-primary">
          EXPERIENCE
        </h2>
      </div>

      <div ref={containerRef} className="w-full relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-1 w-full group/grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {JOURNEY_MODULES.map((module, idx) => {
            const Icon = module.icon;
            const isActive = module.status === "Active";

            return (
              <motion.div
                key={`${module.category}-${idx}`}
                variants={itemVariants}
                className="w-full"
              >
                <div
                  className={`group relative border border-border-default bg-bg-default rounded-sm p-6 sm:p-8 flex flex-col h-70 xl:h-75 transition-all duration-300 group-hover/grid:opacity-40 hover:opacity-100! hover:border-fg-primary overflow-hidden ${
                    isActive ? "md:hover:border-accent-primary" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center w-full relative z-10">
                    <span className="font-jetbrains-mono text-xs sm:text-xs text-fg-secondary tracking-widest uppercase transition-colors duration-300 group-hover:text-accent-primary">
                      {module.category}
                    </span>
                    <Icon className="w-4 h-4 transition-colors duration-300 text-accent-primary max-md:text-accent-primary md:text-fg-secondary md:group-hover:text-accent-primary" />
                  </div>

                  {/* Main Content (Default View) */}
                  <div className="flex flex-col gap-2 mt-auto mb-auto transition-opacity duration-500 group-hover:opacity-0 relative z-10">
                    <h3 className="font-sans text-xl sm:text-2xl font-normal uppercase text-fg-primary tracking-wide leading-tight">
                      {module.role}
                    </h3>
                    <span className="font-jetbrains-mono text-xs sm:text-xs text-fg-secondary uppercase tracking-widest mt-1">
                      {module.org}
                    </span>
                    <span className="font-jetbrains-mono text-xs sm:text-xs text-fg-muted uppercase tracking-widest mt-3">
                      {module.date}
                    </span>
                  </div>

                  {/* Main Content (Hover View: Metadata/Skills) */}
                  <div className="absolute inset-x-6 sm:inset-x-8 top-16 bottom-16 flex flex-col justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
                    <div className="flex flex-col gap-2.5">
                      {module.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-accent-primary rounded-full shrink-0" />
                          <span className="font-jetbrains-mono text-xs sm:text-xs text-fg-primary uppercase tracking-widest">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Status */}
                  <div className="flex items-center justify-between border-t border-border-subtle pt-4 w-full mt-auto">
                    <span className="font-jetbrains-mono text-xs sm:text-xs text-fg-secondary uppercase tracking-widest relative z-10">
                      Status
                    </span>
                    <div className="flex items-center gap-2 relative z-10">
                      <span className="font-jetbrains-mono text-xs sm:text-xs text-fg-primary uppercase tracking-widest">
                        {module.status}
                      </span>
                      {isActive ? (
                        <span className="relative flex h-2 w-2 ml-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75 z-20"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary z-20"></span>
                          {/* Expanding circular background fill originating exactly from this dot */}
                          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-accent-primary/20 rounded-full scale-0 md:group-hover:scale-[600] transition-transform duration-700 ease-out z-[-1] hidden md:block pointer-events-none" />
                        </span>
                      ) : (
                        <Check className="w-3.5 h-3.5 text-fg-secondary stroke-[2.5]" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
