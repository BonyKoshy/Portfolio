import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Terminal, ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import CardNav from "@/shared/ui/CardNav/CardNav";
import TerminalUI from "./TerminalUI";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = ["/", "/dev", "/old-home", "/homev2"].includes(
    location.pathname
  );

  const getPathLabel = (path: string) => {
    if (path === "/certificates") return "[ /CERTIFICATION ]";
    return `[ ${path.toUpperCase()} ]`;
  };

  const toggleMobileMenu = () => {
    if (isTerminalOpen) setIsTerminalOpen(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTerminal = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    setIsTerminalOpen(!isTerminalOpen);
  };

  const navLinks = [
    { name: "[ /EXPERTISE ]", path: "/expertise" },
    { name: "[ /CAPABILITIES ]", path: "/capabilities" },
    { name: "[ /EXPERIENCE ]", path: "/experience" },
    { name: "[ /PROJECTS ]", path: "/projects" },
    { name: "[ /CONTACT ]", path: "/contact" },
  ];

  return (
    <>
      {/* Non-blur solid/tinted backdrop */}
      <AnimatePresence>
        {(isTerminalOpen || isMobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              setIsTerminalOpen(false);
              setIsMobileMenuOpen(false);
            }}
            className="fixed inset-0 z-40 bg-bg-default/90"
          />
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from jumping under the fixed navbar */}
      <div className="h-24 w-full shrink-0" />

      {/* The Floating Dynamic Island */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl bg-bg-default/95 backdrop-blur-xl border border-border-default rounded-2xl overflow-hidden flex flex-col"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 w-full">
            {/* Left Column: Brand Logo (Desktop Home) OR Menu (Mobile Home) OR Back Button (Subpages) */}
            <div className="flex items-center z-10">
              {isHomePage ? (
                <>
                  {/* Mobile Menu Icon */}
                  <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden text-fg-secondary hover:text-fg-primary focus:outline-none transition-colors cursor-target p-1"
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                  {/* Desktop Logo */}
                  <Link
                    to="/"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsTerminalOpen(false);
                    }}
                    className="hidden lg:block text-fg-primary text-3xl tracking-wide hover:text-fg-primary transition-colors cursor-target"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    BK
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => navigate("/")}
                  className="text-fg-secondary hover:text-fg-primary focus:outline-none transition-colors cursor-target p-1 flex items-center gap-1.5 group"
                  aria-label="Back to home"
                >
                  <ArrowLeft
                    size={20}
                    className="transition-transform group-hover:-translate-x-1 text-primary"
                  />
                  <span className="hidden sm:inline-block text-[10px] tracking-wider font-mono uppercase text-fg-secondary group-hover:text-fg-primary transition-colors">
                    [ Back ]
                  </span>
                </button>
              )}
            </div>

            {/* Center Column: Menu Links (Desktop Home) OR Brand Logo (Mobile Home) OR Path Title (Subpages) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center whitespace-nowrap z-0">
              {isHomePage ? (
                <>
                  {/* Mobile Logo */}
                  <Link
                    to="/"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsTerminalOpen(false);
                    }}
                    className="lg:hidden text-fg-primary text-3xl tracking-wide hover:text-fg-primary transition-colors cursor-target"
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    BK
                  </Link>
                  {/* Desktop Menu Links */}
                  <div className="hidden lg:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="text-fg-secondary text-[10px] lg:text-[11px] tracking-wider hover:text-fg-primary transition-colors cursor-target"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <span className="text-fg-primary text-[11px] sm:text-xs uppercase tracking-widest block font-mono">
                  {getPathLabel(location.pathname)}
                </span>
              )}
            </div>

            {/* Right Column: Terminal Button (Always visible) */}
            <div className="flex items-center gap-2 z-10">
              <button
                onClick={toggleTerminal}
                className={`flex items-center gap-2 cursor-target px-3 py-1.5 rounded-full transition-colors ${isTerminalOpen ? "bg-bg-surface text-primary" : "hover:bg-bg-surface"}`}
              >
                <Terminal size={18} className="text-primary" />
                <span
                  className="hidden sm:inline-block text-fg-primary text-[10px] sm:text-xs uppercase tracking-widest"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  Terminal
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown Panel */}
        <div className="lg:hidden w-full px-2">
          <CardNav
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            items={[
              {
                label: "sys_logs//",
                bgColor: "var(--bg-default)",
                textColor: "var(--fg-primary)",
                links: [
                  { label: "Core Expertise", href: "/expertise" },
                  { label: "Capabilities", href: "/capabilities" },
                  { label: "Experience", href: "/experience" },
                ],
              },
              {
                label: "deployments//",
                bgColor: "var(--bg-paper)",
                textColor: "var(--fg-primary)",
                links: [
                  { label: "Projects Grid", href: "/projects" },
                  { label: "GitHub Repos", href: "https://github.com" },
                ],
              },
              {
                label: "network//",
                bgColor: "var(--bg-surface)",
                textColor: "var(--fg-primary)",
                links: [
                  { label: "Contact Form", href: "/contact" },
                  { label: "LinkedIn", href: "https://linkedin.com" },
                  { label: "Download Resume", href: "/resume.pdf" },
                ],
              },
            ]}
          />
        </div>

        {/* Terminal Takeover UI */}
        <TerminalUI
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />
      </nav>
    </>
  );
};

export default Navbar;
