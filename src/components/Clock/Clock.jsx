import React, { useState, useEffect } from 'react';
import './Clock.css';

// A custom hook to get the current window width
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

function Clock() {
  const [time, setTime] = useState(new Date());
  const width = useWindowWidth();

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const options = { weekday: 'short' };
    const day = new Intl.DateTimeFormat('en-US', options).format(date).toUpperCase();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Use a shorter format on mobile screens
    if (width <= 768) {
      return `${day} | ${hours}:${minutes}`;
    }

    // Use the full format on larger screens
    const dayOfMonth = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${dayOfMonth} · ${year} | ${hours}:${minutes}`;
  };

  return <div className="clock-display">{formatTime(time)}</div>;
}

export default Clock;