# Helptext

---

## Skin

{{#docs-demo as |demo|}}
  {{#demo.example name='au-helptext.hbs'}}
    <p>
      <AuHelpText>Helptext</AuHelpText>
    </p>
  {{/demo.example}}
  {{demo.snippet 'au-helptext.hbs'}}
{{/docs-demo}}

## As error message

{{#docs-demo as |demo|}}
  {{#demo.example name='au-helptext-form.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel @error="true" for="input-error">Normal input</AuLabel>
        <AuInput id="input-error" @error="error" @width="block"/>
        <AuHelpText @error="true">Something is wrong.</AuHelpText>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-helptext-form.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@error` | Add an error state  | `boolean` | `false` |
