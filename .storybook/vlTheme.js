import { create } from '@storybook/theming';
import vlLogo from './assets/vl-logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#0E5EB8',
  colorSecondary: '#1EA7FD',

  // Typography
  fontBase: '"flanders-sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: '#0E5EB8',
  barSelectedColor: '#073261',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#A1ABBA',
  inputTextColor: '#212326',
  inputBorderRadius: 2,

  brandTitle: 'Ember Appuniversum – Vlaanderen',
  brandUrl: 'https://appuniversum.github.io/ember-appuniversum/',
  brandImage: vlLogo,
});
