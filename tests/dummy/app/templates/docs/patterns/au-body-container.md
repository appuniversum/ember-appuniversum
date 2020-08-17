# Body container (draft)

---

## Body container

{{#docs-demo as |demo|}}
  {{#demo.example name='au-body-container.hbs'}}
    <div class="au-c-main-container" style="max-height: 20rem;">
      <div class="au-c-main-container__content">
        <div class="au-c-body-container">
          <div class="au-d-component-block" style="height: 30rem;">
            This block will take up all the vertical space left, but will not be scrollable &mdash; even if the content is longer than the vertical space that is left.
          </div>
       </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-body-container.hbs'}}
{{/docs-demo}}

## Body container with scroll

{{#docs-demo as |demo|}}
  {{#demo.example name='au-body-container-scroll.hbs'}}
    <div class="au-c-main-container">
      <div class="au-c-main-container__content">
        <div class="au-c-body-container au-c-body-container--scroll" style="max-height: 20rem;">
          <div class="au-d-component-block" style="height: 30rem; min-height: 30rem;">
            This block will take up all the vertical space left, and will be scrollable if the content is longer than that vertical space that is left.
          </div>
        </div>
      </div>
    </div>
  {{/demo.example}}
  {{demo.snippet 'au-body-container-scroll.hbs'}}
{{/docs-demo}}
