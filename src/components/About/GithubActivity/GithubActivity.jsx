// src/components/About/GithubActivity/GithubActivity.jsx
import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Github } from 'lucide-react';
import './GithubActivity.css';

function GithubActivity() {
  const calendarWrapperRef = useRef(null);

  // This effect runs once after the component mounts
  useEffect(() => {
    if (calendarWrapperRef.current) {
      const el = calendarWrapperRef.current;
      // Scroll to the far right to show the most recent activity
      el.scrollLeft = el.scrollWidth;
    }
  }, []); // Empty dependency array ensures it runs only once

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

      <div ref={calendarWrapperRef} className="calendar-container">
        <GitHubCalendar
          username="BonyKoshy"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default GithubActivity;