/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          950: '#050816',
          900: '#07101F',
          800: '#0B1220',
        },
        card: '#101827',
        accent: {
          DEFAULT: '#22C55E',
          glow: '#34D399',
        },
        muted: '#B7C1D3',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(34,197,94,0.18), transparent 60%)',
        'grid-fade':
          'linear-gradient(to bottom, rgba(5,8,22,0) 0%, rgba(5,8,22,1) 100%)',
        'accent-gradient':
          'linear-gradient(135deg, #22C55E 0%, #34D399 50%, #10B981 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,197,94,0.35)',
        'glow-sm': '0 0 20px rgba(52,211,153,0.25)',
        card: '0 10px 40px -10px rgba(0,0,0,0.6)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blob: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wave: {
          '0%,100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        wave: 'wave 1s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
