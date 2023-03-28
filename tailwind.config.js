/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gunmetalic':' #232F3E',
        'charcoal': '#37475A',
        'apricot': '#FEBD69',
        'amazon-black': '#131A22'
      }
    },
  },
  plugins: [],
} 