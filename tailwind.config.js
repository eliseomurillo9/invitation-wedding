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
          main: '#0C315F',
          alt: '#0A2546',
          light: '#325177'
        },
        pink: {
          main: '#E68C81',
          clear: '#F6CCC7'
        }
      },
      spacing: {
        '82': '22rem',
      }
    },
    fontFamily: {
      'candal': ['Candal', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'nanum': ['"Nanum Pen Script"', 'cursive'],
      'klee': ['"Klee One"', 'cursive']
    },
    letterSpacing: {
      spacer: "0.36rem"
    }
  },
  plugins: [],
};
