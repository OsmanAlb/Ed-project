/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#f9f9f9',
        accent: '#4C6ED7',
        secondary: '#4F4F4F',
      },
    },
  },
  plugins: [],
}

