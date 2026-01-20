import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";

import { useProjects } from "@/entities/project/model/useProjects";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { Meta } from "@/shared/ui/Meta/Meta";
import { homeContent } from "@/shared/config/content";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll";
import { CategoryFilter } from "@/features/project/ui/CategoryFilter";

import { ProjectCardData } from "@/entities/project/model/types";
import { ProjectDetailsSheet } from "@/entities/project/ui/ProjectDetailsSheet";
import { ProjectsSkeleton } from "@/widgets/Skeletons/ProjectsSkeleton";

const Projects = () => {
  const { projects } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay to show skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  if (isLoading) {
    return <ProjectsSkeleton />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto text-text-primary px-4 pt-24 pb-16">
      <Meta
        title="Projects of Bony"
        description="Explore my portfolio of projects, including web applications, desktop utilities, and system architecture experiments."
      />

      <RevealOnScroll width="100%">
        <div className="flex flex-col gap-8 mb-12 pl-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Briefcase
                className="w-8 h-8 text-text-primary"
                strokeWidth={1.5}
              />
              <h1 className="text-4xl font-bold text-text-primary m-0">
                {homeContent.projects.title}
              </h1>
            </div>
            <p className="text-lg text-text-secondary font-medium m-0 max-w-2xl">
              {homeContent.projects.subtitle}
            </p>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </RevealOnScroll>

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
