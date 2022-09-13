import { hbs } from 'ember-cli-htmlbars';

const options = ['foo', 'bar', 'baz'];

export default {
  title: 'Components/Forms/PowerSelect/MultipleSelect',
  argTypes: {
    allowClear: { control: 'boolean', description: '' },
    renderInPlace: { control: 'boolean', description: '' },
    disabled: { control: 'boolean' },
    searchEnabled: { control: 'boolean', description: '' },
    loadingMessage: { control: 'text', description: '' },
    noMatchesMessage: { control: 'text', description: '' },
    searchMessage: { control: 'text', description: '' },
    placeholder: { control: 'text', description: '' },
    options: { control: 'array', description: '' },
    selected: { control: { type: null }, description: '' },
    onChange: { control: 'function', description: '' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <PowerSelectMultiple
      @allowClear={{this.allowClear}}
      @renderInPlace={{this.renderInPlace}}
      @disabled={{this.disabled}}
      @searchEnabled={{this.searchEnabled}}
      @loadingMessage={{this.loadingMessage}}
      @noMatchesMessage={{this.noMatchesMessage}}
      @searchMessage={{this.searchMessage}}
      @options={{this.options}}
      @selected={{ this.selected }}
      @placeholder={{ this.placeholder }}
      @onChange={{fn (mut this.selected)}}
      as |multipleselect|
    >
      {{multipleselect}}
    </PowerSelectMultiple>
  `,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  allowClear: true,
  renderInPlace: false,
  disabled: false,
  searchEnabled: true,
  loadingMessage: 'Aan het laden...',
  noMatchesMessage: 'Geen resultaten',
  searchMessage: 'Typ om te zoeken',
  placeholder: 'Selecteer waardes',
  options: options,
  selected: [options[0], options[1]],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
