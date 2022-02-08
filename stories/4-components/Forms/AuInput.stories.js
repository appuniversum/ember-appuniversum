import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Forms/AuInput',
  argTypes: {
    id: { control: 'text', description: '' },
    error: { control: 'boolean', description: 'Add an error state' },
    warning: { control: 'boolean', description: 'Add an warning state' },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the input',
    },
    width: {
      control: 'select',
      options: ['default', 'block'],
      description: 'Display the input as a block element',
    },
    icon: {
      control: 'select',
      options: icons,
      description:
        'Adds an icon (using an icon implies the use @width="block")',
    },
    iconAlignment: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Choose the position of the icon',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuInput
      id={{this.id}}
      @error={{this.error}}
      @warning={{this.warning}}
      @disabled={{this.disabled}}
      @width={{this.width}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  id: '',
  error: false,
  warning: false,
  disabled: false,
  width: '',
  icon: '',
  iconAlignment: 'left',
};
