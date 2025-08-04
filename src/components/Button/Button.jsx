// src/components/Button/Button.jsx
import React, { useContext } from 'react';
import GlassSurface from '../GlassSurface/GlassSurface';
import { ThemeContext } from '../../context/ThemeContext';
import './Button.css';

function Button({ children, onClick, className = '', variant = 'primary', iconSrc, iconAlt, ...glassProps }) {
  const { theme } = useContext(ThemeContext);

  // Base glass properties for ALL buttons
  const baseGlassProps = {
    width: 'fit-content',
    height: 'fit-content',
    borderRadius: 999, // Pill-shaped
    blur: 10, // Increased blur for consistency with Navbar
    opacity: 0.8, // Increased overall transparency of the glass
    brightness: 100,
    ...glassProps, // Allow overrides
  };

  // Adjust specific GlassSurface properties per variant for subtle differences
  let finalGlassProps = { ...baseGlassProps };

  if (variant === 'primary') {
    // For primary, make it slightly less transparent and maybe a bit more pronounced
    finalGlassProps.opacity = 0.9; // Slightly less transparent for primary
    finalGlassProps.blur = 12; // A bit more blur for primary
    finalGlassProps.style = {
      ...finalGlassProps.style,
      '--button-glass-bg': 'var(--button-primary-bg)',
      '--button-glass-border': 'var(--button-primary-border)',
    };
  } else if (variant === 'secondary') {
    // For secondary, keep it very transparent/subtle
    finalGlassProps.opacity = 0.7; // Slightly more transparent for secondary
    finalGlassProps.blur = 10;
    finalGlassProps.style = {
      ...finalGlassProps.style,
      '--button-glass-bg': 'var(--button-secondary-bg)',
      '--button-glass-border': 'var(--button-secondary-border)',
    };
  }


  // Apply filter: invert() for black/white line-art PNGs based on theme
  const buttonIconStyle = iconSrc ? {
    filter: theme === 'dark' ? 'invert(1)' : 'none',
  } : {};

  return (
    <GlassSurface {...finalGlassProps} className={`button-glass-surface ${className}`}>
      <button onClick={onClick} className={`button-content button-variant-${variant}`}>
        {iconSrc && <img src={iconSrc} alt={iconAlt || 'Button Icon'} className="button-icon" style={buttonIconStyle} />}
        {children}
      </button>
    </GlassSurface>
  );
}

export default Button;