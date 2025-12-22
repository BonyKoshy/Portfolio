import { clsx, type ClassValue } from "clsx";

// Helper function to combine class names, especially for conditional classes.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
