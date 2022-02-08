import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Notifications/AuPill',
  argTypes: {
    text: { control: 'text', description: 'Sets the style of the pill' },
    skin: {
      control: 'select',
      options: ['default', 'border', 'action', 'success', 'warning', 'error'],
      description: 'Adds an icon',
    },
    icon: {
      control: 'select',
      options: icons,
      description: 'Adds an icon to the badge',
    },
    iconAlignment: {
      control: 'select',
      options: ['left', 'right'],
      description:
        'Choose the position of the icon, adds correct margin next to the icon',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuPill
      @skin={{this.skin}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
    >
      {{text}}
    </AuPill>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: 'Pill',
  skin: '',
  icon: 'info-circle',
  iconAlignment: 'left',
};
