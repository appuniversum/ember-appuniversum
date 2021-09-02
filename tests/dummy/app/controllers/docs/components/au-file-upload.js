import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsComponentsAuFileUploadController extends Controller {
  // BEGIN-SNIPPET au-image-upload.js
  @action
  uploadedImage(file) {
    // file is an ember-data record of type @modeName
  }
  // END-SNIPPET
}
