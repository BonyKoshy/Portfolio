// src/hooks/useResponsiveValue.js
import { useState, useEffect } from "react";

const useResponsiveValue = (desktopValue, mobileValue, breakpoint = 768) => {
  const [value, setValue] = useState(
    window.innerWidth > breakpoint ? desktopValue : mobileValue
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= breakpoint) {
        setValue(mobileValue);
      } else {
        setValue(desktopValue);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopValue, mobileValue, breakpoint]);

  return value;
};

export default useResponsiveValue;
