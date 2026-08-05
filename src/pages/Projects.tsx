import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Meta } from "@/components/ui/Meta";
import { TableOfContents, TOCItem } from "@/components/ui/TableOfContents";
import { projectsData } from "@/lib/projectData";
import { ProjectAccordion } from "@/components/sections/ProjectAccordion";

const PROJECT_TOC_ITEMS: TOCItem[] = projectsData.map((project, idx) => ({
  id: project.id,
  label: `${String(idx + 1).padStart(2, "0")} // ${project.title.toUpperCase()}`,
}));

const Projects = () => {
  const location = useLocation();
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});

  // Determine initial open states (Desktop: all open, Tablet: 1st open, Mobile: all closed)
  useEffect(() => {
    const width = window.innerWidth;
    const initial: Record<string, boolean> = {};

    if (width >= 1024) {
      // Desktop: All 10 projects open by default
      projectsData.forEach((p) => {
        initial[p.id] = true;
      });
    } else if (width >= 768) {
      // Tablet: 1st project only open by default
      if (projectsData[0]) {
        initial[projectsData[0].id] = true;
      }
    }

    // Ensure target hash project is open if present
    const targetHash = location.hash.replace("#", "");
    if (targetHash) {
      initial[targetHash] = true;
    }

    setOpenProjects(initial);
  }, []);

  // Smooth scroll to targeted project when location hash is present
  useEffect(() => {
    const targetHash = location.hash.replace("#", "");
    if (!targetHash) return;

    setOpenProjects((prev) => ({
      ...prev,
      [targetHash]: true,
    }));

    const timer = setTimeout(() => {
      const el = document.getElementById(targetHash);
      if (el) {
        const navbarHeight = 100; // Account for floating navbar
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location.hash]);

  const toggleProject = (id: string) => {
    setOpenProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-[94%] max-w-6xl mx-auto text-fg-primary pt-6 pb-16 relative">
      <Meta
        title="Engineering Works // Projects"
        description="Explore my portfolio of projects, including web applications, desktop utilities, and system architecture experiments."
      />

      {/* Floating Far-Left Table of Contents */}
      <TableOfContents
        items={PROJECT_TOC_ITEMS}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex"
      />

      {/* Accordions List (Used for all screen sizes) */}
      <div className="flex flex-col w-full">
        {projectsData.map((project, idx) => {
          const isBeforeClient = idx === 5; // After Project 06 (between 6 and 7)
          const isBeforeLearning = idx === 7; // After Project 08 (between 8 and 9)
          const isLast = idx === projectsData.length - 1;

          return (
            <div key={project.id} className="w-full">
              <ProjectAccordion
                index={idx}
                project={project}
                isOpen={!!openProjects[project.id]}
                onToggle={() => toggleProject(project.id)}
                isLast={isLast || isBeforeClient || isBeforeLearning}
              />

              {/* SECTION SEPARATOR: CLIENT PROJECTS (Between 6 and 7) */}
              {isBeforeClient && (
                <div className="relative w-full max-w-4xl ml-auto flex items-center justify-center py-12 md:py-16">
                  <div className="w-full h-px bg-divider" />
                  <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-xs text-fg-muted tracking-[0.2em] uppercase">
                    [ CLIENT PROJECTS ]
                  </span>
                </div>
              )}

              {/* SECTION SEPARATOR: LEARNING (Between 8 and 9) */}
              {isBeforeLearning && (
                <div className="relative w-full max-w-4xl ml-auto flex items-center justify-center py-12 md:py-16">
                  <div className="w-full h-px bg-divider" />
                  <span className="absolute bg-bg-default px-3 font-jetbrains-mono text-xs text-fg-muted tracking-[0.2em] uppercase">
                    [ LEARNING ]
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
