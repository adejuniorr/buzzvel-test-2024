/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0F172A",
        white: "#FFFFFF",
        purple: "#581C87",
        yellow: "#FCD34D",
        blue: "#0369A1",
      },
    },
  },
  plugins: [],
};
