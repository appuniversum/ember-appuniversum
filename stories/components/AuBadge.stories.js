import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/AuBadge',
  argTypes: {
    skin: { control: 'select', options: ['', 'border', 'brand', 'success', 'warning', 'error', 'action', 'gray'], description:'Sets the color and background color'},
    size: { control: 'select', options: ['', 'small'], description:'Change the size of the badge'},
    icon: { control: 'text', description:'Adds an icon to the badge' },
    number: {control: 'text', description:'Adds a number to the badge'}
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
  number: ''
};
