// src/app/App.tsx
import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "@/features/theme/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  Sun,
  Moon,
  Home,
  User,
  Lightbulb,
  Mail,
  Link as LinkIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SmoothCursor } from "@/shared/ui/magicui/smooth-cursor";
import { NotificationProvider, useNotification } from "@/features/notifications/NotificationContext";
import { AnimatedList } from "@/shared/ui/magicui/animated-list";
import { cn } from "@/shared/lib";

// Component Imports
import { Squares } from "@/shared/ui/Squares";
import { Header } from "@/widgets/Header";
import { GradualBlur } from "@/shared/ui/GradualBlur";
import { Hero } from "@/widgets/Hero";
import { About } from "@/widgets/About";
import { CertificatesList } from "@/widgets/CertificatesList";
import { Projects } from "@/widgets/Projects";
import { Contact } from "@/widgets/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ReloadPrompt from "./ReloadPrompt";

// Error Pages
import Unauthorized from "@/pages/Unauthorized";
import Forbidden from "@/pages/Forbidden";
// import NotFound from "@/pages/NotFound"; // Assuming basic text for now because of error boundaries or keeping existing imports
import NotFound from "@/pages/NotFound";
// Other error pages can be imported as needed or lazy loaded

function AppContent() {
  const { theme, setTheme } = useContext(ThemeContext) as { theme: string; setTheme: (t: string) => void };
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const [gridColors, setGridColors] = useState({
    border: "transparent",
    hover: "transparent",
  });

  const loggedRef = React.useRef(false);

  useEffect(() => {
    if (loggedRef.current) return;
    loggedRef.current = true;
    console.log(
      "%cHello, curious developer! Feel Free to Contact Through LinkedIn",
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
            border: "rgba(255, 255, 255, 0.1)",
            hover: accent ? `${accent}15` : "rgba(69, 151, 255, 0.1)",
          });
        } else {
          setGridColors({
            border: "rgba(0, 0, 0, 0.1)",
            hover: "rgba(0, 0, 0, 0.04)",
          });
        }
      }, 50);
    };
    updateColors();
  }, [theme]);

  const handleSectionNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAccordionToggle = (e: React.SyntheticEvent, section: string) => {
    e.preventDefault();
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Header />

        {/* Background Layer: Squares */}
        <div className="fixed inset-0 w-full h-full -z-10 bg-background transition-colors duration-300 app-background">
          <Squares
            // key={theme} // Optimization: Squares usually handles theme changes via props, but forcing remount is safe if needed.
            speed={0.2} 
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
          <div className="relative z-2 p-8 max-w-7xl mx-auto md:p-6 pointer-events-none content-wrapper">
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
        <ContextMenuItem onSelect={(e: React.SyntheticEvent) => handleAccordionToggle(e, "theme")}>
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
        <ContextMenuItem onSelect={(e: React.SyntheticEvent) => handleAccordionToggle(e, "sections")}>
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

// Notification Renderer Component
function NotificationListRenderer() {
  const { notifications } = useNotification();
  return (
    <AnimatedList>
      {notifications.map((n) => (
        <div
          key={n.id}
          className={cn(
            "pointer-events-auto flex w-[350px] items-center gap-3 rounded-xl p-4 shadow-lg transition-all",
            n.type === "error" ? "bg-red-500 text-white" : "bg-white text-black dark:bg-zinc-900 dark:text-white"
          )}
        >
          {/* Simple Icon based on type */}
          <div className={cn("h-2 w-2 rounded-full", n.type === "error" ? "bg-white" : "bg-blue-500")} />
          <p className="text-sm font-medium">{n.message}</p>
        </div>
      ))}
    </AnimatedList>
  );
}

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Router>
            <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/forbidden" element={<Forbidden />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        <ReloadPrompt />
        <SmoothCursor />
        <NotificationListRenderer />
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
