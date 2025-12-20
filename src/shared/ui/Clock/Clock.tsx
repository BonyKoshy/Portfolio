import { useState, useEffect } from "react";

// 1. Typed Hook for Window Width
const useWindowWidth = (): number => {
  // Check window existence for safety (SSR/Build)
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());
  const width = useWindowWidth();

  // Update time every second
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: "short" };
    const day = new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .toUpperCase();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Logic: Mobile (<768px) vs Desktop
    if (width <= 768) {
      return `${day} | ${hours}:${minutes}`;
    }

    const dayOfMonth = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${dayOfMonth} · ${year} | ${hours}:${minutes}`;
  };

  return (
    // Using Tailwind utility classes for font and color
    // We removed the old .clock-display CSS class dependency
    <div className="text-[0.9rem] font-medium tracking-[0.5px] text-text-primary whitespace-nowrap select-none">
      {formatTime(time)}
    </div>
  );
};

export default Clock;
