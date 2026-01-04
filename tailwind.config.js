/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-default': 'var(--bg-default)',
        'bg-paper': 'var(--bg-paper)',
        'bg-surface': 'var(--bg-surface)',
        'bg-subtle': 'var(--bg-subtle)',

        // Foregrounds (Text)
        'fg-primary': 'var(--fg-primary)',
        'fg-secondary': 'var(--fg-secondary)',
        'fg-tertiary': 'var(--fg-tertiary)',

        // Borders
        'border-default': 'var(--border-default)',
        'border-subtle': 'var(--border-subtle)',

        // Brand / Action
        primary: {
          DEFAULT: 'var(--primary)',
          fg: 'var(--primary-fg)',
          hover: 'var(--primary-hover)',
        },

        // Utilities
        'action-hover': 'var(--action-hover)',
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
