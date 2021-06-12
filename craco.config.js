const tailwindPlugin = require('tailwindcss');
const autoprefixerPlugin = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindPlugin,
        autoprefixerPlugin,
      ],
    },
  },
};
