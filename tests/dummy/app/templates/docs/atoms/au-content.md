# Content

---

## Default

{{#docs-demo as |demo|}}
  {{#demo.example name='au-content.hbs'}}
    <AuContent>
      <h1>
        Title
      </h1>
      <p>
        Paragraph ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt auctor purus vitae vestibulum. Donec purus quam, iaculis ac eleifend eget, varius nec libero. Fusce non metus imperdiet, suscipit ligula vel, tempus diam. Donec lobortis sapien enim, id pharetra nulla ullamcorper et. Etiam pulvinar orci a suscipit consectetur. In id nunc eget ex vulputate dictum ac et quam. Pellentesque cursus ultricies urna, ultrices molestie lacus sodales a. Donec tempor lectus tortor, sed eleifend metus eleifend et. Nulla neque ante, elementum ac massa eu, hendrerit sollicitudin mauris. In porttitor feugiat lobortis. In tincidunt ornare erat. Vivamus nec ante ut metus tristique ullamcorper. Nulla non lectus urna. 
      </p>
      <h2>
        Subtitle
      </h2>
      <p>
        Paragraph ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt auctor purus vitae vestibulum. Donec purus quam, iaculis ac eleifend eget, varius nec libero. Fusce non metus imperdiet, suscipit ligula vel, tempus diam. Donec lobortis sapien enim, id pharetra nulla ullamcorper et. Etiam pulvinar orci a suscipit consectetur. In id nunc eget ex vulputate dictum ac et quam. Pellentesque cursus ultricies urna, ultrices molestie lacus sodales a. Donec tempor lectus tortor, sed eleifend metus eleifend et. Nulla neque ante, elementum ac massa eu, hendrerit sollicitudin mauris. In porttitor feugiat lobortis. In tincidunt ornare erat. Vivamus nec ante ut metus tristique ullamcorper. Nulla non lectus urna. 
      </p>
    </AuContent>
  {{/demo.example}}
  {{demo.snippet 'au-content.hbs'}}
{{/docs-demo}}

## Small

{{#docs-demo as |demo|}}
  {{#demo.example name='au-content-small.hbs'}}
    <AuContent @skin="small">
      <h1>
        Title
      </h1>
      <p>
        Paragraph ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt auctor purus vitae vestibulum. Donec purus quam, iaculis ac eleifend eget, varius nec libero. Fusce non metus imperdiet, suscipit ligula vel, tempus diam. Donec lobortis sapien enim, id pharetra nulla ullamcorper et. Etiam pulvinar orci a suscipit consectetur. In id nunc eget ex vulputate dictum ac et quam. Pellentesque cursus ultricies urna, ultrices molestie lacus sodales a. Donec tempor lectus tortor, sed eleifend metus eleifend et. Nulla neque ante, elementum ac massa eu, hendrerit sollicitudin mauris. In porttitor feugiat lobortis. In tincidunt ornare erat. Vivamus nec ante ut metus tristique ullamcorper. Nulla non lectus urna. 
      </p>
      <h2>
        Subtitle
      </h2>
      <p>
        Paragraph ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt auctor purus vitae vestibulum. Donec purus quam, iaculis ac eleifend eget, varius nec libero. Fusce non metus imperdiet, suscipit ligula vel, tempus diam. Donec lobortis sapien enim, id pharetra nulla ullamcorper et. Etiam pulvinar orci a suscipit consectetur. In id nunc eget ex vulputate dictum ac et quam. Pellentesque cursus ultricies urna, ultrices molestie lacus sodales a. Donec tempor lectus tortor, sed eleifend metus eleifend et. Nulla neque ante, elementum ac massa eu, hendrerit sollicitudin mauris. In porttitor feugiat lobortis. In tincidunt ornare erat. Vivamus nec ante ut metus tristique ullamcorper. Nulla non lectus urna. 
      </p>
    </AuContent>
  {{/demo.example}}
  {{demo.snippet 'au-content-small.hbs'}}
{{/docs-demo}}

## Properties

- `@skin`: [ small ] - smaller text and vertical spacing
