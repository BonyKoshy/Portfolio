import { useState } from "react";
import {
  SideSheet,
  SideSheetTrigger,
  SideSheetContent,
  SideSheetHeader,
  SideSheetTitle,
  SideSheetDescription,
  SideSheetFooter,
  SideSheetClose,
} from "@/shared/ui/SideSheet";
import { ProjectCardData } from "../model/types";
import {
  ArrowUpRight,
  Download,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/shared/ui/Button";
import { AspectRatio } from "@/shared/ui/AspectRatio/AspectRatio";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";

interface ProjectDetailsSheetProps {
  project: ProjectCardData;
  children: React.ReactNode;
  width?: string;
  className?: string;
}

/** Displays detailed project information in a side sheet. */
export const ProjectDetailsSheet = ({
  project,
  children,
  width = "600px",
}: ProjectDetailsSheetProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images =
    project.content.screenshots && project.content.screenshots.length > 0
      ? project.content.screenshots
      : [project.src];

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <SideSheet width={width}>
      <SideSheetTrigger asChild>{children}</SideSheetTrigger>
      <SideSheetContent className="overflow-y-auto sm:overscroll-contain">
        <SideSheetClose className="absolute right-6 top-6 z-50 p-2 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-text-primary transition-all hover:bg-white/20 dark:hover:bg-white/10 active:scale-95 focus:outline-hidden">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </SideSheetClose>

        <SideSheetHeader className="pt-8 px-1 pb-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-border-default" />
              <span>{project.category}</span>
            </div>
            <SideSheetTitle className="text-3xl font-bold tracking-tight text-text-primary">
              {project.title}
            </SideSheetTitle>
          </div>
          <SideSheetDescription className="text-base leading-relaxed text-text-secondary max-w-xl">
            {project.content.description}
          </SideSheetDescription>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.content.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-fg-secondary bg-bg-subtle rounded-full border border-transparent"
              >
                {tech}
              </span>
            ))}
          </div>
        </SideSheetHeader>

        <div className="mt-4 space-y-10 pb-28">
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden border border-border-default bg-bg-subtle shadow-sm relative group">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide}
                      src={images[currentSlide]}
                      alt={`${project.title} slide ${currentSlide + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 focus:outline-none"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 focus:outline-none"
                        aria-label="Next slide"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            idx === currentSlide
                              ? "bg-white w-4"
                              : "bg-white/50 hover:bg-white/80"
                          )}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </AspectRatio>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {project.content.role && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  My Role
                </h4>
                <p className="text-text-secondary leading-relaxed pl-3 border-l border-border-subtle ml-0.5">
                  {project.content.role}
                </p>
              </div>
            )}

            {project.content.problem && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  The Problem
                </h4>
                <p className="text-text-secondary leading-relaxed pl-3 border-l border-border-subtle ml-0.5">
                  {project.content.problem}
                </p>
              </div>
            )}

            {project.content.solution && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  The Solution
                </h4>
                <p className="text-text-secondary leading-relaxed pl-3 border-l border-border-subtle ml-0.5">
                  {project.content.solution}
                </p>
              </div>
            )}

            {project.content.features && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-3">
                  {project.content.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-text-secondary text-sm"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border-default shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <SideSheetFooter className="absolute bottom-0 left-0 right-0 p-6 bg-bg-paper/80 backdrop-blur-xl border-t border-border-default flex flex-col sm:flex-row gap-4 sm:justify-between items-center z-40">
          <div className="w-full sm:w-auto flex-1">
            {project.content.installCommand ? (
              <PrimaryButton
                asChild
                withHoverAnimation={false}
                className="w-full h-11 text-base shadow-lg shadow-primary/20"
                icon={<Download size={18} />}
                iconPosition="right"
              >
                <a
                  href={
                    project.githubLink ? `${project.githubLink}/releases` : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  Install
                </a>
              </PrimaryButton>
            ) : project.liveLink && project.liveLink !== "#" ? (
              <PrimaryButton
                asChild
                withHoverAnimation={false}
                className="w-full h-11 text-base shadow-lg shadow-primary/20"
                icon={<ArrowUpRight size={18} />}
                iconPosition="right"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  Live
                </a>
              </PrimaryButton>
            ) : null}
          </div>

          {project.githubLink && (
            <div className="w-full sm:w-auto">
              <SecondaryButton
                asChild
                withHoverAnimation={false}
                variant="ghost"
                className="w-full h-11 text-sm border border-border-default hover:bg-bg-subtle hover:text-text-primary px-6"
                icon={<Github size={18} />}
                iconPosition="right"
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center"
                >
                  Source Code
                </a>
              </SecondaryButton>
            </div>
          )}
        </SideSheetFooter>
      </SideSheetContent>
    </SideSheet>
  );
};
