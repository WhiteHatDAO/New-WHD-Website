// tailwind.config.js
// in this file we can add the customized colors tailwind provides.
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'sm': '-4px -4px 5px 0 #fff, 4px 4px 5px 0 #C9CCDA',
        'xl': '-15px -15px 20px 0 #fff, 15px 15px 20px 0 #C9CCDA',
        'inner': 'inset 7px 7px 7px 0 #C9CCDA, inset -7px -7px 7px 0 #fff',
        'inner-xl': 'inset -15px -15px 20px 0 #fff, inset 15px 15px 20px 0 #C9CCDA'
      },
      padding: {
        border: '1px',
        middle: '30px'
      }
    },
    colors: {
      transparent: "transparent",
      lightgray: "#E6E7EE",
      gray: "#DDDEE8",
      darkgray: "#727272",
      darkblue: "#4D6380",
      white: "#ffffff",
      red: "#A70505",
      green: "#059235",
      blue: "#346DA1",
      pink: "#CC2D8F",
      black: "#000000",
      purple: "#6D29FE",
      yellow: "#EBA10F",
      grey: "#404040",
      darkgrey: "#A0A1AD",
      ligthgrey: "#7C7C7C",
      lightblack: "#151515",
      darkwhite: "#D0D2DF",
      current: "currentColor",
    },
    fontSize: {
      'sz10': '10px',
      'sz12': '12px',
      'sz14': '14px',
      'sz16': '16px',
      'sz18': '18px',
      'sz20': '20px',
      'sz22': '22px',
      'sz24': '24px',
      'sz30': '30px',
      'sz40': '40px',
      'sz60': '60px'
    },
    fontFamily: {
      'pilat': ["Pilat", ...defaultTheme.fontFamily.sans],
      'Manrope': ["Manrope", ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {},
  },
};
