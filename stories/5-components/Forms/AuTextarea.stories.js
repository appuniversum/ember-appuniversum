import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuTextarea',
  argTypes: {
    id: { control: 'text', description: '' },
    width: {
      control: 'select',
      options: ['default', 'block'],
      description: 'Display the textarea as a block element',
    },
    error: { control: 'boolean', description: 'Add an error state' },
    warning: { control: 'boolean', description: 'Add an warning state' },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the textarea',
    },
    value: {
      control: 'text',
    },
    handleChange: {
      action: 'change',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuTextarea
      @width={{this.width}}
      @error={{this.error}}
      @warning={{this.warning}}
      @disabled={{this.disabled}}
      id={{this.id}}
      value={{this.value}}
      {{on "change" this.handleChange}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  id: '',
  width: '',
  error: false,
  warning: false,
  disabled: false,
};
