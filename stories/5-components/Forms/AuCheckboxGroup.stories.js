import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuCheckboxGroup',
  argTypes: {
    alignment: {
      control: 'select',
      options: ['default', 'inline'],
      description: 'Choose the layout of the group.',
    },
    value: {
      control: 'array',
      description:
        'Used to identify which checkboxes in the group are selected.',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to all the checkboxes.',
    },
    onChange: {
      control: 'function',
      description:
        'Expects a function that gets called when the state of the checkboxes change. The function receives the checked state of the checkboxs & event context as parameters.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuCheckboxGroup
      @alignment={{this.alignment}}
      @value={{this.value}}
      @disabled= {{this.disabled}}
      @onChange={{this.onChange}}
    as |Group|>
      <Group.Checkbox @name="checkboxOne">Checkbox 1</Group.Checkbox>
      <Group.Checkbox @name="checkboxTwo">Checkbox 2</Group.Checkbox>
      <Group.Checkbox @name="checkboxThree">Checkbox 3</Group.Checkbox>
    </AuCheckboxGroup>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  alignment: 'default',
  value: ['checkboxTwo', 'checkboxThree'],
  disabled: false,
  onChange: '',
};
