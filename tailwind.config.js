module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['emerald'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
