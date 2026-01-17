import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SecondaryButton } from "@/shared/ui/Button";
import { ProjectCardData } from "../model/types";
import { homeContent } from "@/shared/config/content";
import { ProjectDetailsSheet } from "./ProjectDetailsSheet";
import { AspectRatio } from "@/shared/ui/AspectRatio/AspectRatio";

interface ProjectCardProps {
  project: ProjectCardData;
}

/** Renders a card displaying project preview details. */
export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group space-y-6 flex flex-col h-full">
      <Link
        to="/projects"
        className="space-y-6 flex flex-col grow no-underline"
      >
        <div className="overflow-hidden rounded-(--radius-card) w-full bg-panel shadow-sm border border-transparent group-hover:border-prelayer-2 transition-colors duration-300">
          <AspectRatio ratio={1.75}>
            <img
              src={project.src}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </AspectRatio>
        </div>

        <div className="flex flex-col gap-4 grow">
          <p className="text-text-primary font-medium m-0">{project.year}</p>

          <h4 className="font-sans text-xl font-bold leading-tight text-text-primary m-0">
            {project.title}
          </h4>

          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 m-0">
            {project.content.description}
          </p>

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
        </div>
      </Link>

      <div className="mt-auto pt-2 flex justify-start">
        <ProjectDetailsSheet project={project}>
          <SecondaryButton
            variant="default"
            className="text-sm text-accent hover:text-accent border-b-current"
            icon={<ArrowRight size={14} />}
            iconPosition="right"
          >
            {homeContent.projects.readMore}
          </SecondaryButton>
        </ProjectDetailsSheet>
      </div>
    </div>
  );
};
