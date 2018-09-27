# Touch

A notification can be closed by swiping right on a touch device.

## Customize

The following options are supported:

* `swipeDirection` -- The horizontal direction the user must 
swipe. Can be `left`, `right`, or `null`. Defaults to `right`.

* `minSwipeDistance` -- The minimum distance (px) the user must 
swipe. Defaults to `150`.

* `maxSwipeTime` -- The maximum amount of time (ms) it must take the 
user to swipe. Defaults to `300`.

Each option can be set using the global config or when launching a 
notification.

{{docs-snippet name='touch-config-environment.js' title='config/environment.js'}}

{{#docs-snippet name="touch-primary-function.js"}}
  this.get('notifier').primary('Primary notification', {
    contentComponent: 'large-dynamic-component',
    minSwipeDistance: '420',
  });
{{/docs-snippet}}

## Disable

Set `swipeDirection` to `null` to disable closing a notification by a 
swipe event.
