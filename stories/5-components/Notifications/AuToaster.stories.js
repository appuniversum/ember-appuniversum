import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuToaster',
  argTypes: {
    toasts: { control: 'text', description: '{{this.toaster.toasts}}' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuToaster @toasts={{this.toasts}} />

    {{!-- Demo --}}
    <AuToastDemo />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  toasts: '{{this.toaster.toasts}}',
};
