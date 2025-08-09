// tailwind.config.js
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
      })
    }),
  ],
}
