# Accordion

---

## Accordion

{{#docs-demo as |demo|}}
  {{#demo.example name='au-accordion.hbs'}}
    <AuAccordion @accordionIconOpen="nav-down" @accordionIconClosed="nav-right" @accordionButtonLabel="Accordion with arrows">
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
    <AuAccordion @accordionIconOpen="info-circle" @accordionIconClosed="info-circle" @accordionButtonLabel="Accordion with info sign" @accordionSubTitle="Accordion with a subtitle">
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
    <AuAccordion @accordionIconOpen="nav-down" @accordionIconClosed="nav-right" @accordionButtonLabel="Regular information button" @accordionSubTitle="Accordion with a subtitle">
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
  {{/demo.example}}
  {{demo.snippet 'au-accordion.hbs'}}
{{/docs-demo}}

## Accordion Loading

{{#docs-demo as |demo|}}
  {{#demo.example name='au-accordion-size-loading.hbs'}}
    <AuAccordion @accordionIconOpen="nav-down" @accordionIconClosed="nav-right" @accordionButtonLabel="This accordion's text will be loading" @buttonWidth="block" @loading={{true}}>
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
  {{/demo.example}}
  {{demo.snippet 'au-accordion-size-loading.hbs'}}
{{/docs-demo}}


## Accordion Arguments
| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@accordionIconOpen` | Adds an icon to the accordion when it's open | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@accordionIconClosed` | Adds an icon to the accordion when it's open | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | - |
| `@accordionButtonLabel` | Set the label of the button | `String` | - |
| `@accordionSubTitle` | Set the subtitle of the accordion | `String` | - |
| `@loading` | Adds a loading state to the button | `Boolean` | `false` |
