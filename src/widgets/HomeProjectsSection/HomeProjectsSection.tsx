import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { projectsData } from "@/entities/project/model/data";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { homeContent } from "@/shared/config/content";

export const HomeProjectsSection = () => {
  // Displaying top 2 featured projects
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="w-full max-w-7xl mx-auto text-text-primary px-4">
      {/* Header Section */}
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
          <Link to="/projects" className="no-underline">
            <span className="inline-flex items-center justify-center pb-1 text-base group text-text-primary border-b border-transparent hover:border-text-primary transition-colors cursor-pointer">
              {homeContent.projects.viewAll}
              <ArrowRight
                size={16}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </div>

      {/* Grid Layout: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};
