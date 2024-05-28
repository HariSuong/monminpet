/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact': "url('../src/assets/images/services/bg-contact.png')",
      },
      colors: {
        'peach': '#F8EDD8'
      },
      placeholderColor: {
        'black': '#000000',
      },

    },

  },
  plugins: [],
}

