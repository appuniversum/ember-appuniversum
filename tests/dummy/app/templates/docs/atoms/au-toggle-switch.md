# Toggle switch

---

## Toggle switch

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toggle-switch.hbs'}}
    <AuToggleSwitch @label="" @disabled={{false}}/>
  {{/demo.example}}
  {{demo.snippet 'au-toggle-switch.hbs'}}
{{/docs-demo}}

## Toggle switch Disabled

{{#docs-demo as |demo|}}
  {{#demo.example name='au-toggle-switch-disabled.hbs'}}
    <AuToggleSwitch @label=""  @disabled={{true}}/>
  {{/demo.example}}
 
  {{#demo.example name='au-toggle-switch-checked-disabled.hbs'}}
    <AuToggleSwitch @label="" @checked={{true}} @disabled={{true}} />
  {{/demo.example}}
  {{demo.snippet 'au-toggle-switch.hbs'}}
{{/docs-demo}}


## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@label` | Set label text  | `String` | - |
| `@disabled` | Adds a disabled state to the toggle switch | `Boolean` | `false` |
| `@checked` | Adds a checked state to the toggle switch | `Boolean` | `false` |


---
