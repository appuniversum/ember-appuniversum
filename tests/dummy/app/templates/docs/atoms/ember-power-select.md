# Form: ember power select (draft)

---

`@appuniversum/ember-appuniversum` only provides styles for [ember-power-select](https://ember-power-select.com/). If you want to use the components make sure the `ember-power-select` [addon is installed](https://ember-power-select.com/docs/installation) first. Once installed, replace the styles provided by the addon (`@import "ember-power-select";`) with the appuniversum version (`@import "ember-appuniversum/p-ember-power-select";`).

## Single select

{{#docs-demo as |demo|}}
  {{#demo.example name='ember-power-select.hbs'}}
    <PowerSelect
      @allowClear={{true}}
      @disabled={{disabled}}
      @searchEnabled={{true}}
      @loadingMessage="Aan het laden..."
      @noMatchesMessage="Geen resultaten"
      @searchMessage="Typ om te zoeken"
      @options={{this.singleselects}}
      @selected={{this.singleselect}}
      @onChange={{fn (mut this.singleselect)}} as |singleselect|>
      {{singleselect}}
    </PowerSelect>
  {{/demo.example}}
  {{demo.snippet 'ember-power-select.hbs'}}
{{/docs-demo}}

## Multiple select

{{#docs-demo as |demo|}}
  {{#demo.example name='ember-power-select-multiple.hbs'}}
    <PowerSelectMultiple
      @allowClear={{true}}
      @disabled={{disabled}}
      @searchEnabled={{true}}
      @loadingMessage="Aan het laden..."
      @noMatchesMessage="Geen resultaten"
      @searchMessage="Typ om te zoeken"
      @options={{this.multipleselects}}
      @selected={{this.multipleselect}}
      @onChange={{fn (mut this.multipleselect)}} as |multipleselect|>
      {{multipleselect}}
    </PowerSelectMultiple>

  {{/demo.example}}
  {{demo.snippet 'ember-power-select-multiple.hbs'}}
{{/docs-demo}}
