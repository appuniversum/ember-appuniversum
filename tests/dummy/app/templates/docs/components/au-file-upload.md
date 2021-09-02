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
      />
  {{/demo.example}}
  {{demo.snippet 'au-image-upload.hbs' language="hbs"}}
  {{demo.snippet 'au-image-upload.js' language="js"}}
{{/docs-demo}}

## Model
After uploading the file, this component will fetch the file metadata from the backend. It assumes the id returned from the service can be used in ember-data call using `store.FindRecord(this.args.modelName, id)`. The model is not provided by this addon.

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
| `@modelName`                | Used when loading the file metadata after upload            | `string`  | "file"                                          |
| `@multiple`                 | whether multiple files can be selected when uploading       | `boolean` |                                                 |
| `@onFinishUpload`           | action called when upload was finished successfully         | `action`  | null                                            |
| `@onQueueUpdate`            | action called when queue was updated                        | `action`  | null                                            |
| `@title`                    | title shown on the dropzone                                 | `string`  | "Bestanden toevoegen"                           |
