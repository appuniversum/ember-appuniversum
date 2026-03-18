import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Notifications/AuTooltip',
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Choose the preferred placement of the tooltip.',
    },
    content: {
      control: 'text',
    },
  },
  parameters: {},
};

const Template = (args) => ({
  template: hbs`
  <div
    class="au-u-flex au-u-flex--center au-u-flex--vertical-center"
    style="height: 100vh;" {{!template-lint-disable no-inline-styles}}
  >
    <AuTooltip @placement={{this.placement}} as |tooltip|>
      <AuButton {{tooltip.target}}>Hover or focus me</AuButton>
      <tooltip.Content>
        {{#if (eq this.content "This is tooltip on the")}}
          {{this.content}} {{if this.placement this.placement "top"}}
        {{else}}
          {{!template-lint-disable no-triple-curlies}}
          {{{this.content}}}
        {{/if}}
      </tooltip.Content>
    </AuTooltip>
  </div>
    `,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  content: 'This is tooltip on the',
};

export const MoreContent = Template.bind({});
MoreContent.args = {
  content:
    'For a large button, label or other element with more text, the content is shown in a smaller, more condensed way.',
};
