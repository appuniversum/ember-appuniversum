# Badge

---

## Primary badge

Indicates the main action of the view (only one should be used per view).

{{#docs-demo as |demo|}}
  {{#demo.example name='au-Badge.hbs'}}
    <AuBadge>
      Primary Badge
    </AuBadge>

    <hr>

    <AuBadge>
      <AuIcon @icon="pencil" @alignment="left" />
      Primary Badge - icon
    </AuBadge>

    <hr>

    <AuBadge @width="block">
      Primary Badge - block
    </AuBadge>

    <hr>

    <AuBadge @alert="true">
      Primary Badge - error
    </AuBadge>

    <hr>

    <AuBadge @loading="true">
      Primary Badge - loading
    </AuBadge>

    <hr>

    <AuBadge @disabled="true">
      Primary Badge - disabled
    </AuBadge>
  {{/demo.example}}
  {{demo.snippet 'au-Badge.hbs'}}
{{/docs-demo}}

## Properties
- `@skin`: [ secondary | tertiary ] - default is primary
- `@width`: [ block ] - makes a button behave like a block element
- `@alert`: [ true ] - adds an alert state to the button
- `@disabled`: [ true ] - adds a disabled state to the button
- `@loading`: [ true ] - adds a loading state to the button
