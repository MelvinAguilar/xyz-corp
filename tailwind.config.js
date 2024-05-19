/** @type {import('tailwindcss').Config} */
export default {
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
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
    },
  },
  plugins: [],
}

