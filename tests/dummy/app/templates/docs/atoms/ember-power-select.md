# Form: ember power select (draft)

---

Styling of [https://ember-power-select.com/](https://ember-power-select.com/)

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
