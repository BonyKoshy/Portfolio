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

  // --- START Modifications for Date/Time Format ---
  // Get year, month, day, and weekday
  const year = currentDateTime.getFullYear();
  const month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const day = currentDateTime.getDate().toString().padStart(2, '0');
  
  const weekdayOptions = { weekday: 'short' };
  const weekday = currentDateTime.toLocaleString('en-US', weekdayOptions).toUpperCase(); // e.g., "FRI"

  // Assemble the desired format "YYYY.MM.DD FRI"
  const formattedDateTime = `${year}.${month}.${day} ${weekday}`;
  // --- END Modifications for Date/Time Format ---

  return (
    <div className="datetime-display">
      {formattedDateTime}
    </div>
  );
}

export default DateTimeDisplay;