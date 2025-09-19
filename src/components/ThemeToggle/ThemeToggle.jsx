import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
      <div className={`sun ${theme === 'dark' ? 'visible' : ''}`}>☀️</div>
      <div className={`moon ${theme === 'light' ? 'visible' : ''}`}>🌙</div>
    </button>
  );
}

export default ThemeToggle;