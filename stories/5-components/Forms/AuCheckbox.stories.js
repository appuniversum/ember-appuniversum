import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuCheckbox',
  argTypes: {
    label: { control: 'text', description: 'Set label text' },
    identifier: {
      control: 'text',
      description:
        'Makes sure the label is linked to the checkbox and clicking it will only activate the checkbox you clicked.',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the checkbox',
    },
    name: { control: 'text', description: 'Groups checkboxes for server side' },
    checked: {
      control: 'boolean',
      description: 'Used to set/get checked state of component',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Used to set indeterminate visual state of component',
    },
    onChange: {
      control: 'text',
      description:
        'Expects a function that gets called when the checkbox state changes. The function receives the checkbox state & event context as parameters.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuControlCheckbox
      @label={{this.label}}
      @identifier={{this.identifier}}
      @disabled={{this.disabled}}
      @name={{this.name}}
      @checked={{this.checked}}
      @indeterminate={{this.indeterminate}}
      @onChange={{this.onChange}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  label: 'Ik ga akkoord',
  identifier: 'akkoord',
  disabled: false,
  name: '',
  checked: false,
  indeterminate: false,
  onChange: '',
};
