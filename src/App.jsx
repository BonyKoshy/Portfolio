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
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/ContextMenu'; // Import the new component
import {
    ArrowLeft, ArrowRight, RefreshCw, Code, Sun, Moon, Home, User, Award, Lightbulb, Mail, Link as LinkIcon
} from 'lucide-react'; // Import icons

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


function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dotColors, setDotColors] = useState({ base: '', active: '' });

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

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Header />

        <div className="app-background">
          {dotColors.base && dotColors.active && (
            <DotGrid
              key={theme}
              dotSize={2}
              gap={30}
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
          <GradualBlur
            preset="header"
            target="page"
            strength={3}
            height="120px"
            zIndex={1}
          />
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

        <ContextMenuSub>
          <ContextMenuSubTrigger>
            {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span>Theme</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
             <ContextMenuRadioGroup value={theme} onValueChange={toggleTheme}>
                <ContextMenuRadioItem value="light">
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="dark">
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <LinkIcon className="h-4 w-4" />
            <span>Sections</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
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
          </ContextMenuSubContent>
        </ContextMenuSub>
        
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

