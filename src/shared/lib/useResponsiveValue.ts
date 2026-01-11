import { useState, useEffect } from "react";

const useResponsiveValue = <T>(
  desktopValue: T,
  mobileValue: T,
  breakpoint = 768
): T => {
  const [value, setValue] = useState<T>(
    typeof window !== "undefined" && window.innerWidth > breakpoint
      ? desktopValue
      : mobileValue
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
