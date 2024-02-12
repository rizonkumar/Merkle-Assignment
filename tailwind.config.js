/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "merkle-blue": "#243c5a",
        "merkle-light-blue": "#41547D",
        "merkle-red-tint": "#FF644C",
        "denstu-teal": "#06757E",
        "red-tone": "#861217",
        "purple-tone-1": "#350976",
        "text-merkle-hover": "#41547D",
        "merkle-teal-lint-1": "#439CA3",
        "denstu-red": "#F23A1D",
      },
    },
  },
  plugins: [],
};
