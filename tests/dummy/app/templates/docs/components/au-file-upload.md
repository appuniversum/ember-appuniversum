# File upload
---
This is an appuniversum wrapper around [ember-file-upload](https://adopted-ember-addons.github.io/ember-file-upload/), designed to work with the semantic works [file service](https://github.com/mu-semtech/file-service).

## Example

{{#docs-demo as |demo|}}
  {{#demo.example name="au-image-upload.hbs"}}
    <AuFileUpload
      @accept="image/*"
      @onFinishUpload={{this.uploadedImage}} 
      @title="upload file"
      @multiple={{false}}
      class="test"
      />
  {{/demo.example}}
  {{demo.snippet 'au-image-upload.hbs' language="hbs"}}
  {{demo.snippet 'au-image-upload.js' language="js"}}
{{/docs-demo}}

## Model
After uploading the file, this component will call the `onFinishUpload` callback with the id returned by the backend.  If you're using ember-data you can use the following model to fetch the metadata using  `store.findRecord('file', id)`. 
Note: The model is not provided by this addon. The datetime transform used in this example is provided by [mu-transform-helpers](https://github.com/mu-semtech/ember-mu-transform-helpers).

{{#docs-demo}}
  {{docs-snippet name="file-model.js" language="js"}}
{{/docs-demo}}

## Arguments
| Argument                    | Description                                                 | Type      | Default                                         |
|-----------------------------|-------------------------------------------------------------|-----------|-------------------------------------------------|
| `@accept`                   | A list of MIME types/extensions to be accepted by the input | `string`  |                                                 |
| `@endPoint`                 | endpoint file is being uploaded to                          | `string`  | "/files"                                        |
| `@helpTextDragDrop`         | help text shown below the title on the dropzone             | `string`  | "Sleep de bestanden naar hier om toe te voegen" |
| `@helpTextFileNotSupported` | error shown when unsupported file format is added           | `string`  | "Dit bestandsformaat wordt niet ondersteund."   |
| `@maxFileSizeMB`            | maximum filesize allowed (in MB)                            | `number`  | 20                                              |
| `@multiple`                 | whether multiple files can be selected when uploading       | `boolean` |                                                 |
| `@onFinishUpload`           | action called when upload was finished successfully         | `action`  | null                                            |
| `@onQueueUpdate`            | action called when queue was updated                        | `action`  | null                                            |
| `@title`                    | title shown on the dropzone                                 | `string`  | "Bestanden toevoegen"                           |
