# Content header

---

{{#docs-demo as |demo|}}
  {{#demo.example name='au-content-header.hbs'}}
    <AuContentHeader @titlePartOne="Vlaanderen" @titlePartTwo="is lokaal bestuur">
      <img sizes="50vw" src="/assets/images/loket-header-1600.jpg" srcset="/assets/images/loket-header-320.jpg 320w, /assets/images/loket-header-1024.jpg 1024w, /assets/images/loket-header-1600.jpg 1600w" alt="Foto van een laptop met daarop het vlaanderen logo.">
    </AuContentHeader>
  {{/demo.example}}
  {{demo.snippet 'au-content-header.hbs'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='au-content-header-alt.hbs'}}
    <AuContentHeader @titlePartOne="Vlaanderen" @titlePartTwo="is lokaal bestuur">
      <img sizes="50vw" src="/assets/images/loket-header-1600.jpg" srcset="/assets/images/loket-header-320.jpg 320w, /assets/images/loket-header-1024.jpg 1024w, /assets/images/loket-header-1600.jpg 1600w" alt="Foto van een laptop met daarop het vlaanderen logo.">
    </AuContentHeader>
  {{/demo.example}}
  {{demo.snippet 'au-content-header-alt.hbs'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='au-content-header-full.hbs'}}
    <AuContentHeader @titlePartOne="Vlaanderen" @titlePartTwo="is lokaal bestuur" @pictureSize="large">
      <img sizes="50vw" src="/assets/images/loket-header-1600.jpg" srcset="/assets/images/loket-header-320.jpg 320w, /assets/images/loket-header-1024.jpg 1024w, /assets/images/loket-header-1600.jpg 1600w" alt="Foto van een laptop met daarop het vlaanderen logo.">
    </AuContentHeader>
  {{/demo.example}}
  {{demo.snippet 'au-content-header-full.hbs'}}
{{/docs-demo}}

## Arguments

| Argument      | Description | Type | Default value |
| ------------- | ----------- | ---- | ------------- |
| `@titlePartOne` | Top part of the title | `string` | - |
| `@titlePartTwo` | Bottom part of the title | `string` | - |
| `@pictureSize` | Sets the size of the header picture | `default` / `large` | `default` |
