// src/App.jsx
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header';
import GradualBlur from './components/GradualBlur/GradualBlur';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import SectionTitle from './components/SectionTitle/SectionTitle';

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [dotColors, setDotColors] = useState({ base: '', active: '' });

  useEffect(() => {
    const updateDotColors = () => {
      // Small delay to ensure CSS variables have been updated by the browser
      setTimeout(() => {
        const base = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
        const active = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        setDotColors({ base, active });
      }, 100);
    };
    updateDotColors();
  }, [theme]); // This effect now correctly re-runs on theme change

  return (
    <>
      <div className="app-background">
        {/* FIX: Add the `key={theme}` prop to force remount on theme change */}
        {dotColors.base && dotColors.active && (
          <DotGrid
            key={theme} // This is the fix!
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

      <GradualBlur
        preset="header"
        target="page"
        strength={3}
        height="120px"
        zIndex={999}
      />

      <main className="app-content">
        <Hero />
        
        {/* FIX: Remove the old, duplicate #about section */}
        <About /> 

        <section id="projects" className="content-section">
          <SectionTitle title="Projects" />
        </section>
        <section id="contact" className="content-section">
          <SectionTitle title="Contact" />
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;