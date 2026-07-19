import { useState, useContext } from "react";
import { ThemeContext, ThemeContextValues } from "@/app/providers/ThemeProvider";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import { ChevronDown } from "lucide-react";

const SlideText = ({ text, staggerDelay = 0.03, staggerDuration = 0.4 }: { text: string, staggerDelay?: number, staggerDuration?: number }) => {
  return (
    <span className="inline-flex overflow-hidden relative">
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}-${text}`}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{
            duration: staggerDuration,
            delay: i * staggerDelay,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Footer must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context as ThemeContextValues;
  const location = useLocation();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  // Define valid routes where the standard footer margin should appear
  const validRoutes = [
    "/", "/about", "/projects", "/contact",
    "/certificates", "/privacy", "/privacy-policy",
  ];
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  const is404 = !validRoutes.includes(pathname);
  const marginTopClass = is404 ? "mt-0" : "mt-32";

  return (
    <footer className={`w-[94%] max-w-6xl mx-auto bg-bg-default font-mono flex flex-col ${marginTopClass}`}>
      {/* Part A: The Expandable Separator */}
      <div className="flex items-center gap-4 mb-4 w-full">
        <div className="h-px bg-border-default flex-1"></div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-fg-secondary hover:text-fg-primary transition-colors cursor-target focus:outline-none"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          [ /QUICK LINKS ]
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className="h-px bg-border-default flex-1"></div>
      </div>

      {/* Part B: The Directory Panel */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-6 text-sm">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-target">
                <FiGithub size={14} /> [ GITHUB ]
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-target">
                <FiLinkedin size={14} /> [ LINKEDIN ]
              </a>
              <a href="mailto:contact@example.com" className="flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-target">
                <FiMail size={14} /> [ EMAIL ]
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-fg-secondary hover:text-fg-primary transition-colors cursor-target">
                <FiFileText size={14} /> [ RESUME.PDF ]
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Part C: The System Status Bar */}
      <div className="w-full pt-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side (Identity) */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-fg-tertiary">SYS_BK // BONY KOSHY © {new Date().getFullYear() || '2026'}</span>
          <div className="flex items-center gap-2">
            <span className="text-fg-secondary text-xs">STATUS: ONLINE</span>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
          </div>
        </div>

        {/* Right Side (Legal & Theme) */}
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="text-xs text-fg-tertiary hover:text-fg-secondary cursor-target transition-colors focus:outline-none">
            [ PRIVACY.TXT ]
          </Link>

          <button 
            onClick={handleThemeToggle}
            className="group relative flex items-center text-xs text-fg-tertiary hover:text-fg-secondary cursor-target transition-colors focus:outline-none"
          >
            <span>[ THEME:&nbsp;</span>
            <div className="w-[38px] flex justify-start">
               <SlideText text={theme.toUpperCase()} staggerDelay={0.03} staggerDuration={0.4} />
            </div>
            <span>]</span>

            {/* Tooltip */}
            {theme === 'dark' && (
              <div className="absolute bottom-full right-0 mb-2 bg-bg-surface text-fg-primary text-[10px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border-default whitespace-nowrap shadow-xl">
                WARNING: Flashbang imminent.
              </div>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
