import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const options = { weekday: 'short' };
    const day = new Intl.DateTimeFormat('en-US', options).format(date).toUpperCase();
    const dayOfMonth = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${dayOfMonth} · ${year} | ${hours}:${minutes}`;
  };

  return <div className="clock-display">{formatTime(time)}</div>;
}

export default Clock;