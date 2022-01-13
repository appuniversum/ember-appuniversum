import vlTheme from './vlTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'light',
        value: '#F4F5F6',
      },
      {
        name: 'dark',
        value: '#212326',
      },
    ],
  },
  docs: {
    theme: vlTheme,
  }
}
