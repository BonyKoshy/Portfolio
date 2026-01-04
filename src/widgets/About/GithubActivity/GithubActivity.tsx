import React, { useLayoutEffect, useRef, useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, ArrowUpRight } from "lucide-react";
import { ThemeContext } from "@/app/providers/ThemeProvider/ThemeContext";


interface GithubActivityProps {
  className?: string;
}

const GithubActivity: React.FC<GithubActivityProps> = ({ className }) => {
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const context = useContext(ThemeContext) as { theme: string } | null;
  const theme = context?.theme || "light";

  useLayoutEffect(() => {
    if (calendarWrapperRef.current) {
      const el = calendarWrapperRef.current;
      el.scrollLeft = el.scrollWidth;
    }
  }, []);

  // Use "light" and "dark" scheme keys as expected by react-github-calendar v4
  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"], // Standard GitHub high contrast
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"], // Standard GitHub dark
  };


  return (
    <div className={`h-full w-full flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 text-fg-primary w-full justify-start pb-[1.2rem]">
        <div className="flex items-center gap-3">
          <Github className="text-fg-primary" size={24} />

          <h3 className="m-0 text-base font-semibold">GitHub Activity</h3>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-1 gap-6 overflow-hidden max-xl:flex-col">
        {/* Calendar Container */}
        <div 
          ref={calendarWrapperRef} 
          className="text-fg-secondary overflow-x-auto grow pb-3 no-scrollbar"

        >
           <GitHubCalendar
              username="BonyKoshy"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              theme={customTheme}
              colorScheme={theme as "light" | "dark"}
              hideColorLegend={false} 
              hideTotalCount={false}
              style={{ fontFamily: '"Poppins", sans-serif' }}
            />
        </div>

        {/* Visit Profile Button */}
        <a
          href="https://github.com/BonyKoshy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-row justify-center items-center gap-2 shrink-0 px-5 py-3 bg-bg-subtle text-fg-secondary rounded-xl no-underline font-semibold transition-all duration-300 mb-3 hover:bg-primary hover:text-bg-default group min-w-70 max-xl:w-full max-xl:h-auto max-xl:rounded-full max-xl:px-4 max-xl:py-3"

        >
          <ArrowUpRight className="mb-0 max-xl:mb-0" size={24} />
          <span>Visit GitHub Profile</span>
        </a>
      </div>
    </div>
  );
};

export default GithubActivity;


