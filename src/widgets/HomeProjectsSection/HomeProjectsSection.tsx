import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { SecondaryButton } from "@/shared/ui/Button";
import { useProjects } from "@/entities/project/model/useProjects";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { homeContent } from "@/shared/config/content";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll";

export const HomeProjectsSection = () => {
  const { getFeaturedProjects } = useProjects();
  const featuredProjects = getFeaturedProjects(2);
  return (
    <div className="w-full max-w-7xl mx-auto text-text-primary px-4">
      {/* Header Section */}
      <RevealOnScroll width="100%">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-4 mb-12">
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            {/* Title with Icon */}
            <div className="flex items-center gap-3">
              <Briefcase
                className="w-8 h-8 text-text-primary"
                strokeWidth={1.5}
              />
              <h2 className="text-4xl font-bold text-text-primary m-0">
                {homeContent.projects.title}
              </h2>
            </div>
            {/* Subtitle */}
            <p className="text-lg text-text-secondary font-medium m-0">
              {homeContent.projects.subtitle}
            </p>
          </div>

          {/* View All Button */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <SecondaryButton asChild variant="default">
              <Link to="/projects">
                {homeContent.projects.viewAll}
                <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 ml-2">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </SecondaryButton>
          </div>
        </div>
      </RevealOnScroll>

      {/* Grid Layout: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 0.1} width="100%">
            <ProjectCard project={project} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};
