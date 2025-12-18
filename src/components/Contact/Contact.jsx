// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contact.css";

const socialLinks = [
  { icon: <SiGithub />, href: "https://github.com/BonyKoshy", label: "GitHub" },
  {
    icon: <SiLinkedin />,
    href: "https://www.linkedin.com/in/bonykoshy/",
    label: "LinkedIn",
  },
  {
    icon: <SiInstagram />,
    href: "https://www.instagram.com/bonn_i.e/",
    label: "Instagram",
  },
  {
    icon: <SiX />,
    href: "https://x.com/Bony_Koshy",
    label: "X (Twitter)",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
];

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // --- State for the form ---
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Handler for input changes ---
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // --- Handler for form submission ---
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState["bot-field"]) return;

    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.keys(formState).forEach((key) =>
      formData.append(key, formState[key])
    );

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmissionStatus("success");
        setFormState({ name: "", email: "", message: "" }); // Clear form
        setTimeout(() => setSubmissionStatus(null), 5000); // Hide message after 5 seconds
      })
      .catch((error) => {
        setSubmissionStatus("error");
        console.error(error);
        setTimeout(() => setSubmissionStatus(null), 5000); // Hide message after 5 seconds
      });
  };

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
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious team. Feel free to reach
              out.
            </p>
            <ul className="social-links">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-right">
            <div className="contact-nav">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
            <div className="contact-form-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <input name="bot-field" onChange={handleChange} />
                  </p>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Write a message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button type="submit" className="send-button">
                    Send
                  </button>

                  {submissionStatus === "success" && (
                    <p className="form-success-message">
                      Thanks! Your message has been sent.
                    </p>
                  )}
                  {submissionStatus === "error" && (
                    <p className="form-error-message">
                      Oops! Something went wrong.
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        <footer className="contact-footer">
          <div className="footer-copyright">
            <span>© 2025 Bony Koshy. All rights reserved.</span>
          </div>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
