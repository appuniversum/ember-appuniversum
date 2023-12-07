import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Buttons/AuButton',
  argTypes: {
    text: { control: 'text', description: '' },
    skin: {
      control: 'select',
      options: ['primary', 'secondary', 'naked', 'link', 'link-secondary'],
      description: 'Defines the style of the button',
    },
    size: {
      control: 'select',
      options: ['', 'large'],
      description: 'Set the size of the button',
    },
    icon: { control: 'select', options: icons, description: 'Adds an icon' },
    iconAlignment: {
      control: 'select',
      options: ['', 'left', 'right'],
      description:
        'Choose the position of the icon, adds correct margin next to the icon',
    },
    hideText: {
      control: 'boolean',
      description: 'Hides the button text visually',
    },
    width: {
      control: 'select',
      options: ['', 'block'],
      description: 'Defines the width of a button',
    },
    wrap: {
      control: 'boolean',
      description: 'Wrap the text inside a button',
    },
    alert: {
      control: 'boolean',
      description: 'Adds an alert state to the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the button',
    },
    loading: {
      control: 'boolean',
      description: 'Adds a loading state to the button',
    },
    loadingMessage: {
      control: 'text',
      description: 'Add a custom loading message. Default is "Aan het laden"',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuButton
      @skin={{this.skin}}
      @size={{this.size}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @width={{this.width}}
      @wrap={{this.wrap}}
      @alert={{this.alert}}
      @disabled={{this.disabled}}
      @loading={{this.loading}}
      @loadingMessage={{this.loadingMessage}}
    >
      {{this.text}}
    </AuButton>`,
  context: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  skin: 'primary',
  size: '',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  wrap: '',
  alert: false,
  disabled: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  skin: 'secondary',
  size: '',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  wrap: '',
  alert: false,
  disabled: false,
  loading: false,
};

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  text: 'Primary link',
  skin: 'link',
  size: '',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  wrap: '',
  alert: false,
  disabled: false,
  loading: false,
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
  text: 'Secondary link',
  skin: 'link-secondary',
  size: '',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  wrap: '',
  alert: false,
  disabled: false,
  loading: false,
};
