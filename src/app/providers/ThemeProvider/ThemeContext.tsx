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

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Check Local Storage first (Manual override)
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;

    // 2. Fallback to System Preference
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  useEffect(() => {
    // 3. Apply the class to the HTML tag
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);

    // 4. Save to Local Storage
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
