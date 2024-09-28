/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#184f70', // Color base
        accent: '#f5b971',  // Naranja claro para botones
        lightBlue: '#4fb3c8',  // Azul claro para detalles
        beige: '#f9f5ef',  // Color claro para fondo o detalles
      }
    },
  },
  plugins: [],
}

