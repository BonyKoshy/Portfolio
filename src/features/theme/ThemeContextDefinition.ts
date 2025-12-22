import { createContext, Dispatch, SetStateAction } from "react";

export interface ThemeContextValues {
  theme: string;
  toggleTheme: () => void;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextValues | undefined>(undefined);
