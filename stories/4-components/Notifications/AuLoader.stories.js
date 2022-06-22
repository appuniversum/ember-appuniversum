import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuLoader',
  argTypes: {
    padding: {
      control: 'select',
      defaultValue: 'default',
      options: ['default', 'small', 'large'],
      description: 'Set the padding of the loader',
    },
    message: {
      control: 'text',
      defaultValue: 'Aan het laden',
      description: 'Set the hidden loading text',
    },
    disableMessage: {
      control: 'boolean',
      defaultValue: false,
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
};
