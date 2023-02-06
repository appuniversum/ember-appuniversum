import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuDateInput',
  argTypes: {
    value: { control: 'date', description: 'Set the selected date' },
    error: { control: 'boolean', description: 'Add an error state' },
    warning: { control: 'boolean', description: 'Add a warning state' },
    disabled: {
      control: 'boolean',
      description: 'Makes the date picker input component disabled',
    },
    prefillYear: {
      control: 'boolean',
      description:
        'When enabled it tries to inteligently prefill the year after typing 2 characters. `20` will be autocompleted to `2023`, but the user can continue typing the last 2 numbers if the year is different.',
    },
    onChange: {
      action: 'date-changed',
      description:
        'Gets called when the date changes. Returns the date as both an ISO 8601 string and Date instance or null when the input field is cleared.',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuDateInput
      @value={{this.value}}
      @error={{this.error}}
      @warning={{this.warning}}
      @disabled={{this.disabled}}
      @prefillYear={{this.prefillYear}}
      @onChange={{this.onChange}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  error: false,
  warning: false,
  disabled: false,
  prefillYear: false,
};
