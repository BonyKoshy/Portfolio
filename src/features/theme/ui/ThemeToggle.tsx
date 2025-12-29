import React, { useContext } from "react";
import { ThemeContext, ThemeContextValues } from "../ThemeContext";

const ThemeToggle: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context as ThemeContextValues;
  const isChecked = theme === "light";

  const handleToggle = (x: number, y: number) => {
    // 1. Check if the browser supports View Transitions
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    // 2. Perform the Transition
    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    // 3. Animate the Clip Path (The Ripple)
    transition.ready.then(() => {
      const right = window.innerWidth - x;
      const bottom = window.innerHeight - y;
      const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div className="inline-block relative">
      <label
        htmlFor="theme-switch"
        className="group relative grid place-items-center w-12 h-12 bg-(--panel-bg) rounded-full cursor-pointer shadow-[0_0_20px_2px_rgba(0,0,0,0.05)] transition-colors duration-300 z-10 text-(--text-primary) border border-white/10 hover:border-(--accent)"
        aria-label="Toggle Theme"
      >
        <input
          type="checkbox"
          className="peer appearance-none hidden"
          id="theme-switch"
          checked={isChecked}
          onChange={(e) => {
            const label = e.target.parentElement;
            const rect = label?.getBoundingClientRect();
            const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
            const y = rect
              ? rect.top + rect.height / 2
              : window.innerHeight / 2;

            handleToggle(x, y);
          }}
        />

        {/* Icon SVG */}
        <svg
          width={24}
          height={24}
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="none"
          className="w-full h-full p-2.5 transition-transform duration-400 ease-out rotate-40 group-has-checked:rotate-90"
        >
          <mask id="moon-mask">
            <rect x="0" y="0" width="20" height="20" fill="white" />
            <circle
              cx="11"
              cy="3"
              r="8"
              fill="black"
              className="origin-center transition-transform duration-640 ease-[cubic-bezier(0.41,0.64,0.32,1.575)] translate-0 group-has-checked:translate-x-4 group-has-checked:-translate-y-0.75"
            />
          </mask>
          <circle
            className="sunMoon origin-center transition-transform duration-400 ease-out scale-100 group-has-checked:scale-55"
            cx="10"
            cy="10"
            r="8"
            mask="url(#moon-mask)"
          />
          <g>
            <circle
              className="sunRay sunRay1 origin-center transition-transform duration-400 ease-out scale-0 group-has-checked:scale-100"
              cx="18"
              cy="10"
              r="1.5"
            />
            <circle
              className="sunRay sunRay2 origin-center transition-transform duration-400 ease-out scale-0 group-has-checked:scale-100 delay-50"
              cx="14"
              cy="16.928"
              r="1.5"
            />
            <circle
              className="sunRay sunRay3 origin-center transition-transform duration-400 ease-out scale-0 group-has-checked:scale-100 delay-100"
              cx="6"
              cy="16.928"
              r="1.5"
            />
            <circle
              className="sunRay sunRay4 origin-center transition-transform duration-400 ease-out scale-0 group-has-checked:scale-100 delay-170"
              cx="2"
              cy="10"
              r="1.5"
            />
            <circle
              className="sunRay sunRay5 origin-center transition-transform duration-400 ease-out scale-0 group-has-checked:scale-100 delay-250"
              cx="6"
              cy="3.1718"
              r="1.5"
            />
            <circle
              className="sunRay sunRay6 origin-center transition-transform duration-400 ease-out scale-0 group-has-checked:scale-100 delay-290"
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
