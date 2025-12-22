import React, { useState } from "react";
import { SiGithub, SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/shared/ui/SectionTitle/SectionTitle";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface NavLink {
  name: string;
  href: string;
}

interface FormState {
  name: string;
  email: string;
  message: string;
  "bot-field"?: string;
  [key: string]: string | undefined;
}

const socialLinks: SocialLink[] = [
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

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
];

const Contact: React.FC = () => {
  // State for the form
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);

  // --- Handler for input changes ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // --- Handler for form submission ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState["bot-field"]) return;

    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.keys(formState).forEach((key) => {
        const val = formState[key];
        if (val !== undefined) {
             formData.append(key, val);
        }
    });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
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
    <section id="contact" className="relative pt-30 pb-8 px-8 min-h-[90vh] flex flex-col overflow-hidden text-(--text-primary)">
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none bg-[linear-gradient(to_top,var(--background)_70%,transparent_100%)]" />
      
      <div className="relative z-1 max-w-7xl mx-auto w-full flex-grow flex flex-col">
        <SectionTitle title="Get In Touch" />
        <div className="grid grid-cols-1 gap-16 flex-grow items-end lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <div className="text-left flex flex-col justify-end">
            <h2 className="text-[2rem] font-bold">BONY KOSHY</h2>
            <a href="mailto:bonykoshy@gmail.com" className="inline-flex items-center gap-1 text-(--text-secondary) no-underline font-medium mt-2 relative w-fit group">
              bonykoshy@gmail.com
              <ArrowUpRight className="opacity-100 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" size={20} />
              <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-(--text-secondary) scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
            <p className="text-[1rem] text-(--text-secondary) max-w-[400px] my-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of an ambitious team. Feel free to reach
              out.
            </p>
            <ul className="flex flex-row justify-start gap-4 list-none p-0 text-[1.5rem] w-fit">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--text-secondary) transition-all duration-200 hover:text-(--accent) hover:scale-110 block"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end">
            <div className="hidden justify-end gap-8 mb-8 lg:flex">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="no-underline text-(--text-secondary) font-medium transition-colors duration-200 hover:text-(--accent)">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="bg-(--panel-bg) p-8 rounded-2xl flex flex-col max-h-[80vh] h-auto">
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
                  className="flex flex-col gap-4 flex-grow"
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
                    className="bg-(--prelayer-1) border border-(--prelayer-2) p-3 rounded-lg text-(--text-primary) font-inherit"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-(--prelayer-1) border border-(--prelayer-2) p-3 rounded-lg text-(--text-primary) font-inherit"
                  />
                  <textarea
                    name="message"
                    placeholder="Write a message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-(--prelayer-1) border border-(--prelayer-2) p-3 rounded-lg text-(--text-primary) font-inherit min-h-[1px] resize-y flex-grow"
                  ></textarea>
                  <button type="submit" className="bg-(--accent) text-(--background) border-none p-3 rounded-lg font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80">
                    Send
                  </button>

                  {submissionStatus === "success" && (
                    <p className="text-green-500 font-medium text-center">
                      Thanks! Your message has been sent.
                    </p>
                  )}
                  {submissionStatus === "error" && (
                    <p className="text-red-500 font-medium text-center">
                      Oops! Something went wrong.
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        <footer className="flex justify-between items-center mt-16 pt-8 border-t border-(--prelayer-2) text-(--text-secondary) text-[0.9rem] relative max-[768px]:flex-col max-[768px]:gap-4">
          <div className="flex-1 text-left">
            <span>© 2025 Bony Koshy. All rights reserved.</span>
          </div>
          <div className="flex-1 text-right max-[768px]:text-center">
            <a href="/privacy" className="no-underline text-(--text-secondary) transition-all duration-200 hover:underline">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
