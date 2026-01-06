import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { projectsData } from "@/shared/config/projects";

const HomeProjectsSection = () => {
  // Use first 3 projects
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="w-full max-w-7xl mx-auto text-text-primary px-4">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-4 w-full lg:w-auto">
           {/* Title with Icon */}
           <div className="flex items-center gap-3">
             <Briefcase className="w-8 h-8 text-text-primary" strokeWidth={1.5} />
             <h2 className="text-4xl font-bold text-text-primary m-0">Projects</h2>
          </div>
          {/* Subtitle */}
          <p className="text-lg text-text-secondary font-medium m-0">
            Milestones in the learning journey
          </p>
        </div>

        {/* View All Button */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <Link to="/projects">
            <Button variant="underline" className="text-base group">
              View all projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Grid Layout: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
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
            <div className="flex flex-col gap-4 flex-grow">
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
                 <Button variant="underline" className="text-sm text-accent group-hover:gap-2 px-0">
                    Read more
                    <ArrowRight size={14} className="ml-1 transition-all duration-300" />
                 </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeProjectsSection;