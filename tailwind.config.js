/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        average: ['Average', 'serif'],
      },
      colors: {
        light: {
          100: '#F6F6F6',
          200: '#82FFCD',
          300: '#EBFF7B',
          400: '#40E0D0',
          500: '#32A397',
        },
        dark: {
          100: '#565656',
          200: '#2B2B2B',
        },
      },
    },
  },
  plugins: [],
};
