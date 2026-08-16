/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090a',
          900: '#0c0d0f',
          800: '#131417',
          700: '#1a1c20',
          600: '#23262b',
          500: '#2e3137',
          400: '#454a52',
          300: '#6b7280',
        },
        bone: {
          50: '#f7f6f3',
          100: '#f0eee9',
          200: '#e2dfd8',
          300: '#cac6bc',
          400: '#a8a399',
          500: '#8a857b',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd3',
          200: '#ffd9a5',
          300: '#ffbd6b',
          400: '#ff9d35',
          500: '#f9800f',
          600: '#dd6206',
          700: '#b74907',
          800: '#92390e',
          900: '#76300f',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest-2': '-0.04em',
        'wide-2': '0.25em',
        'wide-3': '0.4em',
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
