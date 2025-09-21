// src/components/About/GithubActivity/GithubActivity.jsx
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Github } from 'lucide-react';
import './GithubActivity.css';

function GithubActivity() {
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

      <div className="calendar-container">
        {/* FIX: Wrap the calendar in a div to allow for scaling */}
        <div>
          <GitHubCalendar
            username="BonyKoshy"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}

export default GithubActivity;