# Heading

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-heading.hbs'}}
    <AuHeading>
      Heading 1
    </AuHeading>
    <hr>
    <AuHeading @level="2" @skin="2">
      Heading 2
    </AuHeading>
    <hr>
    <AuHeading @level="3" @skin="3">
      Heading 3
    </AuHeading>
    <hr>
    <AuHeading @level="4" @skin="4">
      Heading 4
    </AuHeading>
    <hr>
    <AuHeading @level="5" @skin="5">
      Heading 5
    </AuHeading>
    <hr>
    <AuHeading @level="6" @skin="6">
      Heading 6
    </AuHeading>
  {{/demo.example}}
  {{demo.snippet 'au-heading.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@level` | Defines the depth of the heading (h1 > h6) | `1` / `2` / `3` / `4` / `5` / `6` | `1` |
| `@skin` | Defines the style and size of the heading | `1` / `2` / `3` / `4` / `5` / `6` | `1` |
