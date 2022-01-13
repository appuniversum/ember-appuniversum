import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/AuLinkExternal',
  argTypes: {
    skin: { control: 'select', options: ['', 'border', 'brand', 'success', 'warning', 'error', 'action', 'gray'], description:''},
    size: { control: 'select', options: ['', 'small'], description:''},
    icon: { control: 'text', description:'' },
    number: {control: 'text', description:''}
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
