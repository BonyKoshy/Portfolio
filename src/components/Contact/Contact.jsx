// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from 'react';
import { SiGithub, SiLinkedin, SiInstagram, SiX } from 'react-icons/si';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import Chatbot from './Chatbot';
import GeminiLogo from './GeminiLogo';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Contact.css';

const socialLinks = [
    { icon: <SiGithub />, href: 'https://github.com/BonyKoshy', label: "GitHub" },
    { icon: <SiLinkedin />, href: 'https://www.linkedin.com/in/bonykoshy/', label: "LinkedIn" },
    { icon: <SiInstagram />, href: 'https://www.instagram.com/bonn_i.e/', label: "Instagram" },
    { icon: <SiX />, href: 'https://twitter.com/bonykoshy', label: "X (Twitter)" },
];

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
];

const Contact = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="contact" className="contact-section">
            <div className="contact-gradient-overlay" />
            <div className="contact-container">
                <SectionTitle title="Get In Touch" />
                <div className="contact-grid">
                    <div className="contact-left">
                        <h2 className="contact-name">BONY KOSHY</h2>
                        <a href="mailto:bonykoshy@gmail.com" className="contact-email-link">
                            bonykoshy@gmail.com
                            <ArrowUpRight className="contact-email-icon" size={20} />
                        </a>
                        <p className="contact-description">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
                        </p>
                        <ul className="social-links">
                            {socialLinks.map((social) => (
                                <li key={social.label}>
                                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="contact-right">
                        <div className="contact-nav">
                            {navLinks.map((link) => <a key={link.name} href={link.href}>{link.name}</a>)}
                        </div>
                        <div className="contact-form-container">
                            <AnimatePresence mode="wait">
                                {isChatOpen ? (
                                    <motion.div 
                                        key="chatbot" 
                                        className="chatbot-view"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        <div className="chatbot-header" onClick={() => setIsChatOpen(false)}>
                                            <h3>AI Assistance</h3>
                                            <ChevronDown />
                                        </div>
                                        <Chatbot isMobile={isMobile} onClose={() => setIsChatOpen(false)} />
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="form"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        <form name="contact" method="POST" data-netlify="true" className="contact-form">
                                            <input type="hidden" name="form-name" value="contact" />
                                            <input type="text" name="name" placeholder="Enter your name" required />
                                            <input type="email" name="email" placeholder="Enter your email" required />
                                            <textarea name="message" placeholder="Write a message" required></textarea>
                                            <button type="submit" className="send-button">Send</button>
                                        </form>
                                        <button className="chatbot-toggle" onClick={() => setIsChatOpen(true)}>
                                            AI Assistance
                                            <ChevronUp />
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <footer className="contact-footer">
                    <div className="footer-copyright">
                        <span>© 2024 Bony Koshy. All rights reserved.</span>
                    </div>
                    <div className="gemini-credit">
                        Vibecoded using <GeminiLogo /> Gemini
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;