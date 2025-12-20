/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        accent: "var(--accent)",
        "panel-bg": "var(--panel-bg)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      zIndex: {
        60: "60",
        100: "100",
        1001: "1001", // For the menu toggle
      },
    },
  },
  plugins: [],
};
