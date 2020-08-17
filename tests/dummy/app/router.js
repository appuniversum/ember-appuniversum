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
      this.route('au-brand');
      this.route('au-content');
      this.route('au-control');
      this.route('au-heading');
      this.route('au-hr');
      this.route('au-icon');
      this.route('au-input');
      this.route('au-link');
      this.route("au-navigation-link");
      this.route("au-pill");
      this.route('au-textarea');
      this.route('au-loader');
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
