import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Buttons/AuButtonGroup',
  argTypes: {
    inline: {
      control: 'boolean',
      description: 'Removes whitespace between buttons',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuButtonGroup @inline={{this.inline}}>
      <AuButton>
        Tertiary button in group
      </AuButton>
      <AuButton @skin="secondary">
        Tertiary button in group - active
      </AuButton>
    </AuButtonGroup>`,
  context: args,
});

const TemplateTwo = (args) => ({
  template: hbs`
    <AuButtonGroup @inline={{this.inline}}>
      <AuButton>
        Tertiary button in group
      </AuButton>
      <AuButton class="is-active">
        Tertiary button in group - active
      </AuButton>
    </AuButtonGroup>`,
  context: args,
});

export const Group = Template.bind({});
Group.args = {
  inline: '',
};

export const InlineGroup = TemplateTwo.bind({});
InlineGroup.args = {
  inline: true,
};
