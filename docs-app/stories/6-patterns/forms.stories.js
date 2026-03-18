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
      <AuFieldset as |f|>
        <f.legend @required={{true}}>Radio list</f.legend>
        <f.content>
          <AuRadioGroup
            @name="radios"
            as |Group|
          >
            <Group.Radio @value="radioOne">Radio 1</Group.Radio>
            <Group.Radio @value="radioTwo">Radio 2</Group.Radio>
            <Group.Radio @value="radioThree">Radio 3</Group.Radio>
          </AuRadioGroup>
        </f.content>
      </AuFieldset>
      <AuFieldset as |f|>
        <f.legend>Check list</f.legend>
        <f.content>
          <AuCheckboxGroup
            @name="checkboxes"
            as |Group|
          >
            <Group.Checkbox @value="checkboxOne">Checkbox 1</Group.Checkbox>
            <Group.Checkbox @value="checkboxTwo">Checkbox 2</Group.Checkbox>
            <Group.Checkbox @value="checkboxThree">Checkbox 3</Group.Checkbox>
          </AuCheckboxGroup>
        </f.content>
      </AuFieldset>
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
          <AuButton @skin="link">
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
        <AuLabel for="input" @required={{true}} @inline={{true}}  class="au-u-1-6">
          Title
        </AuLabel>
        <AuInput id="input" />
      </AuFormRow>
      <AuFormRow @alignment="inline">
        <AuLabel for="inputTwo" @inline={{true}}  class="au-u-1-6">
          Date
        </AuLabel>
        <AuDatePicker id="inputTwo" />
      </AuFormRow>
      <AuFieldset
        @alignment="inline"
        as |f|
      >
        <f.legend @inline={{true}} @required={{true}} class="au-u-1-6">
          Radio list
        </f.legend>
        <f.content>
          <AuRadioGroup
            @name="radios"
            @alignment="inline"
            as |Group|
          >
            <Group.Radio @value="radioOne">Radio 1</Group.Radio>
            <Group.Radio @value="radioTwo">Radio 2</Group.Radio>
            <Group.Radio @value="radioThree">Radio 3</Group.Radio>
          </AuRadioGroup>
        </f.content>
      </AuFieldset>
      <AuFieldset
        @alignment="inline"
        as |f|
      >
        <f.legend @inline={{true}} class="au-u-1-6">
          Check list
        </f.legend>
        <f.content>
          <AuCheckboxGroup
            @name="checkboxes"
            @alignment="inline"
            as |Group|
          >
            <Group.Checkbox @value="checkboxOne">Checkbox 1</Group.Checkbox>
            <Group.Checkbox @value="checkboxTwo">Checkbox 2</Group.Checkbox>
            <Group.Checkbox @value="checkboxThree">Checkbox 3</Group.Checkbox>
          </AuCheckboxGroup>
        </f.content>
      </AuFieldset>
      <AuFormRow @alignment="inline">
        <AuLabel for="textarea" @inline={{true}} class="au-u-1-6">
          Textarea
        </AuLabel>
        <AuTextarea id="textarea"></AuTextarea>
      </AuFormRow>
      <AuFormRow @alignment="inline">
        <AuHelpText @skin="secondary">* Verplichte velden</AuHelpText>
      </AuFormRow>
      <AuFormRow>
        <AuButtonGroup>
          <AuButton>
            Submit
          </AuButton>
          <AuButton @skin="link">
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
      <AuFieldset @alignment="inline" as |f|>
        <f.legend @inline={{true}} @required={{true}} class="au-u-1-6">
          Radio list
        </f.legend>
        <f.content>
          <AuRadioGroup
            @name="radios"
            @alignment="inline"
            as |Group|
          >
            <Group.Radio @value="radioOne">Radio 1</Group.Radio>
            <Group.Radio @value="radioTwo">Radio 2</Group.Radio>
            <Group.Radio @value="radioThree">Radio 3</Group.Radio>
          </AuRadioGroup>
        </f.content>
      </AuFieldset>
      <AuFieldset @alignment="inline" as |f|>
        <f.legend @inline={{true}} class="au-u-1-6">
          Check list
        </f.legend>
        <f.content>
          <AuCheckboxGroup
            @name="checkboxes"
            @alignment="inline"
            as |Group|
          >
            <Group.Checkbox @value="checkboxOne">Checkbox 1</Group.Checkbox>
            <Group.Checkbox @value="checkboxTwo">Checkbox 2</Group.Checkbox>
            <Group.Checkbox @value="checkboxThree">Checkbox 3</Group.Checkbox>
          </AuCheckboxGroup>
        </f.content>
      </AuFieldset>
      <AuFormRow @alignment="pre">
        <AuLabel for="textarea" @inline={{true}} class="au-u-1-6">
          Textarea
        </AuLabel>
        <AuTextarea id="textarea"></AuTextarea>
      </AuFormRow>
      <AuFormRow @alignment="inline">
        <AuHelpText @skin="secondary">* Verplichte velden</AuHelpText>
      </AuFormRow>
      <AuFormRow>
        <AuButtonGroup>
          <AuButton>
            Submit
          </AuButton>
          <AuButton @skin="link">
            Cancel
          </AuButton>
        </AuButtonGroup>
      </AuFormRow>
    </form>
    `,
  context: args,
});

export const DefaultForm = Template.bind({});
DefaultForm.args = {};

export const InlineForm = TemplateInline.bind({});
InlineForm.args = {};

export const PreForm = TemplatePre.bind({});
PreForm.args = {};
