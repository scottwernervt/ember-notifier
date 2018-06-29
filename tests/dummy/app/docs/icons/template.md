# Icons

Ember Notifier does not ship with an icon framework. You can take
advantage of the global config icon class options if using a web font.
For SVG icons, it is recommended to create a custom icon component.

## Web Font

{{#tailwind-alert isInfo=true}}
  Example using [Font Awesome 5 Web Fonts with CSS](https://fontawesome.com/get-started/web-fonts-with-css).
{{/tailwind-alert}}

Define each global config option icon class.

{{docs-snippet name='fa-web-font-config-environment.js' title='config/environment.js'}}

## SVG

{{#tailwind-alert isInfo=true}}
  Example using [ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome).
{{/tailwind-alert}}

Create an icon component.

{{#docs-snippet name="generate-notification-icon.sh"}}
  ember g component notification-icon
{{/docs-snippet}}

{{#docs-demo as |demo|}}
  {{demo.snippet 'fa-svg-component.js' label='component.js'}}
  {{demo.snippet 'fa-svg-component.hbs' label='template.hbs'}}
{{/docs-demo}}

Define icon names in the global options config.

{{docs-snippet name='fa-svg-config-environment.js' title='config/environment.js'}}

Set `notification-icon` for `iconComponent` argument.

{{docs-snippet name='fa-svg-application.hbs' title='templates/application.hbs'}}
