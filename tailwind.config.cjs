/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        poppins: "'Poppins', sans-serif",
        "pt-serif": "'PT Serif', serif",
      },
    },
  },
  plugins: [],
};
