/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#EAEEEA",
        "color-primary-light":"#e0ffff",
        "color-primary-dark":"#00a3a3",
        "color-secondary":"#ff7d3b",
        "color-tertiary":"#06b6d4",
        "color-gray":"#333",
        "color-white":"#fff",
        "color-blob":"#A427DF"
        
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        md:"50px"

      }
    }

  },
  plugins: [],
}

