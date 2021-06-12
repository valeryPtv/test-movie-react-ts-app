// @ts-ignore
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content: string) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const tailwindPlugin = require('tailwindcss');
const autoprefixerPlugin = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindPlugin,
    autoprefixerPlugin,
    ...process.env.NODE_ENV === 'production' ? [ purgecss ] : [],
  ],
};
