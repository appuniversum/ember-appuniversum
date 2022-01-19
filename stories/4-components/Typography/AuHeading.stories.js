import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Typography/AuHeading',
  argTypes: {
    text: { control: 'text', description:'' },
    level: { control: 'select', options: ['1', '2', '3', '4', '5', '6'], description:'Defines the depth of the heading (h1 > h6)'},
    skin: { control: 'select', options: ['1', '2', '3', '4', '5', '6'], description:'Defines the style and size of the heading'},
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuHeading
      @level={{this.level}}
      @skin={{this.skin}}
    >
      {{text}}
    </AuHeading>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: "Titel",
  level: "1",
  skin: "1"
};
