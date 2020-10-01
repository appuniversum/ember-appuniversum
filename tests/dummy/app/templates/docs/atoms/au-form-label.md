# Form: Label

---

## Label

{{#docs-demo as |demo|}}
  {{#demo.example name='au-label.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel for="input-regular">Normal label</AuLabel>
        <AuInput id="input-regular" />
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-label.hbs'}}
{{/docs-demo}}


## Label required

{{#docs-demo as |demo|}}
  {{#demo.example name='au-label-required.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel for="input-required-block">
          Label required
          <AuPill>Verplicht</AuPill>
        </AuLabel>
        <AuInput id="input-required-block" @width="block"/>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-label-required.hbs'}}
{{/docs-demo}}


## Label error

{{#docs-demo as |demo|}}
  {{#demo.example name='au-label-error.hbs'}}
    <div class="au-c-form">
      <p>
        <AuLabel @error="true" for="input-error">Label error</AuLabel>
        <AuInput id="input-error" @error="error" @width="block"/>
        <AuHelpText @error="true">Something is wrong.</AuHelpText>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-label-error.hbs'}}
{{/docs-demo}}


## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@error` | Add an error state  | `boolean` | `false` |
