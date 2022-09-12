import { hbs } from 'ember-cli-htmlbars';
const singleselects = [
  'Advies bij jaarrekening AGB',
  'Advies bij jaarrekening eredienstbestuur',
  'Agenda',
  'Andere documenten BBC',
  'Besluit budget AGB',
  'Besluit meerjarenplan(aanpassing) AGB',
  'Besluit over budget(wijziging) eredienstbestuur',
  'Besluit over budget(wijziging) OCMW-vereniging',
  'Besluitenlijst',
  'Budget',
  'Goedkeuringstoezicht Voeren',
  'Meerjarenplan(aanpassing)',
  'Notulen',
  'Oprichting autonoom bedrijf',
  'Oprichting districtbestuur',
];
const multipleselects = ['bar', 'baz', 'foo'];

export default {
  title: 'Components/Forms/EmberPowerSelect',
  argTypes: {
    allowClear: { control: 'boolean', description: '' },
    renderInPlace: { control: 'boolean', description: '' },
    disabled: { control: 'boolean' },
    searchEnabled: { control: 'boolean', description: '' },
    loadingMessage: { control: 'text', description: '' },
    noMatchesMessage: { control: 'text', description: '' },
    searchMessage: { control: 'text', description: '' },
    placeholder: { control: 'text', description: '' },
    options: { control: 'object', description: '' },
    selected: { control: 'text', description: '' },
    onChange: { control: 'function', description: '' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <PowerSelect
      @allowClear={{this.allowClear}}
      @renderInPlace={{this.renderInPlace}}
      @disabled={{this.disabled}}
      @searchEnabled={{this.searchEnabled}}
      @loadingMessage={{this.loadingMessage}}
      @noMatchesMessage={{this.noMatchesMessage}}
      @searchMessage={{this.searchMessage}}
      @options={{this.options}}
      @selected={{this.selected}}
      @onChange={{fn (mut this.selected)}}
      as |singleselect|>
      {{singleselect}}
    </PowerSelect>`,
  context: args,
});

const TemplateMultiple = (args) => ({
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

export const PowerSelect = Template.bind({});
PowerSelect.args = {
  allowClear: true,
  renderInPlace: false,
  disabled: '',
  searchEnabled: true,
  loadingMessage: 'Aan het laden...',
  noMatchesMessage: 'Geen resultaten',
  searchMessage: 'Typ om te zoeken',
  placeholder: 'Selecteer waardes',
  options: singleselects,
  selected: 'Budget',
  onChange: '{{fn (mut this.selected)}}',
};

export const PowerSelectMultiple = TemplateMultiple.bind({});
PowerSelectMultiple.args = {
  allowClear: true,
  renderInPlace: false,
  disabled: true,
  searchEnabled: true,
  loadingMessage: 'Aan het laden...',
  noMatchesMessage: 'Geen resultaten',
  searchMessage: 'Typ om te zoeken',
  placeholder: 'Selecteer waardes',
  options: multipleselects,
  selected: '',
  onChange: '{{fn (mut this.selected)}}',
};
