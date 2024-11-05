import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Forms/PowerSelect/SingleSelect',
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
    selected: { control: 'text', description: '' },
    onChange: { control: 'function', description: '' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <BasicDropdownWormhole />
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
      @placeholder={{this.placeholder}}
      as |singleselect|>
      {{singleselect}}
    </PowerSelect>`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  allowClear: true,
  renderInPlace: false,
  disabled: '',
  searchEnabled: true,
  loadingMessage: 'Aan het laden...',
  noMatchesMessage: 'Geen resultaten',
  searchMessage: 'Typ om te zoeken',
  placeholder: 'Selecteer waardes',
  options: [
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
  ],
  selected: 'Budget',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
