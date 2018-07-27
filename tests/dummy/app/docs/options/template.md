# Options

Notification options can be set globally and overridden at run time.

## Global

In `config/environment.js`, the service defaults can be overridden using 
the `emberNotifier` object:

{{docs-snippet name="global-options.js" title="config/environment.js"}}

The notification position can be set to: `is-top`, `is-top-left`, 
`is-top-right`, `is-bottom`, `is-bottom-left`, or `is-bottom-right`.

## Notification

The global options can be overriden per notification. Extra options 
such as `onRemove()` and `contentComponent` can be included.

{{docs-snippet name="notification-options.js" title="component.js"}}
