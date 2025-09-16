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
        fadeShine: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        arrowMove: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        gradientReveal: "gradientReveal 2s ease-out forwards",
        fadeShine: 'fadeShine 3s ease-in-out infinite',
        glow: 'glowPulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite', 
        arrowMove: 'arrowMove 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
