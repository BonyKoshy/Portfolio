// src/components/DarkModeSwitch/DarkModeSwitch.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // We'll create this next
import './DarkModeSwitch.css';

function DarkModeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark-mode-switch-container" onClick={toggleTheme}>
      <div className={`dark-mode-switch-toggle ${theme === 'dark' ? 'dark-mode-switch-toggle--dark' : ''}`}>
        <span className="dark-mode-switch-icon">
          {theme === 'dark' ? '' : ''} {/* Sun and Moon emojis */}
        </span>
      </div>
      <span className="dark-mode-switch-label">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </div>
  );
}

export default DarkModeSwitch;