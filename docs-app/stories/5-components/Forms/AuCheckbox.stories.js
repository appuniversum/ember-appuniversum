import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuCheckbox',
  argTypes: {
    name: { control: 'text', description: 'Groups checkboxes for server side' },
    value: {
      control: 'text',
      description: 'Sets the current value of the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Used to set/get checked state of component',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Used to set indeterminate visual state of component',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the checkbox',
    },
    onChange: {
      action: 'change',
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
    <AuCheckbox
      @name={{this.name}}
      @value={{this.value}}
      @checked={{this.checked}}
      @indeterminate={{this.indeterminate}}
      @disabled={{this.disabled}}
      @onChange={{this.onChange}}
    >
      Ik ga akkoord
    </AuCheckbox>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  name: '',
  value: '',
  checked: false,
  indeterminate: false,
  disabled: false,
};
