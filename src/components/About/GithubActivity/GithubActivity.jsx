// src/components/About/GithubActivity/GithubActivity.jsx
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react'; // 1. Import the Github icon
import './GithubActivity.css';

function GithubActivity({ isExpanded, toggleExpand }) {
  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className={`github-card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="github-header" onClick={toggleExpand}>
        <div className="github-title">
          {/* 2. Replace the old <svg> with the new <Github /> component */}
          <Github className="github-logo" size={24} />
          <h3>GitHub Activity</h3>
        </div>
        <motion.div
          className="github-arrow"
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.div>
      </button>

      {isExpanded && (
        <div className="calendar-container">
          <GitHubCalendar
            username="BonyKoshy"
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            theme={theme}
          />
        </div>
      )}
    </div>
  );
}

export default GithubActivity;