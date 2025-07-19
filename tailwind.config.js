/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      IMBPlex: ['IBM Plex Mono', 'monospace'],
      BebasNeueRegular: ['BebasNeueRegular', 'sans-serif'],
      TestSohneMono: ['TestSohneMono', 'sans-serif'],
    },
    extend: {
      animation: {
        wiggle: 'wiggle 0.2s linear',
        wiggle2: 'wiggle 0.3s linear',
        wiggle3: 'wiggle 0.4s linear',
        default: '0.5s linear',
        soundWave: 'pulseWave 1s ease-in-out infinite',
      },
      backgroundImage: {
        'noise-bg': "url('/src/assets/Images/noise-img.webp')",
        'dust-bg': "url('/src/assets/Images/Dust.webp')",
        'piano-bg': "url('/src/assets/Images/piano.webp')",
        'story-page-bg': "url('/src/assets/Images/story-page-bg.webp')",
        'blood-bg': "url('/src/assets/Images/BloodSpatter.png')",
      },
      colors: {
        'primary-color': '#fff',
        'secondery-color': '#FF2222',
        'text-color': '#828282',
      },
      keyframes: {
        wiggle: {
          '0%': { color: '#fff' },
          '50%': { color: '#555' },
          '100%': { color: '#fff' },
        },
        pulseWave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(3)' },
        },
      },
    },
  },
  plugins: [],
};
