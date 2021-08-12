# Loader

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-loader.hbs'}}
    <AuLoader />

    <hr>

    <AuLoader @padding="small" />

    <hr>

    <AuLoader @padding="large" />
  {{/demo.example}}
  {{demo.snippet 'au-loader.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@padding` | Set the padding of the loader  | `value`: `small` / `default` / `large` | `default` |
