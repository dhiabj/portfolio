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
        // System-diagram palette: paper-white canvas, graphite ink, one signal accent
        canvas: '#F6F7F9', // base page background (graph-paper white)
        'canvas-2': '#EEF0F4', // recessed / grouped surface (sub-node fill)
        paper: '#FFFFFF', // raised node surface
        ink: '#14181D', // primary line + text (the drawing ink)
        muted: '#5B6572', // secondary text
        faint: '#636D78', // tertiary text / captions (>=4.5:1 on canvas and paper)
        line: '#D7DBE1', // structural hairline (node borders, dividers)
        'line-soft': '#E6E9ED', // quiet dividers / background grid
        accent: '#3556D9', // the one signal color: live status, primary action, active edge
        'accent-dim': '#DCE3FA', // low-emphasis accent fill (badges, hover backgrounds)
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        label: '0.14em',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.82)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
