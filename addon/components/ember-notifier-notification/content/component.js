import Component from '@ember/component';
import layout from './template';

/**
 * The content component which displays the title and message.
 *
 * Inline usage:
 * ```hbs
 * {{ember-notifier-notification/content
 *   title=notification.title
 *   message=notification.message}}
 * ```
 *
 * Passing an a component name to `contentComponent` will rendered with the following
 * arguments:
 * ```hbs
 * {{component
 *   contentComponent
 *   title=title
 *   message=message
 *   setOption=setOption}}
 * ```
 *
 * @class Content
 */
export default Component.extend({
  layout,

  classNames: ['ember-notifier-content'],

  /**
   * Notification title/header.
   *
   * @argument title
   * @type [string]
   */
  title: null,

  /**
   * Notification message.
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
   * Closure action to change a property on the notification object.
   *
   * @argument setOption
   * @type ember/action
   */
  setOption: null,
});
