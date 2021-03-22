# Toggle switch

---

## Toggle switch

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toggle-switch.hbs'}}
    <AuToggleSwitch @label="Toggle this feature" @disabled={{false}}/>
  {{/demo.example}}
  {{demo.snippet 'au-toggle-switch.hbs'}}
{{/docs-demo}}

## Toggle switch Disabled

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toggle-switch-disabled.hbs'}}
    <AuToggleSwitch @label="Toggle this feature" @disabled={{true}}/>
  {{/demo.example}}
 
  {{#demo.example name='au-toggle-switch-checked-disabled.hbs'}}
    <AuToggleSwitch @label="Toggle this feature" @checked={{true}} @disabled={{true}} />
  {{/demo.example}}
  {{demo.snippet 'au-toggle-switch.hbs'}}
{{/docs-demo}}


## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@label` | Set label text  | `String` | - |
| `@identifier` | Makes sure the label is linked to the toggle switch and clicking it will only activate the toggle switch you clicked.  | `String` | - |
| `@disabled` | Adds a disabled state to the toggle switch | `Boolean` | `false` |
| `@name` | Groups toggle switches for server side  | `String` | - |
| `@checked` | Used to set/get checked state of component  | `Boolean` | `false` |
| `@onChange`| Expects a function that gets called when the toggle switch state changes. The function receives the toggle switch state & event context as parameters. | `Function` | | - |
