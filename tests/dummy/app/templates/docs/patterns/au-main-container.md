# Main container

---

## Main container

{{#docs-demo as |demo|}}
  {{#demo.example name='au-main-container.hbs'}}
    <AuMainContainer as |m|>
      <m.sidebar>
        <div class="au-d-component-block">
          Sidebar
        </div>
      </m.sidebar>
      <m.content>
        <div class="au-d-component-block">
          Main content
        </div>
      </m.content>
    </AuMainContainer>
  {{/demo.example}}
  {{demo.snippet 'au-main-container.hbs'}}
{{/docs-demo}}

## Main container with scroll

{{#docs-demo as |demo|}}
  {{#demo.example name='au-main-container-scroll.hbs'}}
    <AuMainContainer as |m|>
      <m.sidebar>
        <div class="au-d-component-block">
          Sidebar
        </div>
      </m.sidebar>
      <m.content @scroll={{true}}>
        <div class="au-d-component-block au-d-component-block--overflow">
          Main content
        </div>
      </m.content>
    </AuMainContainer>
  {{/demo.example}}
  {{demo.snippet 'au-main-container-scroll.hbs'}}
{{/docs-demo}}


## Main container content arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@scroll` | Make content container scrollable  | `boolean` | `false` |
