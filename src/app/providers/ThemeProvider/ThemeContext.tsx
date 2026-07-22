import { createContext, useEffect, useState, ReactNode } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

export interface ThemeContextValues {
  theme: Theme;
  toggleTheme: (forceTheme?: Theme) => void;
}

 
export const ThemeContext = createContext<ThemeContextValues | undefined>(
  undefined
);

/** Provides global theme state (instant light/dark switch). */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (forceTheme?: Theme) => {
    const nextTheme = forceTheme || (theme === "light" ? "dark" : "light");
    if (nextTheme === theme) return;

    flushSync(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
