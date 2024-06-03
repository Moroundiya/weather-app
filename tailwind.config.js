/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'weather-bg': "url('/public/weather-bg.svg')",
        'stat-bg': "url('/public/stat-bg.svg')"
      },
      fontFamily: {
        madimi: ["Madimi One", "sans-serif"],
        shan: ["Ma Shan Zheng", "cursive"],
        lecker: ["Leckerli One", "cursive"],
        paci: ["Pacifico", "cursive"],
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

