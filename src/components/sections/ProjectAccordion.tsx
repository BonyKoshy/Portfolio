import { useState, useEffect } from "react";
import { ProjectArchiveData } from "@/types/project";
import {
  ChevronDown,
  ExternalLink,
  Download,
  ArrowRight,
  Cpu,
  Brain,
  Eye,
  Code2,
  Terminal,
  FileText,
  CheckCircle2,
  Layout,
} from "lucide-react";
import { FiGithub } from "react-icons/fi";
import {
  SiPython,
  SiFlask,
  SiSqlite,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiNetlify,
  SiDotnet,
  SiCplusplus,
  SiOpencv,
  SiNumpy,
} from "react-icons/si";
import { TbBrandCSharp, TbApi } from "react-icons/tb";
import { FaJava, FaAws } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/** Helper to map technology names to their corresponding icons */
function getTechIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("python")) return SiPython;
  if (lower.includes("flask")) return SiFlask;
  if (lower.includes("sqlite") || lower.includes("binary db")) return SiSqlite;
  if (lower.includes("html")) return SiHtml5;
  if (lower.includes("tailwind")) return SiTailwindcss;
  if (lower.includes("javascript") || lower.includes("js")) return SiJavascript;
  if (lower.includes("netlify")) return SiNetlify;
  if (lower.includes(".net") || lower.includes("dotnet")) return SiDotnet;
  if (lower.includes("c#")) return TbBrandCSharp;
  if (lower.includes("ansi c") || lower.includes("c++") || lower === "c")
    return SiCplusplus;
  if (lower.includes("opencv")) return SiOpencv;
  if (lower.includes("numpy")) return SiNumpy;
  if (lower.includes("java") && !lower.includes("script")) return FaJava;
  if (lower.includes("aws")) return FaAws;
  if (
    lower.includes("openvino") ||
    lower.includes("npu") ||
    lower.includes("intel")
  )
    return Cpu;
  if (
    lower.includes("ai") ||
    lower.includes("nlp") ||
    lower.includes("watson") ||
    lower.includes("translator")
  )
    return Brain;
  if (lower.includes("vision") || lower.includes("eye")) return Eye;
  if (lower.includes("api") || lower.includes("websocket")) return TbApi;
  if (lower.includes("unittest") || lower.includes("test")) return CheckCircle2;
  if (
    lower.includes("gui") ||
    lower.includes("tkinter") ||
    lower.includes("pyautogui") ||
    lower.includes("os")
  )
    return Terminal;
  if (
    lower.includes("pdf") ||
    lower.includes("reportlab") ||
    lower.includes("report")
  )
    return FileText;
  if (lower.includes("xaml")) return Layout;
  return Code2;
}

interface ProjectAccordionProps {
  project: ProjectArchiveData;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isLast?: boolean;
}

export const ProjectAccordion = ({
  project,
  isOpen,
  onToggle,
  index,
  isLast,
}: ProjectAccordionProps) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    id: string;
  } | null>(null);

  // Close modal when pressing escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const liveLink = project.links.find((l) => l.type === "live");
  const downloadLink = project.links.find((l) => l.type === "download");
  const repoLink = project.links.find((l) => l.type === "github");

  const openZoom = (src: string, id: string) => {
    setSelectedImage({ src, id });
  };

  const closeZoom = () => {
    setSelectedImage(null);
  };

  return (
    <div id={project.id} className="w-full scroll-mt-24">
      <div
        className={cn(
          "w-full max-w-4xl ml-auto",
          !isLast && "border-b border-border-default"
        )}
      >
        {/* HEADER */}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
        >
          <div className="flex items-center gap-4 sm:gap-6 w-full">
            <span className="font-sans text-2xl sm:text-3xl lg:text-4xl font-normal text-fg-tertiary transition-colors leading-none group-hover:text-primary">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div className="flex flex-col items-start gap-1">
              <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-normal uppercase tracking-wide text-fg-primary group-hover:text-fg-secondary transition-colors duration-200">
                {project.title}
              </h3>
              <span className="font-jetbrains-mono text-[9px] sm:text-[10px] text-fg-tertiary uppercase tracking-widest">
                [ {project.status} ]
              </span>
            </div>
          </div>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-fg-tertiary transition-transform duration-300 shrink-0",
              isOpen
                ? "rotate-180 text-primary"
                : "group-hover:text-fg-secondary"
            )}
          />
        </button>

        {/* EXPANDABLE CONTENT */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-8 flex flex-col gap-6 sm:gap-8 w-full">
                {/* Hero Image */}
                <div
                  className="w-full aspect-video sm:aspect-video relative overflow-hidden bg-bg-surface border border-border-default/60 rounded-sm cursor-target group/img"
                  onClick={() =>
                    openZoom(project.heroImage, `hero-${project.id}`)
                  }
                >
                  <motion.img
                    layoutId={`hero-${project.id}`}
                    src={project.heroImage}
                    className="w-full h-full object-cover object-top opacity-90 group-hover/img:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Meta & Tech Stack Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6 pt-4 border-t border-border-default/40">
                  <div className="flex flex-col gap-1 shrink-0">
                    <span className="font-jetbrains-mono text-[9px] text-fg-tertiary uppercase tracking-[0.2em] font-bold">
                      Project Reference
                    </span>
                    <span className="font-jetbrains-mono text-[11px] text-fg-secondary">
                      PRJ-{project.id.toUpperCase().substring(0, 6)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 sm:items-end">
                    <span className="font-jetbrains-mono text-[9px] text-fg-tertiary uppercase tracking-[0.2em] font-bold">
                      Technical Stack
                    </span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 sm:justify-end">
                      {project.techStack.map((tech, i) => {
                        const TechIcon = getTechIcon(tech);
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5"
                          >
                            {TechIcon && (
                              <TechIcon className="w-3 h-3 text-fg-tertiary shrink-0" />
                            )}
                            <span className="font-jetbrains-mono text-[10px] sm:text-[11px] text-fg-secondary uppercase tracking-wider">
                              {tech}
                            </span>
                            {i < project.techStack.length - 1 && (
                              <span className="text-fg-tertiary/40 ml-1.5">
                                ·
                              </span>
                            )}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* The Narrative (Overview) */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-jetbrains-mono text-xs sm:text-sm font-normal text-fg-primary uppercase tracking-wider">
                    Executive Summary
                  </h4>
                  <p className="font-jetbrains-mono text-xs sm:text-sm text-fg-secondary/90 leading-relaxed font-light">
                    {project.overview}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-2.5">
                  <h4 className="font-jetbrains-mono text-xs sm:text-sm font-normal text-fg-primary uppercase tracking-wider">
                    Engineering Highlights
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-jetbrains-mono text-fg-secondary text-xs sm:text-sm font-light leading-relaxed"
                      >
                        <span className="text-primary mt-1.5 text-[7px] shrink-0">
                          ●
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                {(repoLink || liveLink || downloadLink) && (
                  <div className="flex flex-col gap-3 pt-5 border-t border-border-default/40">
                    <h4 className="font-jetbrains-mono text-xs sm:text-sm font-normal text-fg-primary uppercase tracking-wider">
                      Resources & Links
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                      {repoLink && (
                        <a
                          href={repoLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 group/link cursor-target text-fg-secondary hover:text-fg-primary transition-colors"
                        >
                          <FiGithub className="w-3.5 h-3.5" />
                          <span className="font-jetbrains-mono text-[10px] sm:text-[11px] uppercase tracking-widest">
                            {repoLink.label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-fg-tertiary group-hover/link:text-primary group-hover/link:translate-x-1 transition-all" />
                        </a>
                      )}

                      {liveLink && (
                        <a
                          href={liveLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 group/link cursor-target text-fg-secondary hover:text-fg-primary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="font-jetbrains-mono text-[10px] sm:text-[11px] uppercase tracking-widest">
                            {liveLink.label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-fg-tertiary group-hover/link:text-primary group-hover/link:translate-x-1 transition-all" />
                        </a>
                      )}

                      {downloadLink && (
                        <a
                          href={downloadLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 group/link cursor-target text-fg-secondary hover:text-fg-primary transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span className="font-jetbrains-mono text-[10px] sm:text-[11px] uppercase tracking-widest">
                            {downloadLink.label}
                          </span>
                          <ArrowRight className="w-3 h-3 text-fg-tertiary group-hover/link:text-primary group-hover/link:translate-x-1 transition-all" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-Screen Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-100 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeZoom}
              className="absolute inset-0 bg-bg-default/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Content */}
            <div className="relative z-10 w-[90vw] max-w-6xl flex flex-col items-end gap-3">
              <button
                onClick={closeZoom}
                className="text-fg-tertiary hover:text-fg-primary transition-colors cursor-target focus:outline-none text-xs tracking-widest uppercase font-mono"
              >
                [ EXIT ]
              </button>

              <motion.div
                layoutId={selectedImage.id}
                className="relative w-full bg-bg-default border border-border-default overflow-hidden rounded-sm shadow-2xl flex items-center justify-center"
                transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              >
                <motion.img
                  src={selectedImage.src}
                  layoutId={selectedImage.id}
                  className="w-full h-auto max-h-[85vh] object-contain"
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
