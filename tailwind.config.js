/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#061930",
        white: "#FFF",
        green: "#8D9F8A",
        red: {main:"#9C4238", alt: "#410001"},
        blue: {
          main: "#295EA7",
          alt: "#0A2546",
          light: "#325177",
        },
        pink: {
          main: "#FFB4AA",
          clear: "#FFDAD5",
          white: "#FEF1EF",
          3: "#FFF8F7",
          
        },
        dark:{
          main: "#201A19",
          alt: "#2F2828",
          blue: "#A9C7FF"
          
        }
      },
      spacing: {
        82: "22rem",
      },
      columns: {
        '2xs': '9rem',
        '4xs': '15rem'
      },
      height: {
        85: '21rem',
      },
      borderWidth: {
        3: '3px',
      }
    },
    fontFamily: {
      candal: ["Candal", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      nanum: ['"Nanum Pen Script"', "cursive"],
      klee: ['"Klee One"', "cursive"],
    },
    letterSpacing: {
      spacer: "0.36rem",
    },
  },
  plugins: [],
};
