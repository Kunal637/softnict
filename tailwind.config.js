/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-roboto)', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        accent: {
          cyan: '#00c8ff',
          blue: '#0f3460',
          darkBlue: '#16213e',
          navy: '#0a1929',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #0a1929 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #4B6CB7 0%, #00E0FF 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 224, 255, 0.4)',
        'glow-pink': '0 0 20px rgba(233, 69, 96, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'slide-in': 'slide-in 0.3s ease',
        'fade-in-up': 'fadeInUp 1s ease forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        'slide-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
