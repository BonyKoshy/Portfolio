// src/app/App.tsx
import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "@/features/theme/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// SmoothCursor import removed
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
// Error Pages imports removed
// import NotFound from "@/pages/NotFound"; // Assuming basic text for now because of error boundaries or keeping existing imports
import NotFound from "@/pages/NotFound";
// Other error pages can be imported as needed or lazy loaded

function AppContent() {
  const { theme } = useContext(ThemeContext) as { theme: string };


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



  return (
    <>
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
    </>


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

            <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        <ReloadPrompt />

        <NotificationListRenderer />
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
