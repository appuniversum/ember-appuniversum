import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuFormRow',
  argTypes: {
    alignment: {
      control: 'select',
      options: ['default', 'inline', 'pre', 'post'],
      description: 'Choose the layout of the form row.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuFormRow
      @alignment={{this.alignment}}
    >
      <AuLabel for="input">
        Label
      </AuLabel>
      <AuInput id="input" />
    </AuFormRow>
    `,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  alignment: 'default',
};
