/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "impressionist-gold": "#E9C46A",
        "impressionist-orange": "#E76F51",
        "impressionist-peach": "#F4A261",
        "impressionist-cream": "#FDF7E7",
        "impressionist-green": "#76937F",
        "impressionist-teal": "#2A9D8F",
        "background-warm": "#FFFBF2",
        "ink": "#264653",
      },
      fontFamily: {
        "display": ["Montserrat", "sans-serif"],
        "serif": ["Cormorant Garamond", "serif"],
        "heading": ["Playfair Display", "serif"]
      },
      borderRadius: {
        "DEFAULT": "1.5rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
