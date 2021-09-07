import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DocsComponentsAuFileUploadController extends Controller {
  // BEGIN-SNIPPET au-image-upload.js
  @action
  async uploadedImage(fileId) {
    const fileMetaData = await this.store.findRecord('file', fileId);
    //...
  }
  // END-SNIPPET
}
