import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Typography/AuHr',
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'large', 'huge'],
      description: 'Define the top and bottom margin',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuHr
      @size={{this.size}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  size: 'default',
};
