/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2F2F2",
        accent: "#4ECAC7",
        secondary: "#CCCCCC",
        button: "#4E6AC7",
        footer: "#7F849C"
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
