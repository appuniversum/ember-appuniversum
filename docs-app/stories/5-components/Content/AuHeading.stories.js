import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuHeading',
  argTypes: {
    text: { control: 'text', description: '' },
    level: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'Defines the depth of the heading (h1 > h6)',
    },
    skin: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', 'functional'],
      description: 'Defines the style and size of the heading',
    },
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
      {{this.text}}
    </AuHeading>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: 'Title',
  level: '1',
  skin: '1',
};
