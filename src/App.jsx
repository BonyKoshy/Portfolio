// src/App.jsx
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/ContextMenu';
import {
    ArrowLeft, ArrowRight, RefreshCw, Code, Sun, Moon, Home, User, Award, Lightbulb, Mail, Link as LinkIcon, ChevronDown, ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Component Imports
import DotGrid from '@/components/DotGrid/DotGrid';
import Header from '@/components/Header/Header';
import GradualBlur from '@/components/GradualBlur/GradualBlur';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import CertificatesList from '@/components/CertificatesList/CertificatesList';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact.jsx';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import '@/components/ui/ContextMenu.css';
import ReloadPrompt from './ReloadPrompt';

// Error Pages
import Unauthorized from '@/pages/Unauthorized';
import Forbidden from '@/pages/Forbidden';
import NotFound from '@/pages/NotFound';
import RequestTimeout from '@/pages/RequestTimeout';
import TooManyRequests from '@/pages/TooManyRequests';
import InternalServerError from '@/pages/InternalServerError';
import BadGateway from '@/pages/BadGateway';
import ServiceUnavailable from '@/pages/ServiceUnavailable';
import GatewayTimeout from '@/pages/GatewayTimeout';

function AppContent() {
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);
  const [dotColors, setDotColors] = useState({ base: '', active: '' });
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    console.log("%cHello, curious developer!", "color: #4597ff; font-size: 20px; font-weight: bold;");
    console.log("%cThanks for checking out my portfolio's code. Feel free to connect with me on LinkedIn!", "color: #4597ff; font-size: 18px; font-weight: italics;");
  }, []);

  useEffect(() => {
    const updateDotColors = () => {
      setTimeout(() => {
        const base = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
        const active = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        setDotColors({ base, active });
      }, 100);
    };
    updateDotColors();
  }, [theme]);

  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  // Handler that prevents the menu from closing
  const handleAccordionToggle = (e, section) => {
    e.preventDefault();
    toggleAccordion(section);
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Header />
        <div className="app-background">
          {dotColors.base && dotColors.active && (
            <DotGrid
              key={theme}
              dotSize={3}
              gap={90}
              baseColor={dotColors.base}
              activeColor={dotColors.active}
              proximity={120}
              shockRadius={200}
              shockStrength={0.3}
              resistance={800}
              returnDuration={0.7}
            />
          )}
        </div>
        <main>
          <GradualBlur preset="header" target="page" strength={3} height="120px" zIndex={1} />
          <div className="content-wrapper">
              <Hero />
              <About />
              <CertificatesList />
              <Projects />
          </div>
          <Contact />
        </main>
      </ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        {/* These items will close the menu on click */}
        <ContextMenuItem onSelect={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => window.history.forward()} disabled={!window.history.length > 1}>
          <ArrowRight className="h-4 w-4" />
          <span>Forward</span>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => window.location.reload()}>
          <RefreshCw className="h-4 w-4" />
          <span>Reload</span>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => alert("Developer Tools can be opened with F12 or Ctrl+Shift+I")}>
            <Code className="h-4 w-4" />
            <span>Developer Tools</span>
        </ContextMenuItem>

        <ContextMenuSeparator />

        {/* This item will NOT close the menu on click */}
        <ContextMenuItem onSelect={(e) => handleAccordionToggle(e, 'theme')}>
            {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span>Theme</span>
            {openAccordion === 'theme' ? <ChevronUp className="h-4 w-4 ml-auto" /> : <ChevronDown className="h-4 w-4 ml-auto" />}
        </ContextMenuItem>
        <AnimatePresence>
            {openAccordion === 'theme' && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="accordion-content"
                >
                    <ContextMenuRadioGroup value={theme} className="pl-6">
                        {/* These items WILL close the menu on click */}
                        <ContextMenuRadioItem value="light" onSelect={() => setTheme('light')}>
                            <Sun className="h-4 w-4" />
                            <span>Light</span>
                        </ContextMenuRadioItem>
                        <ContextMenuRadioItem value="dark" onSelect={() => setTheme('dark')}>
                            <Moon className="h-4 w-4" />
                            <span>Dark</span>
                        </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </motion.div>
            )}
        </AnimatePresence>

        {/* This item will NOT close the menu on click */}
        <ContextMenuItem onSelect={(e) => handleAccordionToggle(e, 'sections')}>
            <LinkIcon className="h-4 w-4" />
            <span>Sections</span>
            {openAccordion === 'sections' ? <ChevronUp className="h-4 w-4 ml-auto" /> : <ChevronDown className="h-4 w-4 ml-auto" />}
        </ContextMenuItem>
        <AnimatePresence>
            {openAccordion === 'sections' && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="accordion-content"
                >
                    <div className="pl-6">
                        {/* These items WILL close the menu on click */}
                        <ContextMenuItem onSelect={() => handleSectionNavigation('home')}>
                            <Home className="h-4 w-4" />
                            <span>Home</span>
                        </ContextMenuItem>
                        <ContextMenuItem onSelect={() => handleSectionNavigation('about')}>
                            <User className="h-4 w-4" />
                            <span>About</span>
                        </ContextMenuItem>
                        <ContextMenuItem onSelect={() => handleSectionNavigation('certificates')}>
                            <Award className="h-4 w-4" />
                            <span>Certificates</span>
                        </ContextMenuItem>
                        <ContextMenuItem onSelect={() => handleSectionNavigation('projects')}>
                            <Lightbulb className="h-4 w-4" />
                            <span>Projects</span>
                        </ContextMenuItem>
                        <ContextMenuItem onSelect={() => handleSectionNavigation('contact')}>
                            <Mail className="h-4 w-4" />
                            <span>Contact</span>
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
          {/* Core routes */}
          <Route path="/" element={<AppContent />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Error routes */}
          <Route path="/401" element={<Unauthorized />} />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/408" element={<RequestTimeout />} />
          <Route path="/429" element={<TooManyRequests />} />
          <Route path="/500" element={<InternalServerError />} />
          <Route path="/502" element={<BadGateway />} />
          <Route path="/503" element={<ServiceUnavailable />} />
          <Route path="/504" element={<GatewayTimeout />} />

          {/* Catch-all route (redirect unknown paths to 404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ReloadPrompt />
    </ThemeProvider>
  );
}

export default App;