/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cyan: { DEFAULT: '#0EA5E9', dim: '#0284C7', light: '#38BDF8' },
        orange: { DEFAULT: '#F97316' },
        emerald: { DEFAULT: '#10B981', light: '#34D399' },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in': 'slideIn 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}
