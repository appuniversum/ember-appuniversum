import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Content/AuCard',
  argTypes: {
    flex: { control: 'boolean', description: 'Layout elements as flexbox' },
    textCenter: { control: 'boolean', description: 'Centers text' },
    shadow: { control: 'boolean', description: 'Adds a box shadow' },
    standOut: {
      control: 'boolean',
      description: 'Makes background colour grey',
    },
    divided: {
      control: 'boolean',
      description: 'Adds a divider between sections',
    },
    size: {
      control: 'select',
      options: ['default', 'tiny', 'small', 'flush'],
      description: 'Changes the padding',
    },
    expandable: { control: 'boolean', description: 'Card becomes expandable ' },
    expandableReversed: { control: 'boolean', description: 'Reverse position of expandable button' },
    isExpanded: {
      control: 'boolean',
      description: 'Toggle expanded section (when expandable is true).',
    },
    isOpenInitially: {
      control: 'boolean',
      description:
        'Determines whether the card is open initially (when expandable is true)',
    },
    manualControl: {
      control: 'boolean',
      description: 'Activates manual control of the card component (when expandable is true)',
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
      @standOut={{this.standOut}}
      @divided={{this.divided}}
      @size={{this.size}}
      @expandable={{this.expandable}}
      @expandableReversed={{this.expandableReversed}}
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
          Title for card
        </AuHeading>
      </c.header>
      <c.content>
        <p>Content of the card.</p>
      </c.content>
      <c.footer>
        <AuButton>Footer button</AuButton>
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
    <AuToolbar class="au-u-margin-bottom-small" as |Group|>
      <Group>
        <AuHeading @level="4" @skin="5">Card – editable</AuHeading>
      </Group>
      <Group>
        <AuButton @skin="tertiary" @icon="pencil" @iconAlignment="right">
          Bewerk
        </AuButton>
      </Group>
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
    <AuToolbar class="au-u-margin-bottom-small" as |Group|>
      <Group>
        <AuHeading @level="4" @skin="5">Card – editing</AuHeading>
      </Group>
      <Group>
        <AuButton @icon="check" @iconAlignment="right">
          Bewaar
        </AuButton>
      </Group>
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
  flex: false,
  textCenter: false,
  shadow: false,
  standOut: false,
  divided: false,
  size: 'default',
  expandable: false,
  expandableReversed: false,
  isExpanded: false,
  isOpenInitially: false,
  manualControl: false,
  badgeIcon: '',
  badgeSkin: '',
  badgeSize: '',
};

export const Expandable = ExpandableTemplate.bind({});
Expandable.args = {
  title:
    'Title for card Information in the card that comes below the header. Content. Information in the card that comes below the header. Content.',
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
