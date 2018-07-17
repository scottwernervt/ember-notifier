import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import config from 'ember-get-config';
import layout from './template';

/**
 * Notification container which positions and displays active notifications.
 *
 * Inline usage:
 * ```hbs
 * {{ember-notifier position="is-top-right"}}
 * ```
 *
 * Block param usage:
 * ```hbs
 * {{#ember-notifier notificationClass='alert' as |notification close|}}
 *    <h5>{{notification.title}}</h5>
 *    <p>{{notification.message}}</p>
 *    <button {{action close}}>Close</button>
 * {{/ember-notifier}}
 * ```
 *
 * @class EmberNotifier
 * @yield {EmberObject} notification The notification object.
 * @yield {ember/action} close Closure action to dismiss the notification.
 */
export default Component.extend({
  layout,

  notifier: service(),

  classNames: ['ember-notifier'],
  classNameBindings: ['position'],

  /**
   * The default class name for notifications.
   *
   * @argument notificationClass
   * @type string
   */
  notificationClass: 'ember-notifier-notification',

  /**
   * The location class name of notifications on the screen.
   *
   * * `is-top`
   * * `is-top-left`
   * * `is-top-right`
   * * `is-bottom`
   * * `is-bottom-left`
   * * `is-bottom-right`
   *
   * @argument position='is-top-right'
   * @type [string]
   */
  position: null,

  /**
   * The default icon component.
   *
   * @argument iconComponent
   * @type [string]
   */
  iconComponent: undefined,

  /**
   * The default message component.
   *
   * @argument contentComponent
   * @type [string]
   */
  contentComponent: undefined,

  /**
   * The default close component.
   *
   * @argument closeComponent
   * @type [string]
   */
  closeComponent: undefined,

  notifications: readOnly('notifier.notifications'),

  init() {
    this._super(...arguments);
    const conf = config['emberNotifier'] || {};
    if (!this.get('position')) {
      this.set('position', conf.position || 'is-top-right');
    }
  },

  willDestroyElement() {
    this.get('notifier').empty();
    this._super(...arguments);
  },

  actions: {
    remove(message) {
      this.get('notifier').remove(message);
    },
  },
});
