//! BEGIN-SNIPPET global-options.js
module.exports = function (environment) {
  let ENV = {
    emberNotifier: {
      position: 'is-top-right',
      duration: 4200, // ms
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
      showAnimationClass: 'ember-notifier-notification-show',
      hideAnimationClass: 'ember-notifier-notification-hide',
      animationTimeout: 500, // ms
      swipeThreshold: 120, // px
      swipeTimeout: 500, // ms
    },
  };

  return ENV;
};
//! END-SNIPPET
