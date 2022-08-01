import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Notifications/AuBadge',
  argTypes: {
    skin: {
      control: 'select',
      options: [
        '',
        'border',
        'brand',
        'success',
        'warning',
        'error',
        'action',
        'gray',
      ],
      description: 'Sets the color and background color',
    },
    size: {
      control: 'select',
      options: ['', 'small'],
      description: 'Change the size of the badge',
    },
    icon: {
      control: 'select',
      options: icons,
      description: 'Adds an icon to the badge',
    },
    number: { control: 'text', description: 'Adds a number to the badge' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuBadge
      @icon={{this.icon}}
      @skin={{this.skin}}
      @size={{this.size}}
      @number={{this.number}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  skin: '',
  icon: 'info-circle',
  size: '',
  number: '',
};
