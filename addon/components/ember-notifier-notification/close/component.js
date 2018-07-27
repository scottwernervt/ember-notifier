import Component from '@ember/component';
import layout from './template';

/**
 * The close button component.
 *
 * Inline usage:
 * ```hbs
 * {{ember-notifier-notification/close close=close}}
 * ```
 *
 * Block param usage:
 * ```hbs
 * {{#ember-notifier-notification/close}}
 *    <button {{action close}}>Close</button>
 * {{/ember-notifier-notification/close}}
 * ```
 *
 * @class Close
 */
export default Component.extend({
  layout,

  classNames: ['ember-notifier-close'],

  /**
   * Closure action to dismiss the notification.
   *
   * @argument close
   * @type ember/action
   */
  close: null,
});
