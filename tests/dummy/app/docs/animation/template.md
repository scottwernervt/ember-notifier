# Animation

CSS transitions are used to animate the addition and removal of a 
notification.

## Customize

Custom animation classes can be set using global config options.

{{docs-snippet name='animation-config-environment.js' title='config/environment.js'}}

The `animationTimeout` option is the number of milliseconds before a 
notification is removed.
Ideally, this should equal the CSS `animation-delay` property value. 
Check out [animista](http://animista.net/) for various CSS transition 
examples.

## Disable

To disable, set `showAnimationClass` and `hideAnimationClass` classes to 
`null` and `animationTimeout` to `0`.

{{docs-snippet name='disable-animation-config-environment.js' title='config/environment.js'}}
