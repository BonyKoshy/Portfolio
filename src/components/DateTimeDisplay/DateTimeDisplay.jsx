// src/components/DateTimeDisplay/DateTimeDisplay.jsx
import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clean up the interval on unmount
    };
  }, []);

  // Format the date and time
  const options = {
    weekday: 'short', // e.g., 'Thu'
    month: 'short',   // e.g., 'Jul'
    day: 'numeric',   // e.g., '31'
    hour: 'numeric',  // e.g., '07'
    minute: 'numeric', // e.g., '26'
    hour12: true      // 12-hour format with AM/PM
  };
  const formattedDateTime = currentDateTime.toLocaleString('en-US', options);

  return (
    <div className="datetime-display">
      {formattedDateTime}
    </div>
  );
}

export default DateTimeDisplay; 