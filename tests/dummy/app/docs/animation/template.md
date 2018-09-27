# Animation

CSS transitions are used to animate the launching and closing of a 
notification. Check out [animista](http://animista.net/) for various 
CSS transitions.

## Customize

The following options are supported:

* `showAnimationClass` -- The transition class applied when a 
notification is launched. Defaults to 
`ember-notifier-notification-show`.

* `hideAnimationClass` -- The transition class applied when a 
notification is closed. Defaults to `ember-notifier-notification-hide`.

* `animationTimeout` -- The number of milliseconds before a 
notification is closed. It should equal the CSS `animation-delay` 
property value. Defaults to `500`. 

Each option can be set using the global config or when launching a 
notification.

{{docs-snippet name='animation-config-environment.js' title='config/environment.js'}}

{{#docs-snippet name="animation-primary-function.js"}}
  this.get('notifier').primary('Primary notification', { 
    showAnimationClass: 'my-animation-show-class',
  });
{{/docs-snippet}}

## Disable

Set `showAnimationClass` and `hideAnimationClass` classes to `null` 
and `animationTimeout` to `0`.
