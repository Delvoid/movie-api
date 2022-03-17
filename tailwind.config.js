module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        skeleton: 'bgPos 1.2s linear infinite',
      },
      keyframes: {
        bgPos: {
          '0%': { 'background-position': '50% 0' },
          '100%': { 'background-position': '-150% 0' },
        },
      },
    },
  },
  plugins: [],
}
