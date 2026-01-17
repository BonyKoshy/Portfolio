import { createContext, useEffect, useState, ReactNode } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

export interface ThemeContextValues {
  theme: Theme;
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextValues | undefined>(
  undefined
);

/** Provides global theme state and toggling functionality (light/dark model). */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Checks localStorage for saved preference or falls back to system settings.
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  useEffect(() => {
    // Updates the HTML class attribute and saves the new theme to localStorage.
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    flushSync(() => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
