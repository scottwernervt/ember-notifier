# Options

Notification options can be set globally and overridden at run time 
when adding a notification.

## Global

In `config/environment.js`, you can override the service defaults in the 
`emberNotifier` object:

{{docs-snippet name="global-options.js" title="config/environment.js"}}

The position can be set to: `is-top`, `is-top-left`, `is-top-right`, 
`is-bottom`, `is-bottom-left`, or `is-bottom-right`.

## Notification

The global options can be overriden per notification. In addition, extra
options like `onRemove()` and `messageComponent` can be included.

{{docs-snippet name="notification-options.js" title="component.js"}}
