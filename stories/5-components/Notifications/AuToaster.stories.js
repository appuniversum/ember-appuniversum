import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuToaster',
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom'],
      description:
        'Control the position of the toaster. Default is at the bottom.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuToaster @position={{this.position}} />

    {{!-- Demo --}}
    <AuToastDemo />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  position: 'bottom',
};
