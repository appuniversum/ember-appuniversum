# Form: Checkbox

---

## Checkbox

{{#docs-demo as |demo|}}
  {{#demo.example name='au-control-checkbox.hbs'}}
    <div class="au-c-form">
      <p>
        <AuControlCheckbox @label="Ik ga akkoord" @identifier="akkoord" />
      </p>
      <p>
        <AuControlCheckbox @label="Ik wil een document ontvangen Ik wil een document ontvangen Ik wil een document ontvangen  Ik wil een document ontvangen Ik wil een document ontvangen Ik wil een document ontvangen Ik wil een document ontvangen" @identifier="akkoord-ontvangen" />
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-control-checkbox.hbs'}}
{{/docs-demo}}

## Checkbox Disabled

{{#docs-demo as |demo|}}
  {{#demo.example name='au-control-checkbox-disabled.hbs'}}
    <div class="au-c-form">
      <p>
        <AuControlCheckbox @label="Ik ga akkoord" @identifier="akkoord-disabled" @disabled={{true}} />
      </p>
      <p>
        <AuControlCheckbox @label="Ik ga akkoord" @identifier="akkoord-disabled" @checked={{true}} @disabled={{true}} />
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-control-checkbox-disabled.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@label` | Set label text  | `String` | - |
| `@identifier` | Makes sure the label is linked to the checkbox and clicking it will only activate the checkbox you clicked.  | `String` | - |
| `@disabled` | Adds a disabled state to the checkbox | `Boolean` | `false` |
| `@name` | Groups checkboxes for server side  | `String` | - |
| `@value` | The value given to the data submitted with the checkbox's name  | `String` | - |