import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Links/AuLinkExternal',
  argTypes: {
    text: { control: 'text', description: '' },
    href: { control: 'text', description: '' },
    skin: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'button',
        'button-secondary',
        'button-naked',
      ],
      description: 'Defines the style of the link',
    },
    icon: { control: 'select', options: icons, description: 'Adds an icon' },
    iconAlignment: {
      control: 'select',
      options: ['left', 'right'],
      description:
        'hoose the position of the icon, adds correct margin next to the icon',
    },
    hideText: {
      control: 'boolean',
      description: 'Hides the link text visually',
    },
    width: {
      control: 'select',
      options: ['', 'block'],
      description: 'Defines the width of the link',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuLinkExternal
      href={{this.href}}
      @skin={{this.skin}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @width={{this.width}}
    >
      {{this.text}}
    </AuLinkExternal>`,
  context: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'External link',
  href: 'https://www.vlaanderen.be/',
  route: 'index',
  skin: 'primary',
  icon: 'manual',
  iconAlignment: 'left',
  hideText: false,
  width: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'External link',
  href: 'https://www.vlaanderen.be/',
  route: 'index',
  skin: 'secondary',
  icon: 'manual',
  iconAlignment: 'left',
  hideText: false,
  width: '',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: 'External link',
  href: 'https://www.vlaanderen.be/',
  route: 'index',
  skin: 'button',
  icon: 'manual',
  iconAlignment: 'left',
  hideText: false,
  width: '',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: 'External link',
  href: 'https://www.vlaanderen.be/',
  route: 'index',
  skin: 'button-secondary',
  icon: 'manual',
  iconAlignment: 'left',
  hideText: false,
  width: '',
};

export const NakedButton = Template.bind({});
NakedButton.args = {
  text: 'External link',
  href: 'https://www.vlaanderen.be/',
  route: 'index',
  skin: 'button-naked',
  icon: 'manual',
  iconAlignment: 'left',
  hideText: false,
  width: '',
};
