import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Notifications/AuPill',
  argTypes: {
    text: { control: 'text', description: 'Sets the style of the pill' },
    skin: {
      control: 'select',
      options: ['default', 'border', 'ongoing', 'link', 'success', 'warning', 'error'],
      description: 'Sets the skin of the pill.',
    },
    draft: {
      control: 'boolean',
      description: 'Applies a dashed line to the pill skin',
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
    hideText: {
      control: 'boolean',
      description: 'Hides the text visually',
    },
    route: {
      control: 'text',
      description: 'Add a route to the link component',
    },
    href: {
      control: 'text',
      description: 'Add a href to the link component',
    },
    action: {
      control: 'text',
      description: 'Adds an action to the pill',
    },
    actionIcon: {
      control: 'select',
      options: icons,
      description: 'Sets the icon for the action',
    },
    actionText: {
      control: 'text',
      description: 'Description of the action for screenreaders',
    }
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuPill
      @skin={{this.skin}}
      @draft={{this.draft}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @route={{this.route}}
      @href={{this.href}}
      @action={{this.action}}
      @actionIcon={{this.actionIcon}}
      @actionText={this.actionText}
    >
      {{text}}
    </AuPill>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: 'Pill',
  skin: '',
  draft: false,
  icon: 'info-circle',
  iconAlignment: 'left',
  hideText: false,
  href: '',
  route: '',
  action: '',
  actionIcon:'cross',
  actionText: 'close',
};
