import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuRadio',
  argTypes: {
    label: { control: 'text', description: 'Set label text' },
    name: {
      control: 'text',
      description:
        'Groups radio buttons, to make sure their checked statuses are related',
    },
    identifier: {
      control: 'text',
      description:
        'Makes sure the label is linked to the checkbox and clicking it will only activate the checkbox you clicked.',
    },
    value: {
      control: 'text',
      description:
        'Used to identify which radio button in a group is selected.',
    },
    checked: {
      control: 'boolean',
      description: 'Adds a checked state to the radiobutton',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the radiobutton',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuControlRadio
      @label={{this.label}}
      @name={{this.name}}
      @value={{this.value}}
      @identifier={{this.identifier}}
      checked={{this.checked}}
      @disabled= {{this.disabled}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  label: 'Ja',
  name: 'ja-nee',
  value: 'ja',
  identifier: 'ja',
  checked: false,
  disabled: false,
};
