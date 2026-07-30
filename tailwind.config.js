/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './renderer.js'],
  theme: {
    extend: {
      colors: {
        bg: '#05070b',
        surface: '#0c131d',
        edge: '#223247',
        edge2: '#2a3a55',
        txt: '#ffffff',
        txt2: '#9fa9b9',
        accent: '#c89b3c',
        accenthi: '#e3b341',
        ok: '#34d399',
        danger: '#d94c4c',
        closed: '#6a6a8a',
      },
    },
  },
  corePlugins: { preflight: true },
  plugins: [],
};
