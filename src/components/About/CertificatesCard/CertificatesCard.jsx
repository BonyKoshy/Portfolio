import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import './CertificatesCard.css';


const cards = [
    {
        description: "IBM",
        title: "Spring Framework for Java Development",
        src: "/certs/ibm-logo.png",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Gained expertise in building enterprise-grade Java applications using Spring Boot, RESTful APIs, and security practices. Focused on scalable, production-ready development with modern frameworks.
            </p>
        ),
    },
    {
        description: "IBM",
        title: "Java Development with Databases",
        src: "/certs/ibm-logo-1.jpeg",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Hands-on experience integrating Java applications with MySQL databases. Learned advanced querying, transactions, and data persistence techniques for robust backend development.
            </p>
        ),
    },
    {
        description: "IBM",
        title: "Cloud Native, Microservices, Containers, DevOps & Agile",
        src: "/certs/ibm-logo-2.jpeg",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Built cloud-native applications using microservices architecture, Docker containers, and DevOps practices. Applied Agile methodologies to deliver modern, scalable software solutions.
            </p>
        ),
    },
    {
        description: "Microsoft",
        title: "Azure Data Fundamentals",
        src: "/certs/microsoft-certified-fundamentals-logo.jpeg",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Validated foundational knowledge of cloud data concepts with Microsoft Azure. Covered relational and non-relational data, analytics, and cloud storage solutions with enterprise credibility.
            </p>
        ),
    },
    {
        description: "Microsoft",
        title: "Power Platform Fundamentals",
        src: "/certs/microsoft-certified-fundamentals-logo-1.jpeg",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Learned to leverage Power BI, Power Apps, and Power Automate for creating data-driven solutions, automating workflows, and building low-code enterprise apps.
            </p>
        ),
    },
    {
        description: "Be10x",
        title: "Generative AI & ChatGPT Workshop",
        src: "/certs/be10x-logo.png",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Participated in an industry workshop on Generative AI and ChatGPT. Gained insights into prompt engineering, real-world AI applications, and the future of workplace automation.
            </p>
        ),
    },
    {
        description: "TrendUp / College",
        title: "Full-Stack Development with Python",
        src: "/certs/fullstack-logo.jpeg",
        ctaText: "View",
        ctaLink: "#",
        content: () => (
            <p>
                Acquired full-stack skills beyond Java, focusing on Python, web frameworks, and frontend-backend integration. Strengthened versatility in building complete applications.
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

function CertificatesCard() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

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
    
    // Custom hook to handle clicks outside the active card
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
        <div className="certificates-card-container">
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
                <span>View All Certificates</span>
            </a>
        </div>
    );
}

export default CertificatesCard;