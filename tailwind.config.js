/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        accent: 'var(--accent)',
        panel: 'var(--panel-bg)',
        'panel-bg': 'var(--panel-bg)',
        'prelayer-1': 'var(--prelayer-1)',
        'prelayer-2': 'var(--prelayer-2)',
      },
      spacing: {
        '30': '7.5rem',
        '38': '9.5rem',
        '45': '11.25rem',
        '50': '12.5rem',
        '112': '28rem',
        '112.5': '28.125rem',
      },
      zIndex: {
        '60': '60',
        '100': '100',
        '1001': '1001',
      },
    },
  },
  plugins: [],
}
