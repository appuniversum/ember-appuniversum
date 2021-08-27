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
        <AuLabel for="input-required-block" @required={{true}} @requiredLabel="Verplicht">
          Label required
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
        <AuLabel @error={{true}} for="input-error">Label error</AuLabel>
        <AuInput id="input-error" @error="error" @width="block"/>
        <AuHelpText @error={{true}}>Something is wrong.</AuHelpText>
      </p>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-label-error.hbs'}}
{{/docs-demo}}

## Inline label

{{#docs-demo as |demo|}}
  {{#demo.example name='au-label-inline.hbs'}}
    <div class="au-o-grid au-o-grid--tiny">
      <div class="au-o-grid__item au-u-1-3@small au-u-1-4@large">
        <AuLabel for="input-subject-object" @inline={{true}} @required={{true}} @requiredLabel="*" @error={{true}}>Subject</AuLabel>
      </div>
      <div class="au-o-grid__item au-u-2-3@small au-u-3-4@large">
        <AuInput id="input-subject-object" @error={{true}} @width="block" />
        <AuHelpText @error={{true}}>Error message</AuHelpText>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-label-inline.hbs'}}
{{/docs-demo}}


## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@inline` | Add an inline state  | `Boolean` | `false` |
| `@required` | Add a required state  | `Boolean` | `false` |
| `@requiredLabel` | Add the required state label  | `String` | `*/verplicht` |
| `@error` | Add an error state  | `Boolean` | `false` |
