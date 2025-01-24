/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx",
  ],
  theme: {
    colors: {
      "twitter-blue": "#1da1f2",
      "blue": "blue",
      "light-blue": "lightblue",
      "sky-blue": "skyblue",
      "black": "black",
      "white": "white",
      "bground":"#f0e7e7",
      "arch":"#1d1b1b",
      "sha":"#1d1b1b4b",
      "red":"red",
      "green":"green",
      "yellow":"yellow",
      "lightred":"#ffcece",
      "lightgreen":"#bdffbd",

    },
    extend: {},
  },
  plugins: [],
}

