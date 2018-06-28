import Component from '@ember/component';
import layout from './template';

/**
 * Message render component.
 *
 * Inline usage:
 * ```hbs
 * {{ember-notifier-notification/message
 *   title=notification.title
 *   message=notification.message}}
 * ```
 *
 * If `messageComponent` is passed as an argument, the component is rendered with the following
 * arguments:
 * ```hbs
 * {{component
 *   messageComponent
 *   title=title
 *   message=message
 *   setOption=setOption}}
 * ```
 *
 * @class Message
 */
export default Component.extend({
  layout,

  classNames: ['ember-notifier-message'],

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
   * Message component.
   *
   * @argument messageComponent
   * @type [Component]
   */
  messageComponent: null,

  /**
   * Closure action to change a property on the notification object
   *
   * @argument setOption
   * @type ember/action
   */
  setOption: null,
});
