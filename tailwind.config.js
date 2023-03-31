/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        heading:"#ed3363",
        darkBg:"#263238",
        darkHeading:"#ebebeb",
        darkPink:"#d52e59",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
