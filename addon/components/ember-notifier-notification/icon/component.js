import Component from '@ember/component';
import layout from './template';

/**
 * Icon component.
 *
 * Inline usage:
 * ```hbs
 * {{ember-notifier-notification/icon icon=notification.icon}}
 * ```
 *
 * Block param usage:
 * ```hbs
 * {{#ember-notifier-notification/icon}}
 *    {{fa-icon notification.icon}}
 * {{/ember-notifier-notification/icon}}
 * ```
 *
 * @class Icon
 */
export default Component.extend({
  layout,

  classNames: ['ember-notifier-icon'],

  /**
   * Icon class name or object name.
   *
   * @argument icon
   * @type string
   */
  icon: null,
});
