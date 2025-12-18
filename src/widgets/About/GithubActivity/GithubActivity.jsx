// src/components/About/GithubActivity/GithubActivity.jsx
import React, { useEffect, useRef, useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, ArrowUpRight } from "lucide-react";
import { ThemeContext } from "@/features/theme/ThemeContext";
import "./GithubActivity.css";

function GithubActivity() {
  const calendarWrapperRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (calendarWrapperRef.current) {
      const el = calendarWrapperRef.current;
      el.scrollLeft = el.scrollWidth;
    }
  }, []);

  const customTheme = {
    light: ["#f0f2f5", "#dbece2", "#a7d5b4", "#6ec085", "#3a9d56"],
    dark: ["#242526", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="github-card">
      <div className="github-header">
        <div className="github-title">
          <Github className="github-logo" size={24} />
          <h3>GitHub Activity</h3>
        </div>
      </div>

      <div className="github-content-wrapper">
        <div ref={calendarWrapperRef} className="calendar-container">
          <GitHubCalendar
            username="BonyKoshy"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            // 1. Pass the full theme object
            theme={customTheme}
            // 2. Explicitly tell the component which theme to use
            colorScheme={theme}
          />
        </div>
        <a
          href="https://github.com/BonyKoshy"
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-link"
        >
          <ArrowUpRight className="profile-link-icon" size={24} />
          <span className="profile-link-text">Visit GitHub Profile</span>
        </a>
      </div>
    </div>
  );
}

export default GithubActivity;
