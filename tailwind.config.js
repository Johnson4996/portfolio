/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': 'rgb(51,187,206)',
        'secondary': 'rgb(246, 152, 52)',
        'github': 'rgb(86,199,113)',
        'github-light': 'rgb(150,220,166)',
        'demo': 'rgb(91,200,215)',
        'demo-light': 'rgb(173,227,235)'
      }
    },
  },
  plugins: [],
}

