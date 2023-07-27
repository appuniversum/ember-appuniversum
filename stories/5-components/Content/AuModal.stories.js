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
  title: 'Components/Content/AuModal',
  argTypes: {
    modalOpen: { control: 'boolean', description: 'Show or hide the modal' },
    closable: {
      control: 'boolean',
      description: 'Set if the modal can be closed',
    },
    closeModal: {
      control: 'function',
      description: 'Add the action to close the modal',
    },
    closeTriggers: {
      control: 'object',
      description: 'Set which triggers should close the modal',
    },
    title: { control: 'text', description: 'Set the title of the modal' },
    size: {
      control: 'select',
      options: ['default', 'large', 'fullscreen'],
      description: 'Set the size of the modal',
    },
    padding: {
      control: 'select',
      options: ['default', 'none'],
      description: 'Set the padding of the modal',
    },
    overflow: {
      control: 'boolean',
      description:
        'If set to true the modal container and content will be have visible overflow. Useful when using a powerselect component inside a modal.',
    },
    initialFocus: {
      control: 'text',
      description: 'Element which should be focused when opening the modal',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuModalContainer />
    <AuModal
      @modalOpen={{this.modalOpen}}
      @closeModal={{this.closeModal}}
      @size={{this.size}}
      @padding={{this.padding}}
      @overflow={{this.overflow}}
      @closable={{this.closable}}
      @closeTriggers={{this.closeTriggers}}
    >
      <:title>{{this.title}}</:title>
      <:body>
        <p>Modal content</p>
      </:body>
      <:footer>
        <AuButton>Action</AuButton>
      </:footer>
    </AuModal>`,
  context: args,
});

const OverflowTemplate = (args) => ({
  template: hbs`
    <AuModalContainer />
    <AuModal
      @modalOpen={{this.modalOpen}}
      @closeModal={{this.closeModal}}
      @size={{this.size}}
      @padding={{this.padding}}
      @overflow={{this.overflow}}
      @initialFocus='.power-select'
    >
      <:title>{{this.title}}</:title>
      <:body>
        <AuLabel>Power select (rendered in place)</AuLabel>
        <PowerSelect
          class='power-select'
          @allowClear={{true}}
          @searchEnabled={{true}}
          @loadingMessage='Aan het laden...'
          @noMatchesMessage='Geen resultaten'
          @searchMessage='Typ om te zoeken'
          @options={{this.powerselectoptions}}
          @selected='Budget'
          @onChange={{fn (mut this.selected)}}
          @renderInPlace={{true}}
          as |singleselect|>
        {{singleselect}}
      </PowerSelect>
      </:body>
      <:footer>
        <AuButton>Action</AuButton>
      </:footer>
    </AuModal>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  modalOpen: true,
  closable: true,
  closeModal: null,
  closeTriggers: {
    escape: true,
    x: true,
    outside: true,
  },
  title: 'Modal',
  size: 'default',
  padding: 'default',
  overflow: false,
};

export const Overflow = OverflowTemplate.bind({});
Overflow.args = {
  modalOpen: true,
  closeModal: null,
  title: 'Overflow on modal',
  size: 'default',
  padding: 'default',
  overflow: true,
  powerselectoptions: singleselects,
  initialFocus: '.power-select',
};
