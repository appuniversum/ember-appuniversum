# Loader

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-loader.hbs'}}
    <AuLoader />

    <hr>

    <AuLoader @size="small" />

    <hr>

    <AuLoader @size="large" />
  {{/demo.example}}
  {{demo.snippet 'au-loader.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@size` | Set the size of the loader  | `value`: `small` / `default` / `large` | `default` |
