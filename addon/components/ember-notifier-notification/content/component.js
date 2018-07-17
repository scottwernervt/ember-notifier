import Component from '@ember/component';
import layout from './template';

/**
 * Message render component.
 *
 * Inline usage:
 * ```hbs
 * {{ember-notifier-notification/content
 *   title=notification.title
 *   message=notification.message}}
 * ```
 *
 * If `contentComponent` is passed as an argument, the component is rendered with the following
 * arguments:
 * ```hbs
 * {{component
 *   contentComponent
 *   title=title
 *   message=message
 *   setOption=setOption}}
 * ```
 *
 * @class Message
 */
export default Component.extend({
  layout,

  classNames: ['ember-notifier-content'],

  /**
   * Notification title (header).
   *
   * @argument title
   * @type [string]
   */
  title: null,

  /**
   * Notification message
   *
   * @argument message
   * @type [string]
   */
  message: null,

  /**
   * Content component.
   *
   * @argument contentComponent
   * @type [Component]
   */
  contentComponent: null,

  /**
   * Closure action to change a property on the notification object
   *
   * @argument setOption
   * @type ember/action
   */
  setOption: null,
});
