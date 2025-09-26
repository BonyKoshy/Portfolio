import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Carousel } from "../ProjectsCarousel/ProjectsCarousel";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { Github, ExternalLink, Download } from "lucide-react";
import './Projects.css';

// This is the detailed content that appears in the popup
const ProjectContent = ({ project }) => (
    <>
        <motion.img
            layoutId={`card-image-${project.title}`}
            src={project.content.imageSrc}
            alt={project.title}
            className="project-content-image"
        />
        <div className="project-content-details">
            <div className="project-content-header">
                <motion.h3 layoutId={`card-title-${project.title}`}>{project.title}</motion.h3>
                <motion.p layoutId={`card-category-${project.title}`} className="project-year">{project.year}</motion.p>
            </div>
            <motion.p className="project-content-description">{project.content.description}</motion.p>
            <motion.div className="project-content-tech">
                {project.content.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
            </motion.div>
            <motion.div className="project-buttons">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github">
                    <Github size={18} /> GitHub
                </a>
                {project.linkType === 'link' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live">
                        <ExternalLink size={18} /> Live Link
                    </a>
                )}
                {project.linkType === 'install' && (
                     <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live">
                        <Download size={18} /> Install
                    </a>
                )}
            </motion.div>
        </div>
    </>
);

// Your updated project data
const data = [
    {
        category: "Web Application", title: "Marvel Multiverse Timeline", year: 2024,
        src: "/projects/marvel.png",
        githubLink: "https://github.com/BonyKoshy/Marvel_Multiverse_Timeline",
        liveLink: "https://marvelmultiversetimeline.netlify.app/",
        linkType: 'link',
        content: {
            imageSrc: "/projects/marvel-details.png",
            description: "An immersive web app mapping the entire MCU timeline with AI-generated synopses, dynamic filters, and an interactive dashboard built with vanilla JavaScript and Tailwind CSS.",
            tech: ["HTML", "Tailwind CSS", "JavaScript", "Netlify"],
        },
    },
    {
        category: "AI Chat Application", title: "Connectly", year: 2023,
        src: "/projects/connectly.png",
        githubLink: "https://github.com/BonyKoshy/Connectly",
        liveLink: "#",
        linkType: 'none',
        content: {
            imageSrc: "/projects/connectly-details.png",
            description: "An AI-enhanced, multilingual chat application that offers real-time, one-on-one conversations with live translation, secure user authentication, and a responsive UI, all powered by Python and Flask.",
            tech: ["Python", "Flask", "Socket.IO", "JavaScript", "Bootstrap"],
        },
    },
    {
        category: "Desktop Application", title: "Metadata Timeline Generator", year: 2023,
        src: "/projects/metadata.png",
        githubLink: "https://github.com/BonyKoshy/metadata-timeline-generator",
        liveLink: "https://github.com/BonyKoshy/metadata-timeline-generator/releases/download/v1.0/MetadataGenerator.zip",
        linkType: 'install',
        content: {
            imageSrc: "/projects/metadata-details.png",
            description: "A digital forensic analysis tool that extracts and visualizes file metadata on an interactive timeline, helping users reconstruct the sequence of events related to a set of files. Built with Python and Flask.",
            tech: ["Python", "Flask", "SQLite", "JavaScript"],
        },
    },
    {
        category: "Desktop Application", title: "Downloads Folder Organizer", year: 2023,
        src: "/projects/organizer-tk.png", // Renamed to differentiate
        githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer",
        liveLink: "https://github.com/user-attachments/files/21185510/Downloads_Organizer.zip",
        linkType: 'install',
        content: {
            imageSrc: "/projects/organizer-tk-details.png",
            description: "A user-friendly desktop utility that automatically categorizes and organizes files in the Downloads folder. Features include smart auto-categorization, an undo function, and light/dark modes, all built with Python and Tkinter.",
            tech: ["Python", "Tkinter"],
        },
    },
    {
        category: "Desktop Application", title: "Downloads Folder Organizer (MAUI)", year: 2023,
        src: "/projects/organizer-maui.png",
        githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer-MAUI",
        liveLink: "https://drive.google.com/drive/folders/1KH6VUaidPCaGbmYaTPnEjSmm3zWg9UPV?usp=sharing",
        linkType: 'install', // Only GitHub button needed
        content: {
            imageSrc: "/projects/organizer-maui-details.png",
            description: "A modernized, native Windows version of the Downloads Folder Organizer, rebuilt with .NET MAUI for a more robust and visually appealing user experience, featuring a Fluent design UI and one-click operations.",
            tech: [".NET MAUI", "C#", "XAML"],
        },
    },
    {
        category: "Web Application", title: "IBM Bony Portfolio", year: 2022,
        src: "/projects/ibm.png",
        githubLink: "https://github.com/BonyKoshy/IBM_Bony_Portfolio",
        liveLink: "https://bonykoshy.github.io/IBM_Bony_Portfolio/",
        linkType: 'link',
        content: {
            imageSrc: "/projects/ibm-details.png",
            description: "A responsive, single-page portfolio website created for an IBM Coursera course. It showcases skills, projects, and recommendations with interactive features like a dynamic recommendation form, built with foundational web technologies.",
            tech: ["HTML", "CSS", "JavaScript"],
        },
    }
];

export default function Projects() {
    const [activeCard, setActiveCard] = useState(null);
    const ref = useRef(null);
    useOutsideClick(ref, () => setActiveCard(null));

    const cards = data.map((card) => ({
        ...card,
        key: card.title
    }));
    
    return (
        <section id="projects" className="content-section">
            <SectionTitle title="My Projects" />
            <Carousel items={cards} onCardClick={setActiveCard} />

            <AnimatePresence>
                {activeCard && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="project-overlay"
                            onClick={() => setActiveCard(null)}
                        />
                        <div className="expanded-card-wrapper" onClick={() => setActiveCard(null)}>
                            <motion.div
                                layoutId={`card-${activeCard.title}`}
                                ref={ref}
                                className="expanded-card-content"
                                onClick={(e) => e.stopPropagation()}
                            >
                                 <button
                                    className="popup-close-button"
                                    onClick={() => setActiveCard(null)}
                                    aria-label="Close project details"
                                >
                                    <span className="line line-1"></span>
                                    <span className="line line-2"></span>
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