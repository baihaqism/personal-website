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
        spin: "spin 1s", // Adding a custom animation called "spin"
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
      },
    },
  },
  plugins: [],
};
