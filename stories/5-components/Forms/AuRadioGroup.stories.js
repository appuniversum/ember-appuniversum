import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuRadioGroup',
  argTypes: {
    alignment: {
      control: 'select',
      options: ['default', 'inline'],
      description: 'Choose the layout of the group.',
    },
    name: {
      control: 'text',
      description:
        'Groups radio buttons, to make sure their checked statuses are related',
    },
    value: {
      control: 'text',
      description:
        'Used to identify which radio button in the group is selected.',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to all the radio buttons.',
    },
    onChange: {
      action: 'change',
      description:
        'Expects a function that gets called when the radio button state changes. The function receives the radio button value & event context as parameters.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuRadioGroup
      @alignment={{this.alignment}}
      @name={{this.name}}
      @value={{this.value}}
      @disabled= {{this.disabled}}
      @onChange={{this.onChange}}
    as |Group|>
      <Group.Radio @value="radioOne">Radio 1</Group.Radio>
      <Group.Radio @value="radioTwo">Radio 2</Group.Radio>
      <Group.Radio @value="radioThree">Radio 3</Group.Radio>
    </AuRadioGroup>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  alignment: 'default',
  name: 'radios',
  value: 'radioTwo',
  disabled: false,
};
