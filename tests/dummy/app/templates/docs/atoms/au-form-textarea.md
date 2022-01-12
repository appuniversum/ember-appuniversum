# Form: Textarea

---

## Normal Textarea

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea.hbs'}}
    <AuLabel for="textarea-regular">Normal textarea</AuLabel>
    <AuTextarea id="textarea-regular"></AuTextarea>
  {{/demo.example}}
  {{demo.snippet 'au-textarea.hbs'}}
{{/docs-demo}}

## Width

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea-width.hbs'}}
    <AuLabel for="textarea-regular">Block textarea</AuLabel>
    <AuTextarea id="textarea-regular" @width="block"></AuTextarea>
  {{/demo.example}}
  {{demo.snippet 'au-textarea-width.hbs'}}
{{/docs-demo}}


## Textarea Required

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea-required.hbs'}}
    <AuLabel for="textarea-required">Textarea required <AuPill>Verplicht</AuPill></AuLabel>
    <AuTextarea id="textarea-required" @width="block"></AuTextarea>
  {{/demo.example}}
  {{demo.snippet 'au-textarea-required.hbs'}}
{{/docs-demo}}


## Error Textarea

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea-error.hbs'}}
    <AuLabel @error={{true}} for="textarea-error">Normal textarea</AuLabel>
    <AuTextarea id="textarea-error" @error={{true}} @width="block"></AuTextarea>
    <AuHelpText @error={{true}}>Something is wrong.</AuHelpText>
  {{/demo.example}}
  {{demo.snippet 'au-textarea-error.hbs'}}
{{/docs-demo}}

## Warning Textarea

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea-warning.hbs'}}
    <AuLabel @warning={{true}} for="textarea-warning">Normal textarea</AuLabel>
    <AuTextarea id="textarea-warning" @warning={{true}} @width="block"></AuTextarea>
    <AuHelpText @warning={{true}}>Something is wrong.</AuHelpText>
  {{/demo.example}}
  {{demo.snippet 'au-textarea-warning.hbs'}}
{{/docs-demo}}

## Disabled Textarea

{{#docs-demo as |demo|}}
  {{#demo.example name='au-textarea-disabled.hbs'}}
    <AuLabel for="textarea-disabled">Disabled textarea</AuLabel>
    <AuTextarea id="textarea-disabled" @width="block" @value="This is a disabled textarea" @disabled={{true}}></AuTextarea>
  {{/demo.example}}
  {{demo.snippet 'au-textarea-disabled.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@width` | Display the textarea as a block element  | `value`: `block` | - |
| `@error` | Add an error state  | `Boolean` | `false` |
| `@warning` | Add an warning state  | `Boolean` | `false` |
| `@disabled` | Adds a disabled state to the textarea | `Boolean` | `false` |
