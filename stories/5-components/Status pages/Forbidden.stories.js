import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Status pages/Forbidden',
  argTypes: {
    title: { control: 'text', description: '' },
    text: { control: 'text', description: '' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`<AuStatusPage::Forbidden />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {};
