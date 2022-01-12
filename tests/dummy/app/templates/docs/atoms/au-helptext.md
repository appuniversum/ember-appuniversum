# Helptext

---

## Skin

{{#docs-demo as |demo|}}
  {{#demo.example name='au-helptext.hbs'}}
    <AuHelpText>Helptext</AuHelpText>
    <hr>
    <AuHelpText @skin="secondary">Helptext</AuHelpText>
    <hr>
    <AuHelpText @skin="tertiary">Helptext</AuHelpText>
  {{/demo.example}}
  {{demo.snippet 'au-helptext.hbs'}}
{{/docs-demo}}


## Size

{{#docs-demo as |demo|}}
  {{#demo.example name='au-helptext-size.hbs'}}
    <AuHelpText>Helptext</AuHelpText>
    <hr>
    <AuHelpText @size="normal">Helptext</AuHelpText>
    <hr>
    <AuHelpText @size="large">Helptext</AuHelpText>
  {{/demo.example}}
  {{demo.snippet 'au-helptext-size.hbs'}}
{{/docs-demo}}

## As error message

{{#docs-demo as |demo|}}
  {{#demo.example name='au-helptext-form.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel @error={{true}} for="input-error">Normal input</AuLabel>
        <AuInput id="input-error" @error={{true}} @width="block"/>
        <AuHelpText @error={{true}}>Something is wrong.</AuHelpText>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-helptext-form.hbs'}}
{{/docs-demo}}

## As warning message

{{#docs-demo as |demo|}}
  {{#demo.example name='au-helptext-form-warning.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel @warning={{true}} for="input-warning">Normal input</AuLabel>
        <AuInput id="input-warning" @warning={{true}} @width="block"/>
        <AuHelpText @warning={{true}}>Something is wrong.</AuHelpText>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-helptext-form-warning.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@skin` | Change the style of the text  | `value`: `primary` / `secondary` / `tertiary` | `primary` |
| `@size` | Change the size of the text  | `value`: `small` / `normal` / `large` | `small` |
| `@error` | Add an error state  | `Boolean` | `false` |
| `@warning` | Add an warning state  | `Boolean` | `false` |
