import { hbs } from 'ember-cli-htmlbars';
const icons = [
  'add',
  'alert-triangle',
  'archive',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'attachment',
  'bin',
  'bold',
  'calendar',
  'check',
  'copy',
  'cross',
  'document',
  'documents',
  'download',
  'draft',
  'drag',
  'export',
  'external',
  'eye',
  'github',
  'hierarchal-back',
  'indent',
  'italic',
  'info-circle',
  'label',
  'link',
  'login',
  'logout',
  'manual',
  'message',
  'nav-down',
  'nav-left',
  'nav-right',
  'nav-up',
  'nav-up-down',
  'ordered-list',
  'pencil',
  'plus-text',
  'question-circle',
  'redo',
  'remove',
  'renew',
  'reverse-indent',
  'search',
  'search-folder',
  'settings',
  'sitemap',
  'strikethrough',
  'switch',
  'upload',
  'underlined',
  'unordered-list',
  'user',
  'user-fill',
  'user-popup',
  'users',
];

export default {
  title: 'Components/Buttons/AuButton',
  argTypes: {
    text: { control: 'text', description: '' },
    skin: {
      control: 'select',
      options: ['primary', 'secondary', 'link', 'link-secondary'],
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
      @alert={{this.alert}}
      @disabled={{this.disabled}}
      @loading={{this.loading}}
    >
      {{text}}
    </AuButton>`,
  context: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  skin: 'primary',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  skin: 'secondary',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false,
};

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  text: 'Primary link',
  skin: 'link',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false,
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
  text: 'Secondary link',
  skin: 'link-secondary',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false,
};
