// src/components/About/GithubActivity/GithubActivity.jsx
import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Github, ArrowUpRight } from 'lucide-react'; // Import the ArrowUpRight icon
import './GithubActivity.css';

function GithubActivity() {
  const calendarWrapperRef = useRef(null);

  useEffect(() => {
    if (calendarWrapperRef.current) {
      const el = calendarWrapperRef.current;
      el.scrollLeft = el.scrollWidth;
    }
  }, []);

  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
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
            theme={theme}
          />
        </div>

        {/* --- NEW: Visit Profile Button --- */}
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