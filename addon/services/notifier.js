import { getOwner } from '@ember/application';
import { A } from '@ember/array';
import EmberObject, { computed } from '@ember/object';
import { assign } from '@ember/polyfills';
import { cancel, later, run } from '@ember/runloop';
import Service from '@ember/service';

const defaultConfig = {
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
  swipeThreshold: 120, // pixels
  swipeTimeout: 500, // ms
};

/**
 * The notifier service is the public API that provides access to displaying, adding, or removing
 * notifications.
 *
 * Usage:
 * ```js
 * import Controller from '@ember/controller';
 * import { inject as service } from '@ember/service';
 *
 * export default Controller.extend({
 *  notifier: service(),
 * });
 * ```
 *
 * @class NotifierService
 * @public
 */
export default Service.extend({
  /**
   * Notification array.
   *
   * @property notification
   * @type {ember/array}
   */
  notifications: null,

  config: computed(function () {
    const config = getOwner(this).resolveRegistration('config:environment').emberNotifier || {};
    return assign(defaultConfig, config);
  }),

  init() {
    this._super(...arguments);
    this.set('notifications', A());
  },

  /**
   * Adds a primary styled notification.
   *
   * @method primary
   * @param {string} message The notification message.
   * @param {Object} [options] Optional notification options.
   */
  primary(message, options) {
    this.add(assign({
      message,
      type: this.get('config.primaryClass'),
      icon: this.get('config.primaryIcon'),
    }, options));
  },

  /**
   * Adds an info styled notification.
   *
   * @method info
   * @param {string} message The notification message.
   * @param {Object} [options] Optional notification options.
   */
  info(message, options) {
    this.add(assign({
      message,
      type: this.get('config.infoClass'),
      icon: this.get('config.infoIcon'),
    }, options));
  },

  /**
   * Adds a success styled notification.
   *
   * @method success
   * @param {string} message The notification message.
   * @param {Object} [options] Optional notification options.
   */
  success(message, options) {
    this.add(assign({
      message,
      type: this.get('config.successClass'),
      icon: this.get('config.successIcon'),
    }, options));
  },

  /**
   * Adds a warning styled notification.
   *
   * @method warning
   * @param {string} message The notification message.
   * @param {Object} [options] Optional notification options.
   */
  warning(message, options) {
    this.add(assign({
      message,
      type: this.get('config.warningClass'),
      icon: this.get('config.warningIcon'),
    }, options));
  },

  /**
   * Adds a danger styled notification.
   *
   * @method danger
   * @param {string} message The notification message.
   * @param {Object} [options] Optional notification options.
   */
  danger(message, options) {
    this.add(assign({
      message,
      type: this.get('config.dangerClass'),
      icon: this.get('config.dangerIcon'),
    }, options));
  },

  /**
   * Adds a secondary styled notification.
   *
   * @method secondary
   * @param {string} message The notification message.
   * @param {Object} [options] Optional notification options.
   */
  secondary(message, options) {
    this.add(assign({
      message,
      type: this.get('config.secondaryClass'),
      icon: this.get('config.secondaryIcon'),
    }, options));
  },

  /**
   * Adds a custom notification.
   *
   * @method add
   * @param {Object} options Notification options.
   * @param {string} options.type Styled class name.
   * @param {number} options.duration Remove notification after "n" milliseconds. Disable scheduled
   * removal with a value of "0".
   * @param {string} [options.title] Optional title.
   * @param {string} [options.message] Optional message.
   * @param {string} [options.contentComponent] Optional content component name.
   * @param {string} [options.icon] Optional icon class name or object name.
   * @param {string} [options.showAnimationClass] Optional show animation class name.
   * @param {string} [options.hideAnimationClass] Optional hide animation class name.
   * @param {string} [options.animationTimeout] Optional number of milliseconds before a
   * notification is removed.
   * @param {function} [options.onRemove] Callback function when notification is removed.
   */
  add(options = {}) {
    if (!options.message && !options.contentComponent) {
      throw new Error('No message or contentComponent set.');
    }

    const defaultOptions = EmberObject.create({
      type: this.get('config.primaryClass'),
      duration: this.get('config.duration'),
      animationState: this.get('config.showAnimationClass'),
      animationTimeout: this.get('config.animationTimeout'),
      swipeThreshold: this.get('config.swipeThreshold'),
      swipeTimeout: this.get('config.swipeTimeout'),
      timer: null,
      onRemove: () => void 0,
    });

    const notification = assign(defaultOptions, options);
    this.get('notifications').insertAt(0, notification);

    if (notification.duration > 0) {
      this.scheduleRemoval(notification);
    }
  },

  /**
   * Removes a notification.
   *
   * @method remove
   * @param {Object} notification The notification to remove.
   */
  remove(notification) {
    this.cancelRemoval(notification);
    run(this, () => notification.set('animationState', this.get('config.hideAnimationClass')));
    later(this, () => {
      notification.onRemove();
      this.get('notifications').removeObject(notification);
    }, notification.get('animationTimeout'));
  },

  /**
   * Removes all notifications.
   *
   * @method empty
   */
  empty() {
    this.get('notifications').forEach(notification => this.remove(notification));
  },

  /**
   * Schedules removal of a notification based on a duration property.
   *
   * @method scheduleRemoval
   * @param {Object} notification The notification to schedule the removal on.
   */
  scheduleRemoval(notification) {
    const timer = later(this, () => this.remove(notification), notification.get('duration'));
    notification.set('timer', timer);
  },

  /**
   * Cancels a scheduled removal of a notification.
   *
   * @method cancelRemoval
   * @param {Object} notification The notification to cancel the timer on.
   */
  cancelRemoval(notification) {
    cancel(notification.get('timer'));
  },
});
