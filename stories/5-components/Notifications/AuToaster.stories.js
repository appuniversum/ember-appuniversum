import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuToaster',
  argTypes: {

  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuToastDemo />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {

};
