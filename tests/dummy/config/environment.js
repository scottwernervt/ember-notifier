'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    emberNotifier: {
      'position': 'is-top',
      // showAnimationClass: null,
      // hideAnimationClass: null,
      // animationTimeout: 500, // ms
      //
      // addon
      //
      // 'primaryClass': 'is-primary',
      // 'infoClass': 'is-info',
      // 'successClass': 'is-success',
      // 'warningClass': 'is-warning',
      // 'dangerClass': 'is-danger',
      // 'secondaryClass': 'is-secondary',
      //
      // bulma
      //
      // 'secondaryClass': 'is-link',
      //
      // spectre
      //
      // 'primaryClass': 'toast-primary',
      // 'infoClass': '',
      // 'successClass': 'toast-success',
      // 'warningClass': 'toast-warning',
      // 'dangerClass': 'toast-error',
      //
      // zurb foundation
      //
      // 'primaryClass': 'primary',
      // 'successClass': 'success',
      // 'warningClass': 'warning',
      // 'dangerClass': 'alert',
      // 'secondaryClass': 'secondary',
      //
      // bootstrap
      //
      // 'primaryClass': 'alert-primary',
      // 'infoClass': 'alert-info',
      // 'successClass': 'alert-success',
      // 'warningClass': 'alert-warning',
      // 'dangerClass': 'alert-danger',
      // 'secondaryClass': 'alert-secondary',
      //
      // font awesome web font
      //
      // 'primaryIcon': 'fas fa-comment',
      // 'infoIcon': 'fas fa-info',
      // 'successIcon': 'fas fa-check',
      // 'warningIcon': 'fas fa-exclamation',
      // 'dangerIcon': 'fas fa-fire',
      // 'secondaryIcon': 'fas fa-bell',
      //
      // font awesome svg icon
      //
      // 'primaryIcon': 'bell',
      // 'infoIcon': 'info',
      // 'successIcon': 'check',
      // 'warningIcon': 'exclamation',
      // 'dangerIcon': 'fire',
      // 'secondaryIcon': 'comment',
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Allow ember-cli-addon-docs to update the rootURL in compiled assets
    ENV.rootURL = 'ADDON_DOCS_ROOT_URL';
    // here you can enable a production-specific feature
  }

  return ENV;
};
