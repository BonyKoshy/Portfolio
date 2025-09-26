// src/components/CertificatesList/CertificatesList.jsx
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin } from 'lucide-react';
import SectionTitle from "../SectionTitle/SectionTitle";
import { useOutsideClick } from "../../hooks/use-outside-click";
import './CertificatesList.css';

const cards = [
    {
        description: "Google",
        title: "Google IT Support Professional Certificate",
        src: "/certs/google.png",
        ctaText: "View",
        ctaLink: "https://coursera.org/verify/0RDHEIUBYOV3",
        content: () => ( <p>Currently pursuing this 6-course professional certificate on Coursera. It covers the fundamentals of IT support, including troubleshooting, networking, operating systems, system administration, and security.</p> ),
    },
    {
        description: "IBM",
        title: "IBM Java Developer Professional Certificate",
        src: "/certs/ibm.png",
        ctaText: "View",
        ctaLink: "https://coursera.org/verify/G6AK17EELULT",
        content: () => ( <p>In progress (currently on course 10 of 14) of this comprehensive program on Coursera. This series focuses on building job-ready skills in Java, Spring Framework, database integration, and cloud-native development.</p> ),
    },
    {
        description: "Microsoft",
        title: "Microsoft Azure Data Fundamentals",
        src: "/certs/microsoft.png",
        ctaText: "View",
        ctaLink: "https://learn.microsoft.com/en-us/users/bonykoshy-6243/",
        content: () => ( <p>Completed a series of modules covering foundational knowledge of core data concepts, relational data, non-relational data, and data analytics on Microsoft Azure.</p> ),
    },
    {
        description: "Be10x",
        title: "AI Tools and ChatGPT Workshop",
        src: "/certs/Be10x.png",
        ctaText: "View",
        ctaLink: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997380787",
        content: () => ( <p>A workshop focused on leveraging AI for practical tasks. Gained skills in creating presentations, analyzing data, and debugging code efficiently using modern AI tools.</p> ),
    },
    {
        description: "TrendUp & CMS College",
        title: "Full-Stack Development with Python",
        src: "/certs/VAP.jpeg",
        ctaText: "View",
        ctaLink: "https://www.linkedin.com/in/bonykoshy/details/certifications/",
        content: () => ( <p>Completed a value-added program in association with TrendUp at CMS College of Science & Commerce, covering the principles and practices of full-stack web development using Python.</p> ),
    },
];

function CertificatesList() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    useOutsideClick(ref, () => setActive(null));

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") setActive(null);
        }
        document.body.style.overflow = active ? "hidden" : "auto";
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    return (
        <section id="certificates" className="content-section">
            <SectionTitle title="Certificates" />
            <div className="certificates-list-container">
                <AnimatePresence>
                    {active && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="card-overlay"
                            onClick={() => setActive(null)}
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {active && (
                        <div className="active-card-wrapper">
                            <motion.div layoutId={`card-${active.title}-${id}`} ref={ref} className="active-card-content">
                                <button
                                    className="popup-close-button"
                                    onClick={() => setActive(null)}
                                    aria-label="Close certificate details"
                                >
                                    <span className="line line-1"></span>
                                    <span className="line line-2"></span>
                                </button>
                                
                                <div className="active-card-header">
                                    <motion.div layoutId={`image-${active.title}-${id}`}>
                                        <img src={active.src} alt={active.title} className="active-card-image" />
                                    </motion.div>
                                    <div className="header-text-content">
                                        <motion.h3 layoutId={`title-${active.title}-${id}`} className="card-title"> {active.title} </motion.h3>
                                        <motion.p layoutId={`description-${active.description}-${id}`} className="card-description"> {active.description} </motion.p>
                                    </div>
                                </div>

                                <motion.div 
                                    className="card-body-wrapper"
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.15 } }} 
                                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                >
                                    <div className="card-main-content">
                                        {active.content()}
                                    </div>
                                    <motion.a layoutId={`button-${active.title}-${id}`} href={active.ctaLink} target="_blank" rel="noopener noreferrer" className="cta-button" >
                                        {active.ctaText}
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <ul className="certificates-list">
                    {cards.map((card) => (
                        <motion.li layoutId={`card-${card.title}-${id}`} key={`card-${card.title}-${id}`} onClick={() => setActive(card)} className="certificate-item" >
                            <div className="item-content">
                                <motion.div layoutId={`image-${card.title}-${id}`}>
                                    <img src={card.src} alt={card.title} className="item-image" />
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
                            <motion.a layoutId={`button-${card.title}-${id}`} className="item-button">
                                {card.ctaText}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>

                <a href="https://www.linkedin.com/in/bonykoshy/details/certifications/" target="_blank" rel="noopener noreferrer" className="view-all-certs-link" >
                    <Linkedin className="profile-link-icon" size={20} />
                    <span>View More on LinkedIn</span>
                </a>
            </div>
        </section>
    );
}

export default CertificatesList;