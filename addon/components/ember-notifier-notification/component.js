import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import defaultValue from '../../utils/default-value';
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
 * Touch source:
 * [github.com/john-doherty/pure-swipe](https://github.com/john-doherty/pure-swipe)
 *
 * @class EmberNotifierNotification
 */
export default Component.extend({
  layout,

  notifier: service(),

  classNames: ['ember-notifier-notification-base'],
  classNameBindings: ['typeClass', 'animationStateClass'],
  attributeBindings: ['role'],
  role: 'alert',

  // touch swipe
  xDown: 0,
  yDown: 0,
  xDiff: 0,
  yDiff: 0,
  timeDown: 0,

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

  touchStart(event) {
    this.timeDown = Date.now();
    this.xDown = event.touches[0].clientX;
    this.yDown = event.touches[0].clientY;
    this.xDiff = 0;
    this.yDiff = 0;
  },

  touchMove(event) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;
  },

  touchEnd(/* event */) {
    const timeDiff = Date.now() - this.timeDown;

    if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
      if (Math.abs(this.xDiff) > this.swipeThreshold && timeDiff < this.swipeTimeout) {
        if (this.xDiff < 0) {
          this.close();
        }
      }
    }

    this.xDown = 0;
    this.yDown = 0;
    this.timeDown = 0;
  },
});
