import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import SwipeSupportMixin from 'ember-notifier/mixins/swipe-support';
import defaultValue from 'ember-notifier/utils/default-value';
import layout from './template';

/**
 * The notification component which displays the icon, content, and close button.
 *
 * Inline usage:
 * ```hbs
 * {{ember-notifier-notification
 *   notification=notification
 *   close=(action "remove" notification)}}
 * ```
 *
 * Custom notification components:
 * ```hbs
 * {{ember-notifier-notification
 *   notification=notification
 *   close=(action "remove" notification)
 *   iconComponent='my-icon-component'
 *   contentComponent='my-content-component'
 *   closeComponent='my-close-component'}}
 * ```
 *
 * If the mouse enters the notification and the notification is scheduled to be removed, it will be
 * paused and then restarted when the mouse leaves. If the user swipes right, the notification will
 * be closed.
 *
 * @class EmberNotifierNotification
 */
export default Component.extend(SwipeSupportMixin, {
  layout,

  notifier: service(),

  classNames: ['ember-notifier-notification-base'],
  classNameBindings: ['typeClass', 'animationStateClass'],
  attributeBindings: ['role'],
  role: 'alert',

  /**
   * The notification options object.
   *
   * @argument notification
   * @type !Object
   */
  notification: undefined,

  /**
   * Closure action to remove the notification.
   *
   * @argument close
   * @type ember/action
   */
  close: null,

  /**
   * The notification type class name.
   *
   * @argument typeClass
   * @type string
   * @readOnly
   */
  typeClass: readOnly('notification.type'),

  /**
   * The notification animation state class name.
   *
   * @argument animationStateClass
   * @type string
   * @readOnly
   */
  animationStateClass: readOnly('notification.animationState'),

  /**
   * The number of pixels a user must move before notification will close.
   *
   * @argument swipeThreshold
   * @type number
   * @readOnly
   */
  swipeThreshold: readOnly('notification.swipeThreshold'),

  /**
   * The number of milliseconds a user must move before notification will close.
   *
   * @argument swipeTimeout
   * @type number
   * @readOnly
   */
  swipeTimeout: readOnly('notification.swipeTimeout'),

  /**
   * The swipe direction, "left" or "right", to close a notification.
   *
   * @argument swipeDirection
   * @type string
   * @readOnly
   */
  swipeDirection: readOnly('notification.swipeDirection'),

  /**
   * The icon component to render.
   *
   * Default is: `ember-notifier-notification/icon`.
   *
   * @argument iconComponent
   * @type string
   */
  iconComponent: defaultValue('ember-notifier-notification/icon'),

  /**
   * The content component to render.
   *
   * Default is: `ember-notifier-notification/content`.
   *
   * @argument contentComponent
   * @type string
   */
  contentComponent: defaultValue('ember-notifier-notification/content'),

  /**
   * The close component to render.
   *
   * Default is: `ember-notifier-notification/close`.
   *
   * @argument closeComponent
   * @type string
   */
  closeComponent: defaultValue('ember-notifier-notification/close'),

  willDestroyElement() {
    this._super(...arguments);

    const notification = this.get('notification');
    if (notification.get('timer')) {
      this.get('notifier').cancelRemoval(notification);
    }
  },

  actions: {
    setOption(property, value) {
      this.get('notification').set(property, value);
    }
  },

  mouseEnter(/* event */) {
    const notification = this.get('notification');
    if (notification.get('duration') > 0) {
      this.get('notifier').cancelRemoval(notification);
    }
  },

  mouseLeave(/* event */) {
    const notification = this.get('notification');
    if (notification.get('duration') > 0) {
      this.get('notifier').scheduleRemoval(notification);
    }
  },

  onSwipe(direction) {
    if (this.get('swipeDirection') === direction) {
      this.close();
    }
  }
});
