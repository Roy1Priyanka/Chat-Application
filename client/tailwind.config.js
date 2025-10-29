/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#095acbff",
        'secondary': "#dbdeeeff",
        'light': "#f9faff",
      },
    },
  },
  plugins: [],
}

