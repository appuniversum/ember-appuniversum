import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuHelptext',
  argTypes: {
    text: { control: 'text', description:'' },
    skin: { control: 'select', options: ['primary', 'secondary', 'tertiary'], description:'Change the style of the text'},
    size: { control: 'select', options: ['small', 'normal', 'large'], description:'Change the size of the text'},
    error: { control: 'boolean', description:'Add an error state' },
    warning: { control: 'boolean', description:'Add a warning state' },
  },
};

const Template = (args) => ({
  template: hbs`
    <AuHelpText
      @skin={{this.skin}}
      @size={{this.size}}
      @error={{this.error}}
      @warning={{this.warning}}
    >
      {{text}}
    </AuHelpText>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: "Help text",
  skin: "primary",
  size: "normal",
  error: false,
  warning: false,
};
