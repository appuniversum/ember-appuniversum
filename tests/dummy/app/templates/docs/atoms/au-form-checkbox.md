# Form: Checkbox (draft)

---

## Checkbox

{{#docs-demo as |demo|}}
  {{#demo.example name='au-control-checkbox.hbs'}}
    <div class="au-c-form">
      <p>
        <AuControlCheckbox @label="Ik ga akkoord" @id-for="akkoord"/>
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
        <AuControlCheckbox @label="Ik ga akkoord" @id-for="akkoord-disabled" @disabled={{true}}/>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-control-checkbox.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@label` | Set label text  | `String` | - |
| `@id-for` | Makes sure the label is linked to the checkbox and clicking it will only activate the checkbox you clicked.  | `String` | - |
| `@disabled` | Adds a disabled state to the button | `Boolean` | `false` |
