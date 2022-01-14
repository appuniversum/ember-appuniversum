import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuHr',
  argTypes: {
    size: { control: 'select', options: ['default', 'large', 'huge'], description:'Define the top and bottom margin'},
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
  size: 'default'
};
