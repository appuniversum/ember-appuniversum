import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route("atoms", function() {
      this.route("au-badge");
      this.route("au-button");
      this.route("au-button-group");
      this.route('au-brand');
      this.route('au-content');
      this.route('au-heading');
      this.route('au-helptext');
      this.route('au-hr');
      this.route('au-icon');
      this.route('au-form-input');
      this.route('au-form-label');
      this.route('au-form-textarea');
      this.route('au-form-radio');
      this.route('au-form-checkbox');
      this.route('au-link');
      this.route('au-loader');
      this.route("au-navigation-link");
      this.route("au-pill");
    });

    this.route("components", function() {
      this.route("au-alert");
      this.route("au-card");
      this.route("au-dropdown");
      this.route("au-modal");
      this.route("au-data-table");
      this.route("ember-power-select");
    });

    this.route("patterns", function() {
      this.route("au-body-container");
      this.route("au-content-header");
      this.route("au-main-container");
      this.route("au-main-header");
      this.route("au-main-footer");
      this.route("au-toolbar");
    });

    this.route("index");
  });

  this.route('not-found', { path: '/*path' });

  this.route('atoms', function() {
    this.route('au-badge');
  });
});

export default Router;
