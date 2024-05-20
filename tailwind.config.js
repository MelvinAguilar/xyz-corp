/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem",
      },
      fontFamily: {
        Inter: "Inter",
      },
      colors: {
        'primary': '#000319',
        'secondary': 'rgb(8 11 39)',
        'secondary-hover': 'rgb(12 16 47)',
      },
    },
  },
  plugins: [],
}

