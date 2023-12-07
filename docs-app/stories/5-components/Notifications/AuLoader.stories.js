import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuLoader',
  argTypes: {
    padding: {
      control: 'select',
      options: ['default', 'small', 'large'],
      description: 'Set the padding of the loader',
    },
    message: {
      control: 'text',
      description: 'Set the hidden loading text',
    },
    disableMessage: {
      control: 'boolean',
      description: 'Remove the loading text',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuLoader @padding={{this.padding}} @message={{this.message}} @disableMessage={{this.disableMessage}} />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  padding: 'default',
  message: 'Aan het laden',
  disableMessage: false,
};
