/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Purple100: "#f3e8ff",
        purple500: "#7C3AED",
        yellow100: "#FDF3E4",
        yellow500: "#FDE047",
        white: "#FFFFFF",
        black: "#141414",
      },
      fontSize: {},
    },
  },
  plugins: [],
};
