/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'accent': 'rgb(51,187,206)',
        'secondary': 'rgb(246, 152, 52)',
      }
    },
  },
  plugins: [],
}

