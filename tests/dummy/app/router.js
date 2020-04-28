import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route("atoms", function() {
      this.route('au-brand');
      this.route('au-content');
      this.route("au-button");
      this.route('au-heading');
      this.route('au-icon');
      this.route('au-input');
      this.route('au-link');
      this.route("au-navigation-link");
      this.route('au-textarea');
      this.route("au-pill");
    });

    this.route("components", function() {
      this.route("au-alert");
      this.route("au-dropdown");
    });

    this.route("patterns", function() {
      this.route("au-main-header");
      this.route("au-main-footer");
      this.route("au-toolbar");
    });

    this.route("index");
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
