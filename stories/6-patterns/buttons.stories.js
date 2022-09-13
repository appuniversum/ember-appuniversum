import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Patterns/Button use',
  parameters: {
    layout: 'padded',
  },
};

const TemplateType = (args) => ({
  template: hbs`
    <AuHeading @skin="5">Primary</AuHeading>
    <p class="au-u-muted">Primary buttons are used for confirm, send, save actions. Ideally there is only one primary button used in each view.</p>
    <AuToolbar @border="top" @size="small" class="au-u-margin-top-small" as |Group|>
      <Group>
        <AuButton>Save</AuButton>
        <AuButton>Publish</AuButton>
        <AuButton>Next step</AuButton>
        <AuButton>New</AuButton>
      </Group>
    </AuToolbar>

    <AuHeading @skin="5" class="au-u-margin-top-large">Secondary</AuHeading>
    <p class="au-u-muted">Secondary buttons are used as a counterpart of the primary action or for unrelated actions when there's already a primary button on the page.</p>
    <AuToolbar @border="top" @size="small" class="au-u-margin-top-small" as |Group|>
      <Group>
        <AuButton @skin="secondary">Options</AuButton>
        <AuButton @skin="secondary">Edit</AuButton>
        <AuButton @skin="secondary">Previous</AuButton>
      </Group>
    </AuToolbar>

    <AuHeading @skin="5" class="au-u-margin-top-large">Naked</AuHeading>
    <p class="au-u-muted">Naked buttons are used for cancel actions or toggle actions. These take up the least visual attention on the page. An icon is preferred to visualise the action.</p>
    <AuToolbar @border="top" @size="small" class="au-u-margin-top-small" as |Group|>
      <Group class="au-u-flex--vertical-center">
        <AuButton @skin="naked">Cancel</AuButton>
        <AuButton @skin="naked" @icon="pencil" @iconAlignment="left">Edit</AuButton>
        <AuButton @skin="naked" @icon="arrow-left" @iconAlignment="left">Previous</AuButton>
      </Group>
    </AuToolbar>

    <AuHeading @skin="5" class="au-u-margin-top-large">Alert property</AuHeading>
    <p class="au-u-muted">The alert property can be used on any skin but it's advised to use it with the naked button skin and an icon.</p>
    <AuToolbar @border="top" @size="small" class="au-u-margin-top-small" as |Group|>
      <Group class="au-u-flex--vertical-center">
        <AuButton @skin="naked" @alert={{true}} @icon="bin" @iconAlignment="left">Delete</AuButton>
      </Group>
    </AuToolbar>
    `,
  context: args,
});

const TemplateGroup = (args) => ({
  template: hbs`
    <AuHeading @skin="5">Button groups in headers</AuHeading>
    <p class="au-u-muted">In a header we align buttons to the right. The primary action is always the last in the group.</p>
    <AuToolbar @border="top" @size="small" class="au-u-margin-top-small" as |Group|>
      <Group>
        <AuHeading @skin="3">Heading</AuHeading>
      </Group>
      <Group>
        <AuButton @skin="naked">Cancel</AuButton>
        <AuButton @skin="secondary">Previous step</AuButton>
        <AuButton>Save</AuButton>
      </Group>
    </AuToolbar>

    <AuHeading @skin="5" class="au-u-margin-top-large">Button groups following forms</AuHeading>
    <p class="au-u-muted">When a button group follows a form it's important to align the primary action with the form. Here we start alignment from the left. Delete actions are clearly separated from the other available actions.</p>
    <AuToolbar @border="top" @size="small" class="au-u-margin-top-small" as |Group|>
      <Group>
        <AuButton>Save</AuButton>
        <AuButton @skin="secondary">Submit</AuButton>
        <AuButton @skin="naked">Cancel</AuButton>
      </Group>
      <Group>
        <AuButton @skin="naked" @alert={{true}} @icon="bin" @iconAlignment="left">Delete</AuButton>
      </Group>
    </AuToolbar>

    <AuHeading @skin="5" class="au-u-margin-top-large">Button groups in modals/cards</AuHeading>
    <p class="au-u-muted">In modals and cards buttons are always right aligned. The most important action is the last of the group. Cancel or delete actions in the footer are aligned left.</p>
    <AuCard @size="flush" class="au-u-margin-top au-u-2-3" as |c|>
      <c.header>
        <AuToolbar @border="bottom" @size="medium" as |Group|>
          <Group>
            <AuHeading @skin="3">Heading</AuHeading>
          </Group>
          <Group>
            <AuButton @skin="naked" @icon="pencil" @iconAlignment="left">Edit</AuButton>
            <AuButton @skin="secondary" @icon="settings" @iconAlignment="left">Options</AuButton>
          </Group>
        </AuToolbar>
      </c.header>
      <c.content>
        <div class="au-o-box">
          <p>Content</p>
        </div>
      </c.content>
      <c.footer>
        <AuToolbar @border="top" @size="medium" as |Group|>
          <Group>
            <AuButton @skin="naked">Cancel</AuButton>
          </Group>
          <Group>
            <AuButton @skin="secondary">Previous step</AuButton>
            <AuButton>Next step</AuButton>
          </Group>
        </AuToolbar>
      </c.footer>
    </AuCard>
    `,
  context: args,
});

export const Types = TemplateType.bind({});
Types.args = {};

export const Groups = TemplateGroup.bind({});
Groups.args = {};
