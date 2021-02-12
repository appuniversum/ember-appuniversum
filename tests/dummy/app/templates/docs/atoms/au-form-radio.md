# Form: Radio button

---

## Radio button

{{#docs-demo as |demo|}}
  {{#demo.example name='au-control-radio.hbs'}}
    <div class="au-c-form">
      <ul>
        <li>
          <AuControlRadio @label="Ja" @name="ja-nee" @value="ja" @identifier="ja" />
        </li>
        <li>
          <AuControlRadio @label="Nee" @name="ja-nee" @value="nee" @identifier="nee" />
        </li>
      </ul>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-control-radio.hbs'}}
{{/docs-demo}}

## Radio button Disabled

{{#docs-demo as |demo|}}
  {{#demo.example name='au-control-radio-disabled.hbs'}}

    <div class="au-c-form">
      <ul>
        <li>
          <AuControlRadio @label="Ja" @name="ja-nee-disabled" @value="ja" @identifier="ja-disabled" @disabled={{true}} />
        </li>
        <li>
          <AuControlRadio @label="Nee" @name="ja-nee-disabled" @value="nee" @identifier="nee-disabled" @disabled={{true}} />
        </li>
      </ul>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-control-radio-disabled.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@label` | Set label text  | `String` | - |
| `@name` | Groups radio buttons, to make sure their checked statuses are related  | `String` | - |
| `@identifier` | Makes sure the label is linked to the checkbox and clicking it will only activate the checkbox you clicked.  | `String` | - |
| `@value` | Used to identify which radio button in a group is selected.  | `String` | - |
| `@checked` | Adds a checked state to the radiobutton | `Boolean` | `false` |
| `@disabled` | Adds a disabled state to the radiobutton | `Boolean` | `false` |
