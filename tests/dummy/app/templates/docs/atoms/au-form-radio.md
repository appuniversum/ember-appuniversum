# Form: Radio button

---

## Radio button

{{#docs-demo as |demo|}}
  {{#demo.example name='au-control-radio.hbs'}}
    <div class="au-c-form">
      <ul>
        <li>
          <AuControlRadio @label="Ja" @name="ja-nee"  @identifier="ja" value="ja" />
        </li>
        <li>
          <AuControlRadio @label="Nee" @name="ja-nee" @identifier="nee" value="nee" />
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
          <AuControlRadio @label="Ja" @name="ja-nee-disabled" @identifier="ja-disabled" @disabled={{true}} value="ja" />
        </li>
        <li>
          <AuControlRadio @label="Nee" @name="ja-nee-disabled" @identifier="nee-disabled" @disabled={{true}} value="nee" />
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
| `@name` | Groups radio buttons, to make sure their selected statuses are related  | `String` | - |
| `@identifier` | Makes sure the label is linked to the radio button and clicking it will only activate the radio button you clicked.  | `String` | - |
| `@checked` | Used to set/get checked state of component  | `Boolean` | - |
| `@onChange`| Expects a function that gets called when the radio button state changes. The function receives the radio button **state**, **value** & **event context** as parameters. | `Function` | | - |
