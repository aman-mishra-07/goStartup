/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

 
    extend: {
      fontFamily :{
        'sans' : [ 'Poppins', 'sans-serif'],
        'lexend' : ['Lexend', 'sans-serif'],
      },
      borderRadius :{
        '5xl':'4rem',
        'max' : '8rem',
      }
     
    },
  },
  plugins: [],
}

