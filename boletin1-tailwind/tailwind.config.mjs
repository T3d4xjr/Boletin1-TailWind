/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',  // Verde personalizado para el Dashboard
        secondary: '#FF9800',  // Naranja personalizado
        background: '#F4F7FC',  // Fondo claro
        dark: '#333333',  // Color oscuro para textos y detalles
      },
    },
  },
  plugins: [],
};