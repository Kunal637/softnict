/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-space-grotesk)', 'sans-serif'],
      'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
      inter: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      colors: {
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.25s ease',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
