# Main container (draft)

---

## Container demo

{{#docs-demo as |demo|}}
  {{#demo.example name='au-main-container.hbs'}}
    <div class="au-c-main-container">
      <div class="au-c-main-container__sidebar">
        <div class="au-d-component-block">
          Sidebar
        </div>
      </div>
      <div class="au-c-main-container__content">
        <div class="au-d-component-block">
          Main content
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-main-container.hbs'}}
{{/docs-demo}}

## Container with scroll

{{#docs-demo as |demo|}}
  {{#demo.example name='au-main-container-scroll.hbs'}}
    <div class="au-c-main-container">
      <div class="au-c-main-container__sidebar">
        <div class="au-d-component-block">
          Sidebar
        </div>
      </div>
      <div class="au-c-main-container__content au-c-main-container__content--scroll">
        <div class="au-d-component-block au-d-component-block--overflow">
          Main content
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-main-container-scroll.hbs'}}
{{/docs-demo}}
