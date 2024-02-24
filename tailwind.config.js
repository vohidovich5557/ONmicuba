/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPink: "#FCF3F6",
        footer: "#333333",
      },
      container: {
        center: true,
        screens:{
          lg: "1440px",
        }
      }
    },
  },
  plugins: [],
}
