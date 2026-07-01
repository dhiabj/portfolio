/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Instrument / console palette — warm-cool signal system
        ink: '#0E1116', // base background (near-black, slight cool)
        panel: '#151A21', // raised panel
        'panel-2': '#1B222B', // card / input surface
        line: '#26303B', // hairline borders
        'line-soft': '#1E2732', // faint grid / dividers
        text: '#E6EAEF', // primary text
        muted: '#8A97A6', // secondary text
        faint: '#78848F', // tertiary / captions (AA on ink)
        amber: '#E8A13A', // primary signal — active / building / CTA
        'amber-dim': '#8A6425',
        teal: '#3AA6A0', // secondary signal — healthy / live / links
        'teal-dim': '#245F5B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.85)' },
        },
        feed: {
          '0%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.3)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-x': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'draw-x': 'draw-x 0.7s ease-out both',
        feed: 'feed 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
