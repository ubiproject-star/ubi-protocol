/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base.org / Coinbase Inspired Palette
        // Primary Brand
        ubBlue: '#0052FF', // The iconic bright blue
        ubDarkBlue: '#001F66', // Deep blue for gradients

        // Neutral Backgrounds
        ubWhite: '#FFFFFF',
        ubOffWhite: '#F5F8FF', // Very subtle cool tint for section separation

        // Typography - High Contrast
        ubBlack: '#050A19', // Almost black, for primary headings
        ubGray: '#334155', // Slate-700, specific for body text (high readability)
        ubLightGray: '#64748B', // Slate-500, for secondary labels (never for main text)

        // UI Elements
        ubBorder: '#E2E8F0', // Slate-200, crisp borders
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'vibrate-glow': 'vibrate 0.3s linear infinite, lightBluePulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px #0052FF' },
          '50%': { boxShadow: '0 0 20px rgba(0, 82, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        vibrate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        lightBluePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(147, 197, 253, 0.7)' }, // blue-300
          '70%': { boxShadow: '0 0 0 10px rgba(147, 197, 253, 0)' },
        }
      }
    },
  },
  plugins: [],
}
