module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'light-bg': '#ffffff',
        'dark-bg': '#1f2937',
        'light-text': '#1f2937',
        'dark-text': '#e5e7eb',
        'light-primary': '#2563eb',
        'dark-primary': '#60a5fa',
        'light-secondary': '#6b7280',
        'dark-secondary': '#9ca3af',
        'light-success': '#16a34a',
        'dark-success': '#22c55e',
        'light-error': '#dc2626',
        'dark-error': '#ef4444',
        'light-warning': '#d97706',
        'dark-warning': '#f59e0b',
      },
    },
  },
  plugins: [], // Remove DaisyUI plugin
  darkMode: 'class',
};