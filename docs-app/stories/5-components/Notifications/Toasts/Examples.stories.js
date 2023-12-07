import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/Toasts/Examples',
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom'],
      description:
        'Control the position of the toaster. Default is at the top.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuToaster @position={{this.position}} />
    <AuToastDemo />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  position: 'top',
};
