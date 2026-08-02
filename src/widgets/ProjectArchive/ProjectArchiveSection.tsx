import { ProjectArchiveData } from "@/entities/project/model/types";
import { ExternalLink, Download, CheckCircle2 } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { RevealOnScroll } from "@/shared/ui/RevealOnScroll/RevealOnScroll";

interface ProjectArchiveSectionProps {
  project: ProjectArchiveData;
}

export const ProjectArchiveSection = ({
  project,
}: ProjectArchiveSectionProps) => {
  return (
    <section
      id={project.id}
      className="py-16 first:pt-0 scroll-mt-24 border-b border-white/5 last:border-b-0"
    >
      <RevealOnScroll>
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-xs font-mono text-white/50">
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span className="flex items-center gap-1 text-primary">
                <CheckCircle2 className="w-3 h-3" />
                {project.status}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <div className="flex items-center gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-1">
                {project.title}
              </h2>
              <p className="text-lg text-white/60 font-light">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-4">
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Overview */}
              <div>
                <h3 className="font-jetbrains-mono text-sm font-medium text-white mb-3">
                  Overview
                </h3>
                <p className="text-white/70 leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-jetbrains-mono text-sm font-medium text-white mb-3">
                  Engineering Highlights
                </h3>
                <ul className="flex flex-col gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 font-jetbrains-mono text-white/70 font-light"
                    >
                      <span className="text-primary mt-1">●</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Role */}
              <div>
                <h3 className="font-jetbrains-mono text-sm font-medium text-white mb-3">
                  Role
                </h3>
                <p className="text-white/50 font-light">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="font-jetbrains-mono text-sm font-medium text-white mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-md text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="flex flex-col gap-3 pt-2">
                {project.links.map((link, idx) => {
                  let Icon: React.ComponentType<{ className?: string }> =
                    ExternalLink;
                  if (link.type === "github") Icon = FiGithub;
                  if (link.type === "download") Icon = Download;

                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <Icon className="w-4 h-4 text-white/50" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Gallery Carousel */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mt-8">
              <h3 className="font-jetbrains-mono text-sm font-medium text-white mb-4">
                Gallery
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative shrink-0 w-[85%] sm:w-[60%] aspect-video rounded-lg border border-white/10 overflow-hidden snap-center"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
