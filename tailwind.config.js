/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#312E81',
        },
        secondary: {
          light: '#FFFFFF',
          DEFAULT: '#F97316',
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
};
