# Animation

`ember-notifier` uses CSS transitions to animate adding and removing of 
a notification.

## Custom

Custom animation classes can be set globally using global config options.

{{docs-snippet name='animation-config-environment.js' title='config/environment.js'}}

The option `animationTimeout` is the number of milliseconds before a 
notification is removed.
Ideally, it should equal the CSS `animation-delay` property value.

Check out [animista](http://animista.net/) for various CSS transition 
examples.

## Disable

To disable, set `showAnimationClass` and `hideAnimationClass` classes to 
`null` and `animationTimeout` to `0`.

{{docs-snippet name='disable-animation-config-environment.js' title='config/environment.js'}}
