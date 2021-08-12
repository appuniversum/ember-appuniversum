# Body container

---

## Body container

{{#docs-demo as |demo|}}
  {{#demo.example name='au-body-container.hbs'}}
    <AuBodyContainer>
      <div class="au-d-component-block" style="height: 30rem;">
        This block will take up all the vertical space left, but will not be scrollable &mdash; even if the content is longer than the vertical space that is left.
      </div>
    </AuBodyContainer>
  {{/demo.example}}
  {{demo.snippet 'au-body-container.hbs'}}
{{/docs-demo}}

## Body container with scroll

{{#docs-demo as |demo|}}
  {{#demo.example name='au-body-container-scroll.hbs'}}
    <AuBodyContainer @scroll={{true}}>
      <div class="au-d-component-block">
        This block will take up all the vertical space left, and will be scrollable if the content is longer than that vertical space that is left.
      </div>
    </AuBodyContainer>
  {{/demo.example}}
  {{demo.snippet 'au-body-container-scroll.hbs'}}
{{/docs-demo}}

## Body container arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@scroll` | Make body container scrollable  | `boolean` | `false` |
