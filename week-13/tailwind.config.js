/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        grey:{
          200 : "#282828",
          300 : "#333333",
          400 : "#262626",
          500: "#434343",
          800 : "#1A1A1A"
        }
      }
    },
  },
  plugins: [],
}

