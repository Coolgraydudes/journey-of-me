/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim : '#fac121',
        nig : '#0E0E0E'
      },
      fontFamily: {
        BlackPool : ['Blackpool', 'sans-serif;'],
        BebasNeu : ['"Bebas Neue"', 'sans-serif'],
        QuickSand: ['"Quicksand"', 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}