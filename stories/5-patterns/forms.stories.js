import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Patterns/Forms',
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <form class="au-c-form">
      <AuFormRow @alignment="default">
        <AuLabel for="input" @required={{true}} @requiredLabel="Required">
          Title
        </AuLabel>
        <AuInput id="input" @width="block" />
      </AuFormRow>
      <AuFormRow @alignment="default">
        <AuLabel for="inputTwo">
          Date
        </AuLabel>
        <AuDatePicker id="inputTwo" />
      </AuFormRow>
      <AuFormRow @alignment="default">
        <AuLabel for="textarea">
          Textarea
        </AuLabel>
        <AuTextarea id="textarea" @width="block"></AuTextarea>
      </AuFormRow>
      <AuFormRow>
        <AuButtonGroup>
          <AuButton>
            Submit
          </AuButton>
          <AuButton @skin="tertiary">
            Cancel
          </AuButton>
        </AuButtonGroup>
      </AuFormRow>
    </form>
    `,
  context: args,
});

const TemplateInline = (args) => ({
  template: hbs`
    <form class="au-c-form">
      <AuFormRow @alignment="inline">
        <AuLabel for="input" @required={{true}} @inline={{true}} class="au-u-1-6">
          Title
        </AuLabel>
        <AuInput id="input" />
      </AuFormRow>
      <AuFormRow @alignment="inline">
        <AuLabel for="inputTwo" @inline={{true}} class="au-u-1-6">
          Date
        </AuLabel>
        <AuDatePicker id="inputTwo" />
      </AuFormRow>
      <AuFormRow @alignment="inline">
        <AuLabel for="textarea" @inline={{true}} class="au-u-1-6">
          Textarea
        </AuLabel>
        <AuTextarea id="textarea"></AuTextarea>
      </AuFormRow>
      <AuFormRow>
        <AuButtonGroup>
          <AuButton>
            Submit
          </AuButton>
          <AuButton @skin="tertiary">
            Cancel
          </AuButton>
        </AuButtonGroup>
      </AuFormRow>
    </form>
    `,
  context: args,
});

const TemplatePre = (args) => ({
  template: hbs`
    <form class="au-c-form">
      <AuFormRow @alignment="pre">
        <AuLabel for="input" @required={{true}} @inline={{true}} class="au-u-1-6">
          Title
        </AuLabel>
        <AuInput id="input" />
      </AuFormRow>
      <AuFormRow @alignment="pre">
        <AuLabel for="inputTwo" @inline={{true}} class="au-u-1-6">
          Date
        </AuLabel>
        <AuDatePicker id="inputTwo" />
      </AuFormRow>
      <AuFormRow @alignment="pre">
        <AuLabel for="textarea" @inline={{true}} class="au-u-1-6">
          Textarea
        </AuLabel>
        <AuTextarea id="textarea"></AuTextarea>
      </AuFormRow>
      <AuFormRow>
        <AuButtonGroup>
          <AuButton>
            Submit
          </AuButton>
          <AuButton @skin="tertiary">
            Cancel
          </AuButton>
        </AuButtonGroup>
      </AuFormRow>
    </form>
    `,
  context: args,
});

export const SimpleForm = Template.bind({});
SimpleForm.args = {};

export const InlineForm = TemplateInline.bind({});
InlineForm.args = {};

export const PreForm = TemplatePre.bind({});
PreForm.args = {};
