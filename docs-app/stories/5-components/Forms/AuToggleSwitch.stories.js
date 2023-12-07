import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuToggleSwitch',
  argTypes: {
    label: { control: 'text', description: 'Set label text' },
    alignment: {
      control: 'select',
      options: ['', 'left', 'right'],
      description: 'Defines the alignment of the label',
    },
    identifier: {
      control: 'text',
      description:
        'Makes sure the label is linked to the toggle switch and clicking it will only activate the toggle switch you clicked.',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the toggle switch',
    },
    name: {
      control: 'text',
      description: 'Groups toggle switches for server side',
    },
    checked: {
      control: 'boolean',
      description: 'Used to set/get checked state of component',
    },
    onChange: {
      action: 'change',
      description:
        'Expects a function that gets called when the toggle switch state changes. The function receives the toggle switch state & event context as parameters.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuToggleSwitch
      @alignment={{this.alignment}}
      @identifier={{this.identifier}}
      @disabled={{this.disabled}}
      @name={{this.name}}
      @checked={{this.checked}}
      @onChange={{this.onChange}}
    >{{this.label}}</AuToggleSwitch>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  label: 'Toggle this feature',
  alignment: '',
  identifier: 'toggle',
  disabled: false,
  name: '',
  checked: false,
};
