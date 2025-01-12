/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#443996', 
        'custom-green': {
          100: '#02231c', // Dark green
          200: '#004d25', // Slightly lighter green
          300: '#11823b', // Medium green
          400: '#48bf53', // Lighter green
          500: '#91f086', // Lightest green
        },
        'custom-black': {
          100: '#414a4c', // Light black
          200: '#3b444b', // Darker black
          300: '#353839', // Darker black
          400: '#232b2b', // Very dark black
          500: '#0e1111', // Deepest black
        },
      coral: '#FF6F61',
      lightBlue: '#6B9AC4',
      purple: '#8E44AD',
      green: '#27AE60',
      yellow: '#F39C12',
      turquoise: '#1ABC9C',
      red: '#E74C3C',
      blue: '#3498DB',
      brightYellow: '#F1C40F',
      darkPurple: '#9B59B6',
      },
    },
  },
  plugins: [],
}
