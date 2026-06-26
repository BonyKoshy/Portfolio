import { useState, useEffect } from "react";
import { BREAKPOINTS } from "./breakpoints";

/**
 * @deprecated Use `useBreakpoint` from `@/shared/lib/useBreakpoint` instead.
 * This hook is kept for backwards compatibility only.
 */

/** Returns a value based on the current viewport width and breakpoint. */
const useResponsiveValue = <T>(
  desktopValue: T,
  mobileValue: T,
  breakpoint = BREAKPOINTS.sm // 768 — phone landscape
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
