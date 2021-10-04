import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Button',
  argTypes: {
    text: { control: 'text' },
    skin: { control: 'select', options: ['primary', 'secondary', 'link', 'link-secondary']},
    size: { control: 'select', options: ['', 'large']},
    icon: { control: 'text' },
    iconAlignment: { control: 'select', options: ['', 'left', 'right']},
    hideText: {control: 'boolean'},
    width: { control: 'select', options: ['', 'block']},
    alert: {control: 'boolean'},
    disabled: {control: 'boolean'},
    loading: {control: 'boolean'},
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

export const Text = Template.bind({});
Text.args = {
  text: 'Button',
  skin: 'primary',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false
};
