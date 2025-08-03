// src/App.jsx
import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import HeroSection from './Sections/HeroSection/HeroSection'; // Ensure this import is here

function App() {
  return (
    <ThemeProvider>
      <>
        <Squares
          speed={0.3}
          squareSize={70}
          direction='diagonal'
          borderColor='#444'
          hoverFillColor='#fff'
          className="app-background-squares"
        />

        <Navbar />

        {/* This is your main content wrapper where all sections will go */}
        <div className="app-content-wrapper">
          <HeroSection /> {/* Render the Hero Section here */}

          {/* You can remove any remaining placeholder paragraphs here */}
          <p style={{ color: 'var(--text-color-secondary)', marginBottom: '50vh', fontSize: '1.2em' }}>
            {/* Temporary content to allow scrolling, adjust/remove as needed */}
            Scroll down to see more content once sections are added.
          </p>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;