//! BEGIN-SNIPPET global-options.js
module.exports = function(environment) {
  let ENV = {
    emberNotifier: {
      // styles and icons
      primaryClass: 'is-primary',
      primaryIcon: 'fas fa-bell',
      infoClass: 'is-info',
      infoIcon: 'fas fa-info',
      successClass: 'is-success',
      successIcon: 'fas fa-check',
      warningClass: 'is-warning',
      warningIcon: 'fas fa-exclamation',
      dangerClass: 'is-danger',
      dangerIcon: 'fas fa-fire',
      secondaryClass: 'is-secondary',
      secondaryIcon: 'fas fa-comment',
      // notification components
      iconComponent: 'ember-notifier-notification/icon',
      contentComponent: 'ember-notifier-notification/content',
      closeComponent: 'ember-notifier-notification/close',
      // options
      position: 'is-top-right',
      duration: 4200,
    },
  };

  return ENV;
};
//! END-SNIPPET
