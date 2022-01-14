import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/AuDatePicker',
  argTypes: {
    id: { control: 'text', description:'Set id of component'},
    label: { control: 'text', description:'Set label text'},
    value: { control: 'date', description:'Set the selected date'},
    min: { control: 'date', description:'Set starting date'},
    max: { control: 'date', description:'Set ending date'},
    firstDay: { control: 'select', options:['1','2','3','4','5','6','7'], description:'Choose first day of the week (range: 1 - 7)'},
    error: { control: 'boolean', description:'Add an error state'},
    warning: { control: 'boolean', description:'Add a warning state'},
    disabled: { control: 'boolean', description:'Makes the date picker input component disabled'},
    localization: { control: 'object', description:'Object for localizing Button labels, names...'},
    adapter: { control: 'object', description:'Object for parsing and formatting'},
    onChange: { control: 'function', description:'Gets called when the date changes. Returns the date as both an ISO 8601 string and Date instance or null when the input field is cleared.'}
  },
};

const Template = (args) => ({
  template: hbs`
    <AuDatePicker
      @id={{this.id}}
      @label={{this.label}}
      @value={{this.value}}
      @min={{this.min}}
      @max={{this.max}}
      @first-day={{this.firstDay}}
      @error={{this.error}}
      @warning={{this.warning}}
      @disabled={{this.disabled}}
      @localization={{this.localization}}
      @adapter={{this.adapter}}
      @onChange={{this.onChange}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  label:"Datepicker"
};
