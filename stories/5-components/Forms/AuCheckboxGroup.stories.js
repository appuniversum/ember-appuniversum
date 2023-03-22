import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuCheckboxGroup',
  argTypes: {
    alignment: {
      control: 'select',
      options: ['default', 'inline'],
      description: 'Choose the layout of the group.',
    },
    name: {
      control: 'text',
      description:
        'Groups checkboxes for server side.',
    },
    selected: {
      control: 'array',
      description:
        'Used to identify which checkboxes in the group are selected.',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to all the checkboxes.',
    },
    onChange: {
      action: 'change',
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
      @name={{this.name}}
      @selected={{this.selected}}
      @disabled= {{this.disabled}}
      @onChange={{this.onChange}}
    as |Group|>
      <Group.Checkbox @value="checkboxOne">Checkbox 1</Group.Checkbox>
      <Group.Checkbox @value="checkboxTwo">Checkbox 2</Group.Checkbox>
      <Group.Checkbox @value="checkboxThree">Checkbox 3</Group.Checkbox>
    </AuCheckboxGroup>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  alignment: 'default',
  name: '',
  selected: ['checkboxTwo', 'checkboxThree'],
  disabled: false,
};
