/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "IMBPlex": ['IBM Plex Mono', 'monospace'],
      "Bebas": ["Bebas Neue", 'sans-serif'],
    },
    
    extend: {
      animation: {
        wiggle: 'wiggle 0.2s linear',
        wiggle2: 'wiggle 0.3s linear',
        wiggle3: 'wiggle 0.4s linear',
        default: '0.5s linear',
        soundWave: 'pulseWave 1s ease-in-out infinite'
      },
      
      backgroundImage: {
        'home-bg': "url('/src/assets/Images/bg.png')",
        'noise-bg': "url('/src/assets/Images/noise-img.png')"
      },
      
      colors: {
        'primary-color': '#fff',
        'secondery-color': '#970218',
      },
    },

    keyframes: {
      wiggle: {
        '0%': {color: '#fff'},
        '50%': {color: '#555'},
        '100%': {color: '#fff'}
      },
      pulseWave: {
        '0%, 100%': { transform: 'scaleY(1)' },
        '50%': { transform: 'scaleY(3)' }
      }
    },
  },
  plugins: [
    
  ],
}

