import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Links/AuLink',
  argTypes: {
    text: { control: 'text', description: '' },
    route: {
      control: 'route',
      description: 'The route that is passed to the link',
    },
    skin: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'bold',
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
    active: {
      control: 'boolean',
      description: 'Adds an active state and disables pointer events',
    },
    model: { control: 'model', description: 'Supply a model to the route' },
    models: { control: 'model', description: 'Supply models to the route' },
    query: {
      control: 'query',
      description: 'Supply query parameters to the route',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuLink
      @route={{this.route}}
      @skin={{this.skin}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @width={{this.width}}
      @active={{this.active}}
      @model={{this.model}}
      @models={{this.models}}
      @query={{this.query}}
    >
      {{this.text}}
    </AuLink>`,
  context: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary',
  route: 'index',
  skin: 'primary',
  icon: 'login',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  active: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
  route: 'index',
  skin: 'secondary',
  icon: 'login',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  active: false,
};
Secondary.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Bold = Template.bind({});
Bold.args = {
  text: 'Bold',
  route: 'index',
  skin: 'bold',
  icon: 'login',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  active: false,
};
Bold.parameters = {
  chromatic: { disableSnapshot: true },
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: 'Primary Button',
  route: 'index',
  skin: 'button',
  icon: 'login',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  active: false,
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: 'Secondary Button',
  route: 'index',
  skin: 'button-secondary',
  icon: 'login',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  active: false,
};
SecondaryButton.parameters = {
  chromatic: { disableSnapshot: true },
};

export const NakedButton = Template.bind({});
NakedButton.args = {
  text: 'Naked Button',
  route: 'index',
  skin: 'button-naked',
  icon: 'login',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  active: false,
};
NakedButton.parameters = {
  chromatic: { disableSnapshot: true },
};
