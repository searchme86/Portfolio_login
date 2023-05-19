/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontSize: {
      '16px': '1rem',
      '18px': '1.125rem',
      '20px': '1.25rem',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
};
