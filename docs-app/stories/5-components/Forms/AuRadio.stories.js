import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuRadio',
  argTypes: {
    name: {
      control: 'text',
      description:
        'Groups radio buttons, to make sure their checked statuses are related',
    },
    value: {
      control: 'text',
      description:
        'Used to identify which radio button in a group is selected.',
    },
    checked: {
      control: 'boolean',
      description: 'Adds a checked state to the radio button',
    },
    disabled: {
      control: 'boolean',
      description: 'Adds a disabled state to the radio button',
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
    <AuRadio
      @name={{this.name}}
      @value={{this.value}}
      @checked={{this.checked}}
      @disabled= {{this.disabled}}
      @onChange={{this.onChange}}
    >
      Ja
    </AuRadio>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  name: 'ja-nee',
  value: 'ja',
  checked: false,
  disabled: false,
};
