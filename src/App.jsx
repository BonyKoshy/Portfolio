import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';
import DotGrid from './components/DotGrid/DotGrid';
import Header from './components/Header/Header';
import GradualBlur from './components/GradualBlur/GradualBlur';
import Hero from './components/Hero/Hero'; // Import the new Hero component

function AppContent() {
  const { theme } = useContext(ThemeContext);
  const [dotColors, setDotColors] = useState({ base: '', active: '' });

  useEffect(() => {
    const updateDotColors = () => {
      const base = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
      const active = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      setDotColors({ base, active });
    };
    updateDotColors();
  }, [theme]);

  return (
    <>
      <div className="app-background">
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

      <GradualBlur
        preset="header"
        target="page"
        strength={3}
        height="120px"
        zIndex={999}
      />

      <main className="app-content">
        {/* Replace the old section with the new Hero component */}
        <Hero />

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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;