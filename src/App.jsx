import React, { useEffect, useState, useContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header';

// This is the main content component that can access the theme context
function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [dotColors, setDotColors] = useState({ base: '', active: '' });

  useEffect(() => {
    // This function reads the actual color values from the CSS variables
    // after they have been applied to the document. This makes the canvas dots theme-aware.
    const updateDotColors = () => {
      const base = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
      const active = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      setDotColors({ base, active });
    };

    // We call it once on mount and then anytime the theme changes.
    updateDotColors();
  }, [theme]);

  return (
    <>
      <div className="app-background">
        {/* We wait until the colors are loaded from CSS to prevent an initial flicker */}
        {dotColors.base && dotColors.active && (
          <DotGrid
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

      <Header />

      <main className="app-content">
        <section id="home" className="content-section">
          <h2>Home</h2>
        </section>
        <section id="about" className="content-section">
          <h2>About</h2>
        </section>
        <section id="projects" className="content-section">
          <h2>Projects</h2>
        </section>
        <section id="contact" className="content-section">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

// The root App component just provides the theme context to its children.
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

