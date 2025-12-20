// src/app/App.jsx
import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "@/features/theme/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/shared/ui/ContextMenu";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Code,
  Sun,
  Moon,
  Home,
  User,
  Award,
  Lightbulb,
  Mail,
  Link as LinkIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Component Imports
import Squares from "@/shared/ui/Squares/Squares";
import Header from "@/widgets/Header/Header";
import GradualBlur from "@/shared/ui/GradualBlur/GradualBlur";
import Hero from "@/widgets/Hero/Hero";
import About from "@/widgets/About/About";
import CertificatesList from "@/widgets/CertificatesList/CertificatesList";
import Projects from "@/widgets/Projects/Projects";
import Contact from "@/widgets/Contact/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import "@/shared/ui/ContextMenu.css";
import ReloadPrompt from "./ReloadPrompt";

// Error Pages
import Unauthorized from "@/pages/Unauthorized";
import Forbidden from "@/pages/Forbidden";
import NotFound from "@/pages/NotFound";
import RequestTimeout from "@/pages/RequestTimeout";
import TooManyRequests from "@/pages/TooManyRequests";
import InternalServerError from "@/pages/InternalServerError";
import BadGateway from "@/pages/BadGateway";
import ServiceUnavailable from "@/pages/ServiceUnavailable";
import GatewayTimeout from "@/pages/GatewayTimeout";

function AppContent() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [openAccordion, setOpenAccordion] = useState(null);

  const [gridColors, setGridColors] = useState({
    border: "transparent",
    hover: "transparent",
  });

  useEffect(() => {
    console.log(
      "%cHello, curious developer!",
      "color: #4597ff; font-size: 20px; font-weight: bold;"
    );
  }, []);

  useEffect(() => {
    const updateColors = () => {
      setTimeout(() => {
        const computedStyle = getComputedStyle(document.documentElement);
        const accent = computedStyle.getPropertyValue("--accent").trim();

        if (theme === "dark") {
          setGridColors({
            // SUBTLE UPDATE: Lower opacity for the new #020202 background
            border: "rgba(255, 255, 255, 0.05)",
            hover: accent ? `${accent}15` : "rgba(69, 151, 255, 0.1)",
          });
        } else {
          setGridColors({
            border: "rgba(0, 0, 0, 0.06)",
            hover: "rgba(0, 0, 0, 0.04)",
          });
        }
      }, 50);
    };
    updateColors();
  }, [theme]);

  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAccordionToggle = (e, section) => {
    e.preventDefault();
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Header />

        {/* Background Layer: Squares */}
        <div className="fixed inset-0 w-full h-full -z-10 bg-background transition-colors duration-300">
          <Squares
            key={theme}
            speed={0.2} // Slowed down slightly for elegance
            squareSize={50}
            direction="diagonal"
            borderColor={gridColors.border}
            hoverFillColor={gridColors.hover}
          />
        </div>

        <main className="relative z-1">
          <GradualBlur
            preset="header"
            target="page"
            strength={3}
            height="120px"
            zIndex={1}
          />
          <div className="content-wrapper p-8 max-w-1280px mx-auto md:p-6 pointer-events-none">
            <div className="pointer-events-auto">
              <Hero />
              <About />
              <CertificatesList />
              <Projects />
            </div>
          </div>
          <div className="pointer-events-auto">
            <Contact />
          </div>
        </main>
      </ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        {/* Navigation History */}
        <ContextMenuItem onSelect={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4" /> <span>Back</span>
        </ContextMenuItem>
        <ContextMenuItem
          onSelect={() => window.history.forward()}
          disabled={window.history.length <= 1}
        >
          <ArrowRight className="h-4 w-4" /> <span>Forward</span>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => window.location.reload()}>
          <RefreshCw className="h-4 w-4" /> <span>Reload</span>
        </ContextMenuItem>

        <ContextMenuSeparator />

        {/* Theme Accordion */}
        <ContextMenuItem onSelect={(e) => handleAccordionToggle(e, "theme")}>
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
          <span>Theme</span>
          {openAccordion === "theme" ? (
            <ChevronUp className="ml-auto h-4 w-4" />
          ) : (
            <ChevronDown className="ml-auto h-4 w-4" />
          )}
        </ContextMenuItem>
        <AnimatePresence>
          {openAccordion === "theme" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ContextMenuRadioGroup value={theme} className="pl-6">
                <ContextMenuRadioItem
                  value="light"
                  onSelect={() => setTheme("light")}
                >
                  <Sun className="h-4 w-4" /> <span>Light</span>
                </ContextMenuRadioItem>
                <ContextMenuRadioItem
                  value="dark"
                  onSelect={() => setTheme("dark")}
                >
                  <Moon className="h-4 w-4" /> <span>Dark</span>
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sections Accordion */}
        <ContextMenuItem onSelect={(e) => handleAccordionToggle(e, "sections")}>
          <LinkIcon className="h-4 w-4" /> <span>Sections</span>
          {openAccordion === "sections" ? (
            <ChevronUp className="ml-auto h-4 w-4" />
          ) : (
            <ChevronDown className="ml-auto h-4 w-4" />
          )}
        </ContextMenuItem>
        <AnimatePresence>
          {openAccordion === "sections" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pl-6">
                <ContextMenuItem
                  onSelect={() => handleSectionNavigation("home")}
                >
                  <Home className="h-4 w-4" /> <span>Home</span>
                </ContextMenuItem>
                <ContextMenuItem
                  onSelect={() => handleSectionNavigation("about")}
                >
                  <User className="h-4 w-4" /> <span>About</span>
                </ContextMenuItem>
                <ContextMenuItem
                  onSelect={() => handleSectionNavigation("projects")}
                >
                  <Lightbulb className="h-4 w-4" /> <span>Projects</span>
                </ContextMenuItem>
                <ContextMenuItem
                  onSelect={() => handleSectionNavigation("contact")}
                >
                  <Mail className="h-4 w-4" /> <span>Contact</span>
                </ContextMenuItem>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ReloadPrompt />
    </ThemeProvider>
  );
}

export default App;
