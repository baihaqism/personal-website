/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      scale: {
        250: "2.50",
      },
      colors: {
        primary: "#F2F2F2",
        accent: "#4ECAC7",
        secondary: "#CCCCCC",
        button: "#4E6AC7",
        footer: "#7F849C",
      },
      animation: {
        spin: "spin 1s",
        reverseSpin: "reverseSpin 1s",
        fadeIn: "fadeIn 0.5s ease",
        fadeInUp: "fadeInUp 1s ease",
        fadeInDown: "fadeInDown 1s ease",
        fadeInRight: "fadeInRight 1s ease",
        fadeInLeft: "fadeInLeft 1s ease",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(-12deg)" },
          "100%": { transform: "rotate(708deg)" },
        },
        reverseSpin: {
          "0%": { transform: "rotate(708deg)" },
          "100%": { transform: "rotate(-12deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
