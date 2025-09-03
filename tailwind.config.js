/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        gradientReveal: {
          "0%": { backgroundSize: "0% 0%", opacity: "0" },
          "100%": { backgroundSize: "100% 100%", opacity: "1" },
        },
      },
      animation: {
        gradientReveal: "gradientReveal 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
