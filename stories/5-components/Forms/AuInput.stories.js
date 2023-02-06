import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Forms/AuInput',
  argTypes: {
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
    mask: {
      control: 'text',
      description:
        'Define the input mask you want to add. See https://github.com/RobinHerbots/Inputmask for more options.',
    },
    maskPlaceholder: {
      control: 'text',
      description: 'Define the input mask placeholder',
    },
    maskOptions: {
      description:
        'A more flexible alternative to the `@mask` and `@maskPlaceholder` arguments. This object will be passed into the InputMask instance. See https://github.com/RobinHerbots/Inputmask for more options.',
    },
    onChange: {
      action: 'change',
      description:
        'This action will be called when the value changes and will be passed to the unmasked value and the masked value.',
    },
    type: {
      control: 'select',
      options: ['text', 'number'],
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuInput
      @value={{this.value}}
      @error={{this.error}}
      @warning={{this.warning}}
      @disabled={{this.disabled}}
      @width={{this.width}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @mask={{this.mask}}
      @maskPlaceholder={{this.maskPlaceholder}}
      @maskOptions={{this.maskOptions}}
      @type={{this.type}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  error: false,
  warning: false,
  disabled: false,
  width: '',
  icon: '',
  iconAlignment: 'left',
  mask: '',
  maskPlaceholder: '',
};

export const InputMask = Template.bind({});
InputMask.args = {
  value: '',
  error: false,
  warning: false,
  disabled: false,
  width: '',
  icon: '',
  iconAlignment: 'left',
  maskOptions: {
    mask: '99.99.99-999.99',
    placeholder: '__.__.__-___.__',
  },
};
