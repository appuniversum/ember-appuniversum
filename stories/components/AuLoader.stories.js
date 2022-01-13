import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/AuLoader',
  argTypes: {
    padding: { control: 'select', options: ['', 'default', 'small', 'large'], description:'Set the padding of the loader'},
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
