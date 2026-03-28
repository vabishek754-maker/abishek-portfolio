/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#020617",
        primary: "#3B82F6",
        accent: "#22D3EE",
        glass: "rgba(255, 255, 255, 0.03)",
      },
      animation: {
        'glow': 'glow 8s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}