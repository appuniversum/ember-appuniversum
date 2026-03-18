import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuLoader',
  argTypes: {
    message: {
      control: 'text',
      description: 'Set the loading text',
    },
    inline: {
      control: 'boolean',
      description: 'Use the inline version of the loader',
    },
    hideMessage: {
      control: 'boolean',
      description: 'Hide the loading text',
    },
    centered: {
      control: 'boolean',
      description:
        'Allows you to opt-out of the centered positioning. defaults to `true`',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuLoader
      @inline={{this.inline}}
      @hideMessage={{this.hideMessage}}
      @centered={{this.centered}}
    >{{this.message}}</AuLoader>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  message: 'Aan het laden',
  inline: false,
  hideMessage: false,
  centered: true,
};
