/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chai: {
          50: '#FDF8F3',
          100: '#F9EDE0',
          200: '#F2D7BF',
          300: '#E7BD98',
          400: '#D79E6F',
          500: '#C87E44',
          600: '#B06432',
          700: '#8F4A24',
          800: '#5F3017',
          900: '#3D1E0E',
          950: '#1F0D06',
        },
        terracotta: {
          DEFAULT: '#C85A32',
          light: '#DE734B',
          dark: '#A6421F',
        },
        cardamom: {
          50: '#F0F5F2',
          100: '#DCF0E5',
          500: '#3D7A58',
          700: '#26543B',
          900: '#142E20',
        },
        saffron: {
          DEFAULT: '#F39C12',
          light: '#F8B84E',
          dark: '#D68100',
        },
        kulhad: {
          DEFAULT: '#9E5B32',
          dark: '#241610',
          darker: '#160D09',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Syne', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px) scaleX(1.3) rotate(5deg)', opacity: '0.5' },
          '100%': { transform: 'translateY(-40px) scaleX(1.6) rotate(-5deg)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      animation: {
        'steam-1': 'steam 3s infinite ease-out',
        'steam-2': 'steam 3.5s infinite 1s ease-out',
        'steam-3': 'steam 4s infinite 1.8s ease-out',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
