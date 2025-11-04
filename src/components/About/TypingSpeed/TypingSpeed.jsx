// src/components/About/TypingSpeed/TypingSpeed.jsx
import React from "react";
import { Gauge } from "lucide-react";
import TextPressure from "../../TextPressure/TextPressure";
import "./TypingSpeed.css";

function TypingSpeed() {
  return (
    <div className="typing-speed-card">
      {/* FIX: Add a wrapper div here */}
      <div className="typing-speed-label">
        <Gauge className="typing-speed-icon" size={28} />
        <h3 className="typing-speed-title">Typing Speed</h3>
      </div>

      <div className="typing-speed-display">
        <div className="typing-speed-value">
          <TextPressure
            text="60"
            textColor="var(--accent)"
            minFontSize={14}
            flex={false}
            alpha={false}
            stroke={false}
            width={false}
            weight={false}
            italic={true}
          />
        </div>
        <span className="typing-speed-wpm">WPM</span>
      </div>
    </div>
  );
}

export default TypingSpeed;
