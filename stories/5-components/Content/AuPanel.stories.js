import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuPanel',
  argTypes: {
    active: {
      control: 'boolean',
      description:
        'A grey background is added when a panel is active. Used for an editing state. (Default = false)',
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuPanel @active={{this.active}} as |section|>
      <section>
        <AuToolbar as |Group|>
          <Group>
            <AuHeading @level="2" @skin="4">Panel title</AuHeading>
          </Group>
          <Group>
            <AuButtonGroup>
              <AuButton @skin="naked" @icon="pencil">
                Button label
              </AuButton>
              <AuButton @skin="naked" @icon="three-dots" @hideText={{true}}>
                Menu
              </AuButton>
            </AuButtonGroup>
          </Group>
        </AuToolbar>
      </section>
      <section>
        <AuContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa leo, consequat at tortor a, pretium efficitur diam. Praesent mollis euismod elit, quis consequat nulla lacinia a. Nulla facilisi. Vestibulum volutpat et urna in auctor. Pellentesque pulvinar volutpat quam at egestas. Maecenas mattis velit lacus, in gravida elit bibendum a.
          </p>
        </AuContent>
      </section>
      <section>
        <AuContent @skin="small">
          <p class="au-u-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa leo, consequat at tortor a, pretium efficitur diam. Praesent mollis euismod elit, quis consequat nulla lacinia a. Nulla facilisi. Vestibulum volutpat et urna in auctor. Pellentesque pulvinar volutpat quam at egestas. Maecenas mattis velit lacus, in gravida elit bibendum a.
          </p>
        </AuContent>
      </section>
    </AuPanel>`,
  context: args,
});

const TemplateActive = (args) => ({
  template: hbs`
    <AuPanel @active={{this.active}} as |section|>
      <section>
        <AuToolbar as |Group|>
          <Group>
            <AuHeading @level="2" @skin="4">Panel title</AuHeading>
          </Group>
        </AuToolbar>
      </section>
      <section>
        <div class="au-c-form">
          <AuFormRow>
            <AuLabel for="input">
              Label
            </AuLabel>
            <AuInput id="input" />
          </AuFormRow>
          <AuFormRow @alignment="default">
            <AuLabel for="textarea">
              Textarea
            </AuLabel>
            <AuTextarea id="textarea" @width="block"></AuTextarea>
          </AuFormRow>
        </div>
      </section>
      <section>
        <AuToolbar @reverse={{true}} as |Group|>
          <Group>
            <AuButtonGroup>
              <AuButton @skin="naked">
                Annuleer
              </AuButton>
              <AuButton>
                Save
              </AuButton>
            </AuButtonGroup>
          </Group>
        </AuToolbar>
      </section>
    </AuPanel>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  active: false,
};

export const ActiveState = TemplateActive.bind({});
ActiveState.args = {
  active: true,
};
