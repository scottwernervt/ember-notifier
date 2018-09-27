import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  docsRoute(this, function () {
    // do not need to define index (installation)
    this.route('usage');
    this.route('demo');

    this.route('styles');
    this.route('icons');
    this.route('animation');
    this.route('touch');
    this.route('dynamic');
    this.route('options');
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
