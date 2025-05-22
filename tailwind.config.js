module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: ['light', 'dark'],
    },
    darkMode: 'class',
  };