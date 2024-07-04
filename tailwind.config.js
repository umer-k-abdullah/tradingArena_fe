/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeGreen: '#01E375',
        themeBlack: '#010101',
      },
    },
  },
  plugins: [],
};
