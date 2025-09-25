import React, { useState, useEffect } from 'react';
import { SiGithub, SiLinkedin, SiInstagram, SiTwitter as SiX } from 'react-icons/si'; // Changed SiTwitter to SiX
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Chatbot from './Chatbot';
import GeminiLogo from './GeminiLogo';
import './Contact.css';

const socialLinks = [
    { icon: <SiGithub />, href: 'https://github.com/BonyKoshy', label: "GitHub" },
    { icon: <SiLinkedin />, href: 'https://www.linkedin.com/in/bonykoshy/', label: "LinkedIn" },
    { icon: <SiInstagram />, href: 'https://www.instagram.com/bonykoshy/', label: "Instagram" },
    { icon: <SiX />, href: 'https://twitter.com/bonykoshy', label: "X (Twitter)" }, // Changed icon and label
];

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
];
const AiAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`ai-assistant-card ${isOpen ? 'open' : ''}`}>
            <div className="ai-assistant-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>AI Assistance</h3>
                {isOpen ? <ChevronDown /> : <ChevronUp />}
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chatbot"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Chatbot isMobile={isMobile} onClose={() => setIsOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-gradient-overlay" />
            <div className="contact-container">
                <div className="contact-grid">
                    <div className="contact-left">
                        <h2 className="contact-name">BONY KOSHY</h2>
                        <p className="contact-description">
                            A creative developer passionate about building beautiful and functional digital experiences. Let's connect!
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
                            <form name="contact" method="POST" data-netlify="true" className="contact-form">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="text" name="name" placeholder="Enter your name" required />
                                <input type="email" name="email" placeholder="Enter your email" required />
                                <textarea name="message" placeholder="Write a message" required></textarea>
                                <button type="submit" className="send-button">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer className="contact-footer">
                    <div className="footer-copyright">
                        <span>© 2024 Bony Koshy. All rights reserved.</span>
                    </div>
                    <div className="gemini-credit">
                        vibecoded using <GeminiLogo /> Gemini
                    </div>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                    </div>
                </footer>
            </div>
            <AiAssistant />
        </section>
    );
};

export default Contact;