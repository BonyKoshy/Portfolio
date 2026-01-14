import { useMemo } from "react";
import { projectsData } from "../model/data";
import { getTechIcon } from "@/entities/technology/lib/getTechIcon";

export const ProjectsCarousel = () => {
  // Select top 4 projects
  const topProjects = useMemo(() => projectsData.slice(0, 4), []);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden group/carousel">
      {/* Accordion Container - simplified for integration */}
      <div className="flex-1 flex w-full gap-2 overflow-hidden">
        {topProjects.map((project, i) => (
          <div
            key={i}
            className="relative h-full rounded-xl overflow-hidden transition-all duration-500 ease-out flex-1 hover:flex-3 group/card border border-border-default bg-bg-paper cursor-pointer motion-reduce:transition-none"
            role="img"
            aria-label={`Project: ${project.title}`}
          >
            {/* Background Image */}
            <img
              src={project.content.imageSrc}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover/card:opacity-40 transition-opacity grayscale group-hover/card:grayscale-0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end items-center group-hover/card:items-start transition-all motion-reduce:transition-none">
              {/* Tech Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/card:top-4 group-hover/card:left-4 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-all duration-500 text-white/50 group-hover/card:text-white motion-reduce:transition-none">
                <div className="text-3xl drop-shadow-md">
                  {getTechIcon(project.content.tech[0] || "")}
                </div>
              </div>

              {/* Title & Desc (Reveals on hover) */}
              <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/card:translate-y-0 delay-100 w-full motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0">
                <p className="text-white text-base font-bold leading-tight mb-2 line-clamp-2">
                  {project.title}
                </p>
                <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">
                  {project.content.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
