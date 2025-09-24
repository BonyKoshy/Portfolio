import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import './CertificatesList.css';

const cards = [
    {
        description: "Google",
        title: "Google IT Support Professional Certificate",
        src: "/certs/google.png", // Recommended: Add an image for this cert
        ctaText: "View",
        ctaLink: "https://www.coursera.org/professional-certificates/google-it-support",
        content: () => (
            <p>
                Currently pursuing this 6-course professional certificate on Coursera. It covers the fundamentals of IT support, including troubleshooting, networking, operating systems, system administration, and security.
            </p>
        ),
    },
    {
        description: "IBM",
        title: "IBM Java Developer Professional Certificate",
        src: "/certs/ibm.png", // Recommended: Add an image for this cert
        ctaText: "View",
        ctaLink: "https://www.coursera.org/professional-certificates/ibm-java-developer",
        content: () => (
            <p>
                In progress (currently on course 10 of 14) of this comprehensive program on Coursera. This series focuses on building job-ready skills in Java, Spring Framework, database integration, and cloud-native development.
            </p>
        ),
    },
    {
        description: "Microsoft",
        title: "Microsoft Azure Data Fundamentals",
        src: "/certs/microsoft.png",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                [cite_start]Completed a series of modules covering foundational knowledge of core data concepts [cite: 31, 32][cite_start], relational data [cite: 24, 25][cite_start], non-relational data [cite: 4][cite_start], and data analytics on Microsoft Azure[cite: 11].
            </p>
        ),
    },
    {
        description: "Be10x",
        title: "AI Tools and ChatGPT Workshop",
        src: "/certs/Be10x.png",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                A workshop focused on leveraging AI for practical tasks. Gained skills in creating presentations, analyzing data, and debugging code efficiently using modern AI tools.
            </p>
        ),
    },
    {
        description: "TrendUp & CMS College",
        title: "Full-Stack Development with Python",
        src: "/certs/VAP.jpeg",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Completed a value-added program in association with TrendUp at CMS College of Science & Commerce, covering the principles and practices of full-stack web development using Python.
            </p>
        ),
    },
];


const CloseIcon = () => (
    <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.05 } }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
    </motion.svg>
);

function CertificatesList() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId(); // <-- FIX: Define the id using the useId hook

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }
        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setActive(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className="certificates-list-container">
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="card-overlay"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && (
                    <div className="active-card-wrapper">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="close-button"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="active-card-content"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    src={active.src}
                                    alt={active.title}
                                    className="active-card-image"
                                />
                            </motion.div>
                            <div className="active-card-details">
                                <div className="details-header">
                                    <div>
                                        <motion.h3 layoutId={`title-${active.title}-${id}`} className="card-title">
                                            {active.title}
                                        </motion.h3>
                                        <motion.p layoutId={`description-${active.description}-${id}`} className="card-description">
                                            {active.description}
                                        </motion.p>
                                    </div>
                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cta-button"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="card-main-content"
                                >
                                    {active.content()}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <ul className="certificates-list">
                {cards.map((card) => (
                    <motion.li
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="certificate-item"
                    >
                        <div className="item-content">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    src={card.src}
                                    alt={card.title}
                                    className="item-image"
                                />
                            </motion.div>
                            <div>
                                <motion.h3 layoutId={`title-${card.title}-${id}`} className="item-title">
                                    {card.title}
                                </motion.h3>
                                <motion.p layoutId={`description-${card.description}-${id}`} className="item-description">
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="item-button"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.li>
                ))}
            </ul>
            <a
                href="https://www.linkedin.com/in/bonykoshy/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-all-certs-link"
            >
                <ArrowUpRight className="profile-link-icon" size={20} />
                <span>View More on LinkedIn</span>
            </a>
        </div>
    );
}

export default CertificatesList;