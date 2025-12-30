import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carousel,
  ProjectCardData,
} from "@/widgets/ProjectsCarousel";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { useOutsideClick } from "@/shared/lib";
import { Github, ExternalLink, Download } from "lucide-react";
import { Safari } from "@/shared/ui/magicui/safari";
import { RippleButton } from "@/shared/ui/magicui/ripple-button";

// This is the detailed content that appears in the popup
// This is the detailed content that appears in the popup
const ProjectContent: React.FC<{ project: ProjectCardData }> = ({
  project,
}) => (
  <div className="flex flex-row w-full h-full gap-0 overflow-hidden rounded-3xl bg-panel max-[768px]:flex-col">
    {/* Safari Browser Mockup Area - 70% width */}
    <div className="grow h-full bg-transparent p-8 flex items-center justify-center max-[768px]:h-[40vh] max-[768px]:p-4">
      <Safari
        srcs={project.srcs || [project.content.imageSrc]} // Use detail image or fallback
        url={project.liveLink || project.githubLink}
        className="w-full h-auto max-h-full object-contain shadow-2xl"
      />
    </div>

    {/* Sidebar Area - 30% width (approx) */}
    <div className="w-87.5 shrink-0 h-full bg-panel border-l border-prelayer-2 p-8 flex flex-col overflow-y-auto max-[768px]:w-full max-[768px]:h-auto max-[768px]:border-l-0 max-[768px]:border-t">
      <div className="mb-4">
        <motion.h3
          layoutId={`card-title-${project.title}`}
          className="text-[2rem] font-bold m-0 leading-tight"
        >
          {project.title}
        </motion.h3>
        <motion.p
          layoutId={`card-category-${project.title}`}
          className="text-[1rem] font-medium text-text-secondary mt-2"
        >
          {project.year} • {project.category}
        </motion.p>
      </div>

      <motion.p className="text-[1rem] text-text-secondary leading-[1.7] mb-6 grow">
        {project.content.description}
      </motion.p>

      <motion.div className="flex flex-wrap gap-2 mb-8">
        {project.content.tech.map((t, i) => (
          <span
            key={i}
            className="bg-prelayer-2 px-3 py-1 rounded-full text-[0.8rem] font-medium"
          >
            {t}
          </span>
        ))}
      </motion.div>

      <div className="flex flex-col gap-3 mt-auto">
        <RippleButton
          className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background"
          onClick={() => window.open(project.githubLink, "_blank")}
        >
          <Github size={18} /> Source Code
        </RippleButton>

        {(project.linkType === "link" || project.linkType === "install") && (
          <RippleButton
            className="w-full flex items-center justify-center gap-2 bg-accent text-white border-2 border-transparent hover:opacity-90"
            onClick={() => window.open(project.liveLink, "_blank")}
          >
            {project.linkType === "install" ? (
              <Download size={18} />
            ) : (
              <ExternalLink size={18} />
            )}
            {project.linkType === "install" ? "Download App" : "Visit Website"}
          </RippleButton>
        )}
      </div>
    </div>
  </div>
);

// Updated project data
const data: ProjectCardData[] = [
  {
    category: "Web Application",
    title: "Marvel Multiverse Timeline",
    year: 2024,
    src: "/projects/marvel.png",
    githubLink: "https://github.com/BonyKoshy/Marvel_Multiverse_Timeline",
    liveLink: "https://marvelmultiversetimeline.netlify.app/",
    linkType: "link",
    content: {
      imageSrc: "/projects/marvel-details.png",
      description:
        "An immersive web app mapping the entire MCU timeline with AI-generated synopses, dynamic filters, and an interactive dashboard built with vanilla JavaScript and Tailwind CSS.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "Netlify"],
    },
  },
  {
    category: "AI Chat Application",
    title: "Connectly",
    year: 2023,
    src: "/projects/connectly.png",
    githubLink: "https://github.com/BonyKoshy/Connectly",
    liveLink: "#",
    linkType: "none",
    content: {
      imageSrc: "/projects/connectly-details.png",
      description:
        "An AI-enhanced, multilingual chat application that offers real-time, one-on-one conversations with live translation, secure user authentication, and a responsive UI, all powered by Python and Flask.",
      tech: ["Python", "Flask", "Socket.IO", "JavaScript", "Bootstrap"],
    },
    srcs: ["/projects/connectly.png", "/projects/connectly-details.png"],
  },
  {
    category: "Desktop Application",
    title: "Metadata Timeline Generator",
    year: 2023,
    src: "/projects/metadata.png",
    githubLink: "https://github.com/BonyKoshy/metadata-timeline-generator",
    liveLink:
      "https://github.com/BonyKoshy/metadata-timeline-generator/releases/download/v1.0/MetadataGenerator.zip",
    linkType: "install",
    content: {
      imageSrc: "/projects/metadata-details.png",
      description:
        "A digital forensic analysis tool that extracts and visualizes file metadata on an interactive timeline, helping users reconstruct the sequence of events related to a set of files. Built with Python and Flask.",
      tech: ["Python", "Flask", "SQLite", "JavaScript"],
    },
  },
  {
    category: "Desktop Application",
    title: "Downloads Folder Organizer",
    year: 2023,
    src: "/projects/organizer-tk.png", // Renamed to differentiate
    githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer",
    liveLink:
      "https://github.com/user-attachments/files/21185510/Downloads_Organizer.zip",
    linkType: "install",
    content: {
      imageSrc: "/projects/organizer-tk-details.png",
      description:
        "A user-friendly desktop utility that automatically categorizes and organizes files in the Downloads folder. Features include smart auto-categorization, an undo function, and light/dark modes, all built with Python and Tkinter.",
      tech: ["Python", "Tkinter"],
    },
  },
  {
    category: "Desktop Application",
    title: "Downloads Folder Organizer (MAUI)",
    year: 2023,
    src: "/projects/organizer-maui.png",
    githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer-MAUI",
    liveLink:
      "https://drive.google.com/drive/folders/1KH6VUaidPCaGbmYaTPnEjSmm3zWg9UPV?usp=sharing",
    linkType: "install", // Only GitHub button needed
    content: {
      imageSrc: "/projects/organizer-maui-details.png",
      description:
        "A modernized, native Windows version of the Downloads Folder Organizer, rebuilt with .NET MAUI for a more robust and visually appealing user experience, featuring a Fluent design UI and one-click operations.",
      tech: [".NET MAUI", "C#", "XAML"],
    },
  },
  {
    category: "Web Application",
    title: "IBM Bony Portfolio",
    year: 2022,
    src: "/projects/ibm.png",
    githubLink: "https://github.com/BonyKoshy/IBM_Bony_Portfolio",
    liveLink: "https://bonykoshy.github.io/IBM_Bony_Portfolio/",
    linkType: "link",
    content: {
      imageSrc: "/projects/ibm-details.png",
      description:
        "A responsive, single-page portfolio website created for an IBM Coursera course. It showcases skills, projects, and recommendations with interactive features like a dynamic recommendation form, built with foundational web technologies.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  },
];

export default function Projects() {
  const [activeCard, setActiveCard] = useState<ProjectCardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => setActiveCard(null));

  const cards = data.map((card) => ({
    ...card,
    key: card.title,
  }));

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 py-15 text-text-primary"
    >
      <SectionTitle title="My Projects" />
      <Carousel items={cards} onCardClick={setActiveCard} />

      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setActiveCard(null)}
            />
            <div
              className="fixed inset-0 grid place-items-center z-50 p-4"
              onClick={() => setActiveCard(null)}
            >
              <motion.div
                layoutId={`card-${activeCard.title}`}
                ref={ref}
                className="bg-transparent w-full max-w-280 h-[80vh] overflow-hidden flex relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 bg-transparent border-none cursor-pointer p-2 flex flex-col justify-center items-center gap-1.5 z-50 group"
                  onClick={() => setActiveCard(null)}
                  aria-label="Close project details"
                >
                  <span className="w-6 h-0.5 bg-text-secondary rounded-sm transform rotate-45 translate-y-1 transition-colors duration-200 group-hover:bg-accent"></span>
                  <span className="w-6 h-0.5 bg-text-secondary rounded-sm transform -rotate-45 -translate-y-1 transition-colors duration-200 group-hover:bg-accent"></span>
                </button>
                <ProjectContent project={activeCard} />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}



