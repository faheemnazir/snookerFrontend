/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4fbf78",   // snooker green
        accent: "#C62828",    // red
      },
 fontFamily: {
  heading: ['Orbitron', 'sans-serif'],
  body: ['Rajdhani', 'sans-serif'],
},
    },
  },
  plugins: [],
};

