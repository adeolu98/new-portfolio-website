/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        // => @media (min-width: 350px) { ... }
        'xxs': '235px',
        // => @media (min-width: 235px) { ... }
      },
    },
  },
  plugins: [],
};
