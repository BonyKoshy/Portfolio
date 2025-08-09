// src/components/DarkModeSwitch/DarkModeSwitch.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './DarkModeSwitch.css';

function DarkModeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={!isDark}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default DarkModeSwitch;