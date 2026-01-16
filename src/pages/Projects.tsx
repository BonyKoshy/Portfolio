import { ArrowRight, Briefcase, Download, ArrowUpRight } from "lucide-react";
import { useProjects } from "@/entities/project/model/useProjects";
import { PrimaryButton, SecondaryButton } from "@/shared/ui/Button";
import { Meta } from "@/shared/ui/Meta/Meta";
import { ProjectDetailsSheet } from "@/entities/project/ui/ProjectDetailsSheet";

const Projects = () => {
  const { projects } = useProjects();
  return (
    <div className="w-full max-w-7xl mx-auto text-text-primary px-4 pt-24 pb-16">
      <Meta
        title="Projects of Bony"
        description="Explore my portfolio of projects, including web applications, desktop utilities, and system architecture experiments."
      />
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-16">
        {/* Title with Icon */}
        <div className="flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-text-primary" strokeWidth={1.5} />
          <h1 className="text-4xl font-bold text-text-primary m-0">Projects</h1>
        </div>
        {/* Subtitle */}
        <p className="text-lg text-text-secondary font-medium m-0 max-w-2xl">
          A showcase of my technical journey, featuring web applications,
          desktop utilities, and system architecture experiments.
        </p>
      </div>

      {/* Projects List - Vertical Stack of Horizontal Cards */}
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col md:flex-row gap-8 bg-bg-paper border border-border-default rounded-2xl overflow-hidden hover:border-text-secondary transition-colors duration-300 p-6"
          >
            {/* Image Section (Left) */}
            <div className="w-full md:w-5/12 lg:w-4/12 shrink-0">
              <div className="rounded-xl overflow-hidden aspect-video w-full bg-bg-subtle border border-border-subtle shadow-sm relative group-hover:shadow-md transition-shadow duration-300">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transform sm:group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Details Section (Right) */}
            <div className="flex flex-col grow gap-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-primary">
                  {project.year}
                </span>
                <span className="w-1 h-1 rounded-full bg-border-default"></span>
                <span className="text-sm text-text-secondary">
                  {project.category}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-text-primary m-0 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h2>

              <p className="text-text-secondary leading-relaxed m-0 text-base max-w-3xl">
                {project.content.description}
              </p>

              {/* Tech Stack Chips (All) */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.content.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-fg-secondary bg-bg-subtle rounded-full border border-transparent hover:border-border-default transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto pt-6 flex flex-wrap gap-4">
                {/* Live Link */}
                {/* Action Button: Install (if available) > Live Demo (if available) */}
                {project.content.installCommand && project.githubLink ? (
                  <a
                    href={`${project.githubLink}/releases`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PrimaryButton
                      withHoverAnimation={false}
                      className="text-sm gap-2 h-10 px-6"
                      icon={<Download size={16} />}
                      iconPosition="right"
                    >
                      Install
                    </PrimaryButton>
                  </a>
                ) : project.liveLink && project.liveLink !== "#" ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PrimaryButton
                      withHoverAnimation={false}
                      className="text-sm gap-2 h-10 px-6"
                      icon={<ArrowUpRight size={16} />}
                      iconPosition="right"
                    >
                      Live Demo
                    </PrimaryButton>
                  </a>
                ) : null}

                {/* Removed Source Code button from here, kept in Side Sheet */}

                {/* Read More (Side Sheet) */}
                <ProjectDetailsSheet project={project}>
                  <SecondaryButton
                    withHoverAnimation={false}
                    className="text-sm gap-2 h-10 px-6"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    Read More
                  </SecondaryButton>
                </ProjectDetailsSheet>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
