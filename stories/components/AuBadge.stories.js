import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/AuBadge',
  argTypes: {
    skin: { control: 'select', options: ['', 'border', 'brand', 'success', 'warning', 'error', 'action', 'gray']},
    size: { control: 'select', options: ['', 'small']},
    icon: { control: 'text' },
    number: {control: 'text'}
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
