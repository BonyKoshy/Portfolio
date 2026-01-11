import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProjectCardData } from "../model/types";
import { homeContent } from "@/shared/config/content";

interface ProjectCardProps {
  project: ProjectCardData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      key={project.title}
      to="/projects"
      className="group space-y-6 flex flex-col h-full no-underline"
    >
      {/* Image Container */}
      <div className="overflow-hidden rounded-lg aspect-[1.75] w-full bg-panel shadow-sm border border-transparent group-hover:border-prelayer-2 transition-colors duration-300">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 grow">
        <p className="text-text-primary font-medium m-0">{project.year}</p>

        <h4 className="font-sans text-xl font-bold leading-tight text-text-primary m-0">
          {project.title}
        </h4>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 m-0">
          {project.content.description}
        </p>

        {/* Tech Stack Chips (Top 2 only) */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.content.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium text-fg-secondary bg-bg-subtle rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-auto pt-2 flex justify-start">
          <span className="inline-flex items-center text-sm text-accent border-b border-transparent hover:border-accent transition-colors">
            {homeContent.projects.readMore}
            <ArrowRight
              size={14}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
};
