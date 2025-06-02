/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#5C5470',
        yyy : '#F8EDE3' ,
      },
    },
  },
  plugins: [],
}