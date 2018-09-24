//! BEGIN-SNIPPET global-options.js
module.exports = function(environment) {
  let ENV = {
    emberNotifier: {
      // notification container
      position: 'is-top-right',
      // notification styles and icons
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
      // notification animation
      showAnimationClass: 'ember-notifier-notification-show',
      hideAnimationClass: 'ember-notifier-notification-hide',
      animationTimeout: 500, // ms
      duration: 4200, // ms
    },
  };

  return ENV;
};
//! END-SNIPPET
