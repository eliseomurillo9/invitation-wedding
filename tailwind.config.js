/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#061930',
        white: '#FFF',
        green: "#8D9F8A",
        red: '#9C4238',
        blue: {
          main: '#295EA7',
          alt: '#0A2546',
          light: '#325177'
        },
        pink: {
          main: '#FFB4AA',
          clear: '#FFDAD5',
          alt: '#FFB4AA'
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
