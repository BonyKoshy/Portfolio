import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Brain, Globe, Monitor, Database } from "lucide-react";

import { useProjects } from "@/entities/project/model/useProjects";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { Meta } from "@/shared/ui/Meta/Meta";
import { homeContent } from "@/shared/config/content";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll/RevealOnScroll"; // Fixed import path
import ShinyText from "@/shared/ui/ShinyText/ShinyText";
import { cn } from "@/shared/lib/utils";

import { ProjectCardData } from "@/entities/project/model/types";
import { ProjectDetailsSheet } from "@/entities/project/ui/ProjectDetailsSheet";
import { ProjectsSkeleton } from "@/widgets/Skeletons/ProjectsSkeleton";

// Hook to detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallMobile(window.innerWidth < 425);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return { isMobile, isSmallMobile };
};

const Projects = () => {
  const { projects } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isSmallMobile } = useIsMobile();

  // Simulate loading delay to show skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categories = [
    { id: "all", label: "All", icon: <LayoutGrid className="w-4 h-4" /> },
    {
      id: "AI Solutions",
      label: "AI Solutions",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      id: "Web Architecture",
      label: "Web Apps",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "Desktop & Systems",
      label: "Desktop & Systems",
      icon: <Monitor className="w-4 h-4" />,
    },
    {
      id: "Backend Systems",
      label: "Backend",
      icon: <Database className="w-4 h-4" />,
    },
  ];

  if (isLoading) {
    return <ProjectsSkeleton />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto text-text-primary px-4 pt-24 pb-16">
      <Meta
        title="Projects of Bony"
        description="Explore my portfolio of projects, including web applications, desktop utilities, and system architecture experiments."
      />

      <div className="flex flex-col items-center text-center mb-12 space-y-6">
        <RevealOnScroll>
          {/* Title matching Certificates page */}
          <ShinyText
            text={homeContent.projects.title}
            className="text-4xl sm:text-6xl md:text-8xl font-thin tracking-tight uppercase"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          {/* Description matching Certificates page style */}
          <p className="max-w-xl mx-auto text-muted-foreground text-lg font-light leading-relaxed">
            {homeContent.projects.subtitle}
          </p>
        </RevealOnScroll>

        {/* Centered Filter Pills (Scrollable on mobile) - Matching Certificates Design */}
        <RevealOnScroll delay={0.2} width="100%">
          <div className="flex justify-center w-full overflow-x-auto pb-2 no-scrollbar">
            <div className="flex items-center gap-2 p-1.5 bg-black/20 backdrop-blur-xl border border-white/5 rounded-full supports-[backdrop-filter]:bg-black/10">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const showText = !isSmallMobile || isActive;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-full transition-all duration-300 ease-out whitespace-nowrap",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 px-5 py-2.5 font-medium"
                        : "hover:bg-white/5 text-muted-foreground hover:text-foreground px-3 py-2.5"
                    )}
                  >
                    {cat.icon}
                    {showText && (
                      <span
                        className={cn(
                          "text-sm",
                          isSmallMobile && isActive
                            ? "animate-in fade-in slide-in-from-left-2 duration-200"
                            : ""
                        )}
                      >
                        {cat.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className="h-full px-6 border-border-subtle md:border-r md:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 border-r-0"
            >
              <RevealOnScroll width="100%">
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </RevealOnScroll>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectDetailsSheet
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </div>
  );
};

export default Projects;
