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

## Properties

- `@titlePartOne`: top part of the title
- `@titlePartTwo`: bottom part of the title
