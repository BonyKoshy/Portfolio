import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Responsive centered container.
 * Scales horizontal padding across all 7 breakpoint tiers:
 *  < 480  (phone portrait)    → px-4
 *  480+   (xs — phone portrait) → px-4
 *  768+   (sm — phone landscape) → px-6
 *  1024+  (lg — tablet landscape) → px-8
 *  1440+  (xl — laptop/desktop)   → px-10
 *  1600+  (2xl — wide desktop)    → px-12
 *  2560+  (4k)                    → px-16
 *
 * Max-width: 7xl (1280px) up to xl, screen-2xl (1536px) at 2xl, screen-4k at 4k.
 */
const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 xxl:px-12 uhd:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
