// src/components/About/TypingSpeed/TypingSpeed.jsx
import React from 'react';
import TextPressure from '../../TextPressure/TextPressure';
import './TypingSpeed.css';

function TypingSpeed({ isExpanded }) {
  // We receive the `isExpanded` state from the parent
  return (
    <div className={`typing-speed-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="typing-speed-content">
        <h3 className="typing-speed-title">Typing Speed</h3>
        <div className="typing-speed-display">
          <div className="typing-speed-value">
            <TextPressure
                text="80" // Your typing speed
                textColor="var(--accent)"
                minFontSize={24}
                flex={false}
                alpha={false}
                stroke={false}
                width={false}
                weight={true}
                italic={true}
            />
          </div>
          <span className="typing-speed-wpm">WPM</span>
        </div>
      </div>
    </div>
  );
}

export default TypingSpeed;