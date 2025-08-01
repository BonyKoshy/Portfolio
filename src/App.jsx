// src/App.jsx
import React from 'react';
import './App.css';
import Squares from './components/Squares/Squares';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Wrap entire app with ThemeProvider */}
      <>
        {/* The Squares component will be our full-page background */}
        <Squares
          speed={0.3}
          squareSize={60}
          direction='diagonal'
          borderColor='#444'
          hoverFillColor='#888'
          className="app-background-squares"
        />

        {/* The Navbar component will be at the top */}
        <Navbar />

        {/* This is your main content wrapper where all sections will go */}
        <div className="app-content-wrapper">
          {/*
            You can start adding your sections here.
            For now, let's put a placeholder to see the background and Navbar.
          */}
          <h1 style={{ color: 'var(--text-color-primary)', marginTop: '100px', fontSize: '3em' }}>
            Welcome, Bony Koshy!
          </h1>
          <p style={{ color: 'var(--text-color-secondary)', marginBottom: '200vh', fontSize: '1.2em' }}>
            Your portfolio is taking shape. Scroll down to see the Navbar effect.
          </p>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;