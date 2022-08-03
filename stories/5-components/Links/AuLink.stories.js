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

export const Component = Template.bind({});
Component.args = {
  text: 'Link',
  route: 'index',
  skin: 'primary',
  icon: 'login',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  active: false,
};
