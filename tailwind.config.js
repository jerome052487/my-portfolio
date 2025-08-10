// tailwind.config.js
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-glow': '#a855f7', // Tailwind's purple-500 by default
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'gradient-move': 'gradient-move 6s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.glow-green-hover': {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
          },
        },
        '.glow-purple': {
          boxShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7',
        },
        '.glow-purple-hover': {
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7',
          },
        },
      })
    }),
  ],
}
