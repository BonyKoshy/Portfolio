import React, { useContext } from "react";
import { ThemeContext } from "@/features/theme/ThemeContext";

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context as any;
  const isChecked = theme === "light";

  return (
    <div className="inline-block relative">
      <label
        htmlFor="theme-switch"
        className="group relative grid place-items-center w-[48px] h-[48px] bg-(--panel-bg) rounded-full cursor-pointer shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] transition-colors duration-300 z-10 text-(--text-primary)"
        aria-label="Toggle Theme"
      >
        <input
          type="checkbox"
          className="peer appearance-none hidden"
          id="theme-switch"
          checked={isChecked}
          onChange={toggleTheme}
        />
        
        <svg
          width={24}
          height={24}
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
          className="w-full h-full p-[10px] transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] rotate-40 group-has-[:checked]:rotate-90"
        >
          <mask id="moon-mask">
            <rect x="0" y="0" width="20" height="20" fill="white" />
            <circle
              cx="11"
              cy="3"
              r="8"
              fill="black"
              className="origin-center transition-transform duration-[640ms] ease-[cubic-bezier(0.41,0.64,0.32,1.575)] translate-0 group-has-[:checked]:translate-x-[16px] group-has-[:checked]:-translate-y-[3px]"
            />
          </mask>
          
          <circle
            className="sunMoon origin-center transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] scale-100 group-has-[:checked]:scale-55"
            cx="10"
            cy="10"
            r="8"
            mask="url(#moon-mask)"
          />
          
          <g>
            <circle
              className="sunRay sunRay1 origin-center transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] scale-0 group-has-[:checked]:scale-100"
              cx="18"
              cy="10"
              r="1.5"
            />
            <circle
              className="sunRay sunRay2 origin-center transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] scale-0 group-has-[:checked]:scale-100 delay-[50ms]"
              cx="14"
              cy="16.928"
              r="1.5"
            />
            <circle
              className="sunRay sunRay3 origin-center transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] scale-0 group-has-[:checked]:scale-100 delay-[100ms]"
              cx="6"
              cy="16.928"
              r="1.5"
            />
            <circle
              className="sunRay sunRay4 origin-center transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] scale-0 group-has-[:checked]:scale-100 delay-[170ms]"
              cx="2"
              cy="10"
              r="1.5"
            />
            <circle
              className="sunRay sunRay5 origin-center transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] scale-0 group-has-[:checked]:scale-100 delay-[250ms]"
              cx="6"
              cy="3.1718"
              r="1.5"
            />
            <circle
              className="sunRay sunRay6 origin-center transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)] scale-0 group-has-[:checked]:scale-100 delay-[290ms]"
              cx="14"
              cy="3.1718"
              r="1.5"
            />
          </g>
        </svg>
      </label>
    </div>
  );
};

export default ThemeToggle;
