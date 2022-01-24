import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuLoader',
  argTypes: {
    padding: {
      control: 'select',
      options: ['', 'default', 'small', 'large'],
      description: 'Set the padding of the loader',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuLoader @padding={{this.padding}} />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  padding: 'default',
};
