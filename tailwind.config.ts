import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Washington Wizards Brand Colors
        wizards: {
          navy: '#002B5C',
          red: '#E31837',
          gray: '#f4f4f5',
        },
      },
      fontFamily: {
        // Google Fonts
        anton: ['var(--font-anton)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        // Custom animations for hover effects
        'card-hover': 'cardHover 0.3s ease-in-out',
      },
      keyframes: {
        cardHover: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

