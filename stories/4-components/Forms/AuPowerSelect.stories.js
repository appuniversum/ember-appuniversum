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

export default {
  title: 'Components/Forms/EmberPowerSelect',
  argTypes: {
    allowClear: { control: 'boolean', description: '' },
    disabled: { control: 'boolean' },
    searchEnabled: { control: 'boolean', description: '' },
    loadingMessage: { control: 'text', description: '' },
    noMatchesMessage: { control: 'text', description: '' },
    searchMessage: { control: 'text', description: '' },
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
      @disabled={{this.disabled}}
      @searchEnabled={{this.searchEnabled}}
      @loadingMessage={{this.loadingMessage}}
      @noMatchesMessage={{this.noMatchesMessage}}
      @searchMessage={{this.searchMessage}}
      @options={{this.option}}
      @selected={{this.selected}}
      @onChange={{fn (mut this.singleselect)}}
      as |singleselect|>
      {{singleselect}}
    </PowerSelect>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  allowClear: true,
  disabled: '',
  searchEnabled: true,
  loadingMessage: 'Aan het laden...',
  noMatchesMessage: 'Geen resultaten',
  searchMessage: 'Typ om te zoeken',
  options: singleselects,
  selected: 'Budget',
  onChange: '{{fn (mut this.singleselect)}}',
};
