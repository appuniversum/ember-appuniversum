# Accordion

---

## Accordion Skins

{{#docs-demo as |demo|}}
  {{#demo.example name='au-accordion-skin.hbs'}}
    <AuAccordion @accordionButtonLabel="Regular information button">
      <p>I am information</p>
    </AuAccordion>
    <AuAccordion @accordionButtonLabel="Secondary information button" @buttonSkin="secondary">
      <p>I am information</p>
    </AuAccordion>
    <AuAccordion @accordionButtonLabel="Tertiary information button" @buttonSkin="tertiary">
      <p>I am information</p>
    </AuAccordion>
  {{/demo.example}}
  {{demo.snippet 'au-accordion-skin.hbs'}}
{{/docs-demo}}

## Accordion Size &amp; Width

{{#docs-demo as |demo|}}
  {{#demo.example name='au-accordion-size-width.hbs'}}
    <AuAccordion @accordionButtonLabel="Large information button" @buttonSize="large">
      <p>I am information</p>
    </AuAccordion>
    <AuAccordion @accordionButtonLabel="Wide information button" @buttonWidth="block">
      <p>I am information</p>
    </AuAccordion>
  {{/demo.example}}
  {{demo.snippet 'au-accordion-size-width.hbs'}}
{{/docs-demo}}

## States

{{#docs-demo as |demo|}}
  {{#demo.example name='au-accordion-states.hbs'}}
    <AuAccordion @accordionButtonLabel="Disabled information button" @disabled={{true}}>
      <p>I am information</p>
    </AuAccordion>
    <AuAccordion @accordionButtonLabel="Loading content" @loading={{true}}>
      <p>I am information</p>
    </AuAccordion>
    <AuAccordion @accordionButtonLabel="Alerting information button" @buttonAlert={{true}}>
      <p>I am information</p>
    </AuAccordion>
  {{/demo.example}}
  {{demo.snippet 'au-accordion-states.hbs'}}
{{/docs-demo}}


## Accordion Arguments
| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@disabled` | Adds a disabled state to the button | `Boolean` | `false` |
| `@loading` | Adds a loading state to the button | `Boolean` | `false` |

## Accordion Button Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@accordionButtonLabel` | Set the label of the button | `String` | - |
| `@buttonSkin` | Defines the style of the button  | `value`: `primary` / `secondary` / `tertiary` | `primary` |
| `@buttonSize` | Set the size of the button  | `value`: `large` | - |
| `@buttonAlert` | Adds an alert state to the button | `Boolean` | `false` |
| `@buttonWidth` | Defines the width of a button | `value`: `block` | - |
| `@hideText` | Hides the button text visually | `Boolean` | `false` |
