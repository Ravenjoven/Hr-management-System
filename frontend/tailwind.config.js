/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
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
        'm': '380px',
        'md': '768px',
      },
      colors: {
        'custom-text-gray':'#7B7777',
        'custom-bg-gray' : '#F1EEEE',
        'custom-text-black' : '#525050',
        'custom-text-orange' : '#F89939',
        'custom-bg-black' : '#9B9B9B',
        'custom-bg-orange': '#F79A38',
        'custom-bg-smooth': '#EAECF1',
        'custom-text-blue': '#3727F2',
        'custom-text-red' : '#F61010',
        'custom-text-green' : '#4ECB71',
        //
      
        },
        
      
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}