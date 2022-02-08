import { hbs } from 'ember-cli-htmlbars';
const icons = [
  'add',
  'alert-triangle',
  'archive',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'attachment',
  'bin',
  'bold',
  'calendar',
  'check',
  'copy',
  'cross',
  'document',
  'documents',
  'download',
  'draft',
  'drag',
  'export',
  'external',
  'eye',
  'github',
  'hierarchal-back',
  'indent',
  'italic',
  'info-circle',
  'label',
  'link',
  'login',
  'logout',
  'manual',
  'message',
  'nav-down',
  'nav-left',
  'nav-right',
  'nav-up',
  'nav-up-down',
  'ordered-list',
  'pencil',
  'plus-text',
  'question-circle',
  'redo',
  'remove',
  'renew',
  'reverse-indent',
  'search',
  'search-folder',
  'settings',
  'sitemap',
  'strikethrough',
  'switch',
  'upload',
  'underlined',
  'unordered-list',
  'user',
  'user-fill',
  'user-popup',
  'users',
];

export default {
  title: 'Components/Content/AuCard',
  argTypes: {
    title: { control: 'text', description: '' },
    subtitle: { control: 'text', description: '' },
    content: { control: 'text', description: '' },
    flex: { control: 'boolean', description: 'Layout elements as flexbox' },
    textCenter: { control: 'boolean', description: 'Centers text' },
    shadow: { control: 'boolean', description: 'Adds a box shadow' },
    size: {
      control: 'select',
      options: ['regular', 'small', 'flush'],
      description: 'Changes the padding',
    },
    standOut: {
      control: 'boolean',
      description: 'Makes background colour stand out',
    },
    expandable: { control: 'boolean', description: 'Card becomes expandable ' },
    isExpanded: {
      control: 'boolean',
      description: 'Toggle expanded section (when expandable is true).',
    },
    isOpenInitially: {
      control: 'boolean',
      description:
        'Determines whether the card is open initially (when expandable is true)',
    },
    badgeIcon: {
      control: 'select',
      options: icons,
      description: 'Add an icon',
    },
    badgeSkin: {
      control: 'select',
      options: [
        'none',
        'border',
        'brand',
        'success',
        'warning',
        'error',
        'action',
      ],
      description: 'Set the theme of the badge',
    },
    badgeSize: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Set the size of the badge',
    },
    manualControl: {
      control: 'boolean',
      description: 'Activates manual control of the card component',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuCard
      @flex={{this.flex}}
      @textCenter={{this.textCenter}}
      @shadow={{this.shadow}}
      @size={{this.size}}
      @standOut={{this.standOut}}
      @expandable={{this.expandable}}
      @isExpanded={{this.isExpanded}}
      @isOpenInitially={{this.isOpenInitially}}
      @manualControl={{this.manualControl}}
      as |c|
    >
      <c.header
        @badgeIcon={{this.badgeIcon}}
        @badgeSkin={{this.badgeSkin}}
        @badgeSize={{this.badgeSize}}
      >
        <AuHeading @level="2" @skin="4">
          {{this.title}}
        </AuHeading>
        <p>
          {{this.subtitle}}
        </p>
      </c.header>
      <c.content>
        <p>{{this.content}}</p>
      </c.content>
      <c.footer>
        <AuButton>Ga naar toezicht</AuButton>
      </c.footer>
    </AuCard>`,
  context: args,
});

const ExpandableTemplate = (args) => ({
  template: hbs`
    <AuCard
      @flex={{this.flex}}
      @textCenter={{this.textCenter}}
      @shadow={{this.shadow}}
      @size={{this.size}}
      @standOut={{this.standOut}}
      @expandable={{this.expandable}}
      @isExpanded={{this.isExpanded}}
      @isOpenInitially={{this.isOpenInitially}}
      @manualControl={{this.manualControl}}
      as |c|
    >
      <c.header
        @badgeIcon={{this.badgeIcon}}
        @badgeSkin={{this.badgeSkin}}
        @badgeSize={{this.badgeSize}}
      >
        <AuHeading @level="3" @skin="5">
          {{this.title}}
        </AuHeading>
      </c.header>
      <c.content>
        <p>{{this.content}}</p>
      </c.content>
    </AuCard>`,
  context: args,
});

const EditableTemplate = (args) => ({
  template: hbs`
    <AuToolbar class="au-u-margin-bottom-small">
      <AuToolbarGroup>
        <AuHeading @level="4" @skin="5">Card – editable</AuHeading>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuButton @skin="tertiary" @icon="pencil" @iconAlignment="right">
          Bewerk
        </AuButton>
      </AuToolbarGroup>
    </AuToolbar>
    <AuCard
      @flex={{this.flex}}
      @textCenter={{this.textCenter}}
      @shadow={{this.shadow}}
      @size={{this.size}}
      @standOut={{this.standOut}}
      @expandable={{this.expandable}}
      @isExpanded={{this.isExpanded}}
      @isOpenInitially={{this.isOpenInitially}}
      @manualControl={{this.manualControl}}
      as |c|>
      <c.content>
        <div class="au-o-grid">
          <div class="au-o-grid__item au-u-1-1 au-u-1-2@medium">
            <dl class="au-o-grid au-o-grid--tiny">
              <dt class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                <p><strong>Subject</strong></p>
              </dt>
              <dd class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                <p>Object (information)</p>
              </dd>
            </dl>
          </div>
          <div class="au-o-grid__item  au-u-1-1 au-u-1-2@medium">
            <dl class="au-o-grid au-o-grid--tiny">
              <dt class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                <p><strong>Context</strong></p>
              </dt>
              <dd class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                <p>Information</p>
              </dd>
            </dl>
          </div>
        </div>
      </c.content>
    </AuCard>`,
  context: args,
});

const EditingTemplate = (args) => ({
  template: hbs`
    <AuToolbar class="au-u-margin-bottom-small">
      <AuToolbarGroup>
        <AuHeading @level="4" @skin="5">Card – editing</AuHeading>
      </AuToolbarGroup>
      <AuToolbarGroup>
        <AuButton @icon="check" @iconAlignment="right">
          Bewaar
        </AuButton>
      </AuToolbarGroup>
    </AuToolbar>
    <AuCard
      @flex={{this.flex}}
      @textCenter={{this.textCenter}}
      @shadow={{this.shadow}}
      @size={{this.size}}
      @standOut={{this.standOut}}
      @expandable={{this.expandable}}
      @isExpanded={{this.isExpanded}}
      @isOpenInitially={{this.isOpenInitially}}
      @manualControl={{this.manualControl}}
      as |c|>
      <c.content>
        <div class="au-o-grid">
          <div class="au-o-grid__item au-u-1-2@medium">
            <div class="au-o-grid au-o-grid--tiny">
              <div class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                <AuLabel for="input-subject-object" @inline={{true}} @required={{true}}>Subject</AuLabel>
              </div>
              <div class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                <AuInput id="input-subject-object" @width="block" />
                <AuHelpText>Helptext</AuHelpText>
              </div>
            </div>
          </div>
          <div class="au-o-grid__item au-u-1-2@medium">
            <div class="au-o-grid au-o-grid--tiny">
              <div class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
                <AuLabel for="input-subject-object" @inline={{true}} @required={{true}} @error={{true}}>Subject</AuLabel>
              </div>
              <div class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
                <AuInput id="input-subject-object" @error={{true}} @width="block" />
                <AuHelpText @error={{true}}>Error message</AuHelpText>
              </div>
            </div>
          </div>
        </div>
      </c.content>
      <c.footer >
        <AuHelpText @skin="secondary">
          * Required field
        </AuHelpText>
      </c.footer>
    </AuCard>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  title: 'Title for card',
  subtitle: 'Subtitle for card',
  content: 'Information in the card that comes below the header. Content.',
  flex: false,
  textCenter: false,
  shadow: true,
  size: 'regular',
  standOut: false,
  expandable: false,
  isExpanded: false,
  isOpenInitially: false,
  badgeIcon: '',
  badgeSkin: '',
  badgeSize: '',
  manualControl: false,
};

export const Expandable = ExpandableTemplate.bind({});
Expandable.args = {
  title: 'Title for card Information in the card that comes below the header. Content. Information in the card that comes below the header. Content.',
  subtitle: 'Subtitle for card',
  content: 'Information in the card that comes below the header. Content.',
  flex: false,
  textCenter: false,
  shadow: false,
  size: 'regular',
  standOut: false,
  expandable: true,
  isExpanded: true,
  isOpenInitially: true,
  badgeIcon: '',
  badgeSkin: '',
  badgeSize: '',
  manualControl: false,
};

export const Editable = EditableTemplate.bind({});
Editable.args = {
  flex: false,
  textCenter: false,
  shadow: false,
  size: 'regular',
  standOut: true,
  expandable: false,
  isExpanded: false,
  isOpenInitially: false,
  badgeIcon: '',
  badgeSkin: '',
  badgeSize: '',
  manualControl: false,
};

export const Editing = EditingTemplate.bind({});
Editing.args = {
  flex: false,
  textCenter: false,
  shadow: false,
  size: 'regular',
  standOut: false,
  expandable: false,
  isExpanded: false,
  isOpenInitially: false,
  badgeIcon: '',
  badgeSkin: '',
  badgeSize: '',
  manualControl: false,
};
