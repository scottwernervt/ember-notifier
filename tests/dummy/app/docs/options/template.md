# Options

Notification options can be set globally and overridden when launching.

## Global

In `config/environment.js`, the service defaults can be overridden using 
the `emberNotifier` object:

{{docs-snippet name="global-options.js" title="config/environment.js"}}

The notification container `position` can be set to:

* `is-top` 
* `is-top-left`
* `is-top-right`
* `is-bottom`
* `is-bottom-left` 
* `is-bottom-right`

## Notification

The global config options can be overridden per notification. Extra 
options such as `onRemove()` callback function and `contentComponent` 
can be included. See {{#link-to "docs.api.item" "services/notifier"}}ember-notifier.add(){{/link-to}}
for all notification options.

{{docs-snippet name="notification-options.js" title="component.js"}}
