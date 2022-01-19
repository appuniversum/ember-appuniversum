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
  },
  status: {
    statuses: {
      stable: {
        background: '#5F750B',
        color: '#ffffff',
        description: 'This component is stable',
      },
      draft: {
        background: '#CCD1D9',
        color: '#2A2D31',
        description: 'This component is a draft',
      },
      deprecated: {
        background: '#AB1F1F9',
        color: '#ffffff',
        description: 'This component is deprecated',
      }
    },
  },
}
