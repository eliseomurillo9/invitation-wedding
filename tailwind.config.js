/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#061930',
        white: '#FFF',
        green: "#8D9F8A",
        blue: {
          main: "#0C315F",
          alt: '#0A2546'
        },
        pink: {
          main: '#E79F96',
          clear: '#F6CCC7'
        }
      },
    },
    fontFamily: {
      'candal': ['Candal', 'Montserrat'],
      'nanum': ['"Nanum Pen Script"', 'Montserrat']
    }
  },
  plugins: [],
};
