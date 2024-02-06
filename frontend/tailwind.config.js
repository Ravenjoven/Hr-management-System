/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Times New Roman", "sans-serif"],
        "poppins": ['Poppins', 'sans-serif'],
        "montserrat": ['Montserrat', 'serif'],
        
      },
      screens:{
        'xs': '475px',
        'md': '768px',
      },
      colors: {
        'custom-text-gray':'#7B7777',
        'custom-bg-gray' : '#F1EEEE',
        'custom-text-black': '#525050',
      }
    },
  },
  plugins: [
  ]
}