// tailwind.config.js
// in this file we can add the customized colors tailwind provides.
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
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
      },
      lineHeight: {
        'ht16.39': '16.39px',
        'ht18.49': '18.49px',
        'ht19.12': '19.12px',
        'ht20': '20px',
        'ht21.86': '21.86px',
        'ht24.66': '24.66px',
        'ht25': '25px',
        'ht25.7': '25.7px',
        'ht27.06': '27.06px',
        'ht27.62': '27.62px',
        'ht28.27': '28.27px',
        'ht30': '30px',
        'ht36': '36px',
      },
      zIndex: {
        '2': '2',
        '3': '3',
        '4': '4',
      }
    },
    colors: {
      transparent: "transparent",
      lightgray: "#E6E7EE",
      gray: "#DDDEE8",
      daisy: "rgba(71, 28, 135, 1)",
      darkgray: "#727272",
      darkblue: "#4D6380",
      darkblue1: "rgb(22, 65, 124)",
      darkpurple: "#595F8C",
      white: "#ffffff",
      red: "#A70505",
      lightred: "rgba(179, 15, 61, 1)",
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
      critical: "#A12E2E",
      major: "#E28A59",
      medium: "#E1AA4C",
      minor: "#A9B3BD",
      magenta: "rgba(173, 50, 122, 1)",
      informational: "#4D6381",
      pure_yellow: "#FFFC00",
      pure_purple: "#9F42CC",
      pure_green: "#0CA85D",
      pure_blue: "#2B87E3",
      pure_red: "#FE0000",
      pure_cyan: "#00FBFF",
      pure_blue1: "#1400FF",
      pure_orange: "#FF7500",
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
      'sz28': '28px',
      'sz30': '30px',
      'sz40': '40px',
      'sz48': '48px',
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
