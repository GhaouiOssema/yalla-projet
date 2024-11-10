/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        typingMobile: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "60%",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      width: {
        70: "70%",
        30: "30%",
        80: "80%",
        20: "20%",
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        typingMobile:
          "typingMobile 2s steps(20) infinite alternate, blink .7s infinite",
      },
      colors: {
        customYellowLighter: "#94958E",
        customYellow: "#9C904A",
        customGray: "#F9FAFB",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        custom: "0 4px 9px rgba(252, 211, 77, 1)",
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
};
