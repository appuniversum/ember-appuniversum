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
      <AuFieldset>
        <AuLegend>Radio list</AuLegend>
        <AuControlRadio
          @label="radio 1"
          @name="radios"
          @value="radioOne"
          @identifier="radioOne"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlRadio
          @label="radio 2"
          @name="radios"
          @value="radioTwo"
          @identifier="radioTwo"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlRadio
          @label="radio 3"
          @name="radios"
          @value="radioThree"
          @identifier="radioThree"
          @checked={{false}}
          @disabled= {{false}}
        />
      </AuFieldset>
      <AuFieldset>
        <AuLegend>Check list</AuLegend>
        <AuControlCheckbox
          @label="Checkbox 1"
          @name="Checkboxs"
          @value="CheckboxOne"
          @identifier="CheckboxOne"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlCheckbox
          @label="Checkbox 2"
          @name="Checkboxs"
          @value="CheckboxTwo"
          @identifier="CheckboxTwo"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlCheckbox
          @label="Checkbox 3"
          @name="Checkboxs"
          @value="CheckboxThree"
          @identifier="CheckboxThree"
          @checked={{false}}
          @disabled= {{false}}
        />
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
        <AuLabel for="input" @required={{true}} @inline={{true}} class="au-c-form-row__left">
          Title
        </AuLabel>
        <AuInput id="input" />
      </AuFormRow>
      <AuFormRow @alignment="inline">
        <AuLabel for="inputTwo" @inline={{true}} class="au-c-form-row__left">
          Date
        </AuLabel>
        <AuDatePicker id="inputTwo" />
      </AuFormRow>
      <AuFieldset @alignment="inline">
        <div class="au-c-fieldset__left">
          <AuLegend>Radio list</AuLegend>
        </div>
        <AuControlRadio
          @label="radio 1"
          @name="radios"
          @value="radioOne"
          @identifier="radioOne"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlRadio
          @label="radio 2"
          @name="radios"
          @value="radioTwo"
          @identifier="radioTwo"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlRadio
          @label="radio 3"
          @name="radios"
          @value="radioThree"
          @identifier="radioThree"
          @checked={{false}}
          @disabled= {{false}}
        />
      </AuFieldset>
      <AuFieldset @alignment="inline">
        <div class="au-c-fieldset__left">
          <AuLegend>Check list</AuLegend>
        </div>
        <AuControlCheckbox
          @label="Checkbox 1"
          @name="Checkboxs"
          @value="CheckboxOne"
          @identifier="CheckboxOne"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlCheckbox
          @label="Checkbox 2"
          @name="Checkboxs"
          @value="CheckboxTwo"
          @identifier="CheckboxTwo"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlCheckbox
          @label="Checkbox 3"
          @name="Checkboxs"
          @value="CheckboxThree"
          @identifier="CheckboxThree"
          @checked={{false}}
          @disabled= {{false}}
        />
      </AuFieldset>
      <AuFormRow @alignment="inline">
        <AuLabel for="textarea" @inline={{true}} class="au-c-form-row__left">
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
      <AuFieldset @alignment="inline">
        <AuLegend class="au-u-1-6">Radio list</AuLegend>
        <AuControlRadio
          @label="radio 1"
          @name="radios"
          @value="radioOne"
          @identifier="radioOne"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlRadio
          @label="radio 2"
          @name="radios"
          @value="radioTwo"
          @identifier="radioTwo"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlRadio
          @label="radio 3"
          @name="radios"
          @value="radioThree"
          @identifier="radioThree"
          @checked={{false}}
          @disabled= {{false}}
        />
      </AuFieldset>
      <AuFieldset @alignment="inline">
        <AuLegend class="au-u-1-6">Check list</AuLegend>
        <AuControlCheckbox
          @label="Checkbox 1"
          @name="Checkboxs"
          @value="CheckboxOne"
          @identifier="CheckboxOne"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlCheckbox
          @label="Checkbox 2"
          @name="Checkboxs"
          @value="CheckboxTwo"
          @identifier="CheckboxTwo"
          @checked={{false}}
          @disabled= {{false}}
        />
        <AuControlCheckbox
          @label="Checkbox 3"
          @name="Checkboxs"
          @value="CheckboxThree"
          @identifier="CheckboxThree"
          @checked={{false}}
          @disabled= {{false}}
        />
      </AuFieldset>
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

export const DefaultForm = Template.bind({});
DefaultForm.args = {};

export const InlineForm = TemplateInline.bind({});
InlineForm.args = {};

export const PreForm = TemplatePre.bind({});
PreForm.args = {};
