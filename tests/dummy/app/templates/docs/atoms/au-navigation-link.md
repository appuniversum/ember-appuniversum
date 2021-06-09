# Navigation link

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-navigation-link.hbs'}}
    <ul class="au-c-list-navigation">
      <li class="au-c-list-navigation__item">
        <AuNavigationLink @linkRoute="docs.atoms.au-button">
          Navigation link
        </AuNavigationLink>
      </li>
      <li class="au-c-list-navigation__item">
        <AuNavigationLink @linkRoute="docs.atoms.au-navigation-link">
          Navigation link active
        </AuNavigationLink>
      </li>
    </ul>
  {{/demo.example}}
  {{demo.snippet 'au-navigation-link.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@route` | The route that is passed to the link  | `route name` | - |
| `@model` / `@models` | [Supply a model to the route](https://api.emberjs.com/ember/release/classes/Ember.Templates.components/methods/input?anchor=LinkTo#supplying-a-model) | `route model(s)` | - |
