/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(118, 176, 241)",
        nameBlue: "#00A6FB",
      },
      animation: {
        spin: "spin 1s",
        reverseSpin: "reverseSpin 1s",
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
      },
    },
  },
  plugins: [],
};
