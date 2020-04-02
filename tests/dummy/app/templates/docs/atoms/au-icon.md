# Icon

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-button.hbs'}}
    <AuIcon @icon="arrows-up-down" />
  {{/demo.example}}
  {{demo.snippet 'au-button.hbs'}}
{{/docs-demo}}

## Usage
Add your icons to the `addon/icons` folder as `.svg`. Export your svg's without fill or stroke colors so we can style these with CSS.

## Properties
- `@icon`: pass the svg name to select the icon
- `@size`: [ large ]
- `@alignment`: add [ left | right ] margin to the icon - default is none
- `@ariaHidden`: [ true | false ] - default is true

## Included icons

<div class="au-o-box au-d-component">
<ul class="au-o-grid">
  <li class="au-o-grid__item au-u-1-4 au-u-1-6@medium">
    <AuIcon @icon="arrows-up-down" @size="large" />
    <pre>arrows-up-down</pre>
  </li>
  <li class="au-o-grid__item au-u-1-4 au-u-1-6@medium">
    <AuIcon @icon="logout" @size="large" />
    <pre>logout</pre>
  </li>
  <li class="au-o-grid__item au-u-1-4 au-u-1-6@medium">
    <AuIcon @icon="help" @size="large" />
    <pre>arrows-up-down</pre>
  </li>
  <li class="au-o-grid__item au-u-1-4 au-u-1-6@medium">
    <AuIcon @icon="arrow-back" @size="large" />
    <pre>arrows-up-down</pre>
  </li>
</ul>
</div>
