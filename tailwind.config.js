/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector", // <--- If using Tailwind v3
  // darkMode: 'selector', <--- USE THIS INSTEAD if you just installed Tailwind v4
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
