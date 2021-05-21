# Accordion

---

## Accordion

{{#docs-demo as |demo|}}
  {{#demo.example name='au-accordion.hbs'}}
    <AuAccordion @iconOpen="nav-down" @iconClosed="nav-right" @label="Accordion with arrows">
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
    <AuAccordion @iconOpen="info-circle" @iconClosed="info-circle" @label="Accordion with info sign" @subTitle="Accordion with a subtitle">
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
    <AuAccordion @iconOpen="nav-down" @iconClosed="nav-right" @label="Regular information button" @subTitle="Accordion with a subtitle">
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
  {{/demo.example}}
  {{demo.snippet 'au-accordion.hbs'}}
{{/docs-demo}}

## Accordion Loading

{{#docs-demo as |demo|}}
  {{#demo.example name='au-accordion-size-loading.hbs'}}
    <AuAccordion @iconOpen="nav-down" @iconClosed="nav-right" @label="This accordion's text will be loading" @buttonWidth="block" @loading={{true}}>
      <p>I am information. I can even contain a <AuLink>A Link</AuLink>!</p>
    </AuAccordion>
  {{/demo.example}}
  {{demo.snippet 'au-accordion-size-loading.hbs'}}
{{/docs-demo}}


## Accordion Arguments
| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@iconOpen` | Adds an icon to the accordion when it's open. To disable set value to `false` | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | `nav-down` |
| `@iconClosed` | Adds an icon to the accordion when it's open. To disable set value to `false` | `value`: <AuLink @linkRoute="docs.atoms.au-icon">Find the options here</AuLink> | `nav-up` |
| `@label` | Set the label of the button | `String` | - |
| `@subTitle` | Set the subtitle of the accordion | `String` | - |
| `@loading` | Adds a loading state to the button | `Boolean` | `false` |
