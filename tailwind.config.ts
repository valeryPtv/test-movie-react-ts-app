// @ts-ignore
const defaultTheme = require('tailwindcss/defaultTheme');

const productionOptions = process.env.NODE_ENV === 'production' ? {
  purge: [
    './view/**/*.{js, jsx, ts, tsx}',
    './view/**/**/*.{js, jsx, ts, tsx}',
    './view/**/**/**/*.{js, jsx, ts, tsx}',
    './view/components/**/*.{js, jsx, ts, tsx}',
    './view/container/**/*.{js, jsx, ts, tsx}',
  ],
} : { purge: []};

module.exports = {
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      primary:  '#ffffff',
      dark:     '#0e0e10',
      darkFont: 'rgb(239, 239, 241)',
    },
  },
  variants: {},
  plugins:  [],
  ...productionOptions,
};
