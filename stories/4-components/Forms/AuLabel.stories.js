import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuLabel',
  argTypes: {
    text: { control: 'text', description: '' },
    for: { control: 'text', description: '' },
    inline: { control: 'boolean', description: 'Add an inline stat' },
    required: { control: 'boolean', description: 'Add a required state' },
    requiredLabel: {
      control: 'text',
      description: 'Add the required state label',
    },
    error: { control: 'boolean', description: 'Add an error state' },
    warning: { control: 'boolean', description: 'Add an warning state' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuLabel
      for={{this.for}}
      @inline={{this.inline}}
      @required={{this.required}}
      @requiredLabel={{this.requiredLabel}}
      @error={{this.error}}
      @warning={{this.warning}}
    >
      {{text}}
    </AuLabel>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: 'Label',
  for: '',
  inline: false,
  required: false,
  requiredLabel: '',
  error: false,
  warning: false,
};
