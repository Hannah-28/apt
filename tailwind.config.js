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
          light: '#CAD0F0',
          DEFAULT: '#6572BB',
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
