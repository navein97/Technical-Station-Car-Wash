/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Tajawal', 'sans-serif'],
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.08)",
        glassBorder: "rgba(255, 255, 255, 0.15)",
        brandRed: "#E31E24", 
        brandBlue: "#0A84FF",
      }
    },
  },
  plugins: [],
}
