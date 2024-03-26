/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#f9fafb",
        "text-secondary": "#cbd5e1",
      },
    },
  },
  plugins: [],
};
