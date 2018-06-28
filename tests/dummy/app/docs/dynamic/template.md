# Dynamic

The notification's message can be dynamic by passing a component to the
`messageComponent` option.

{{#docs-snippet name="message-component-option.js"}}
  this.get('notifier').info(null, { messageComponent: 'my-component' });
{{/docs-snippet}}

We are going to create a background task using <a href="http://ember-concurrency.com/">ember-concurrency</a>.
Based on the task result, the notification will be updated using the 
message component closure action `setOption`. If 
the task fails, it will be toggled to `is-danger` and if 
successful, `is-success`.

Install `ember-concurrency`.

{{#docs-snippet name="install-ember-concurrency"}}
  ember install ember-concurrency
{{/docs-snippet}}

Generate the dynamic message component.

{{#docs-snippet name="ember-generate-notification-icon"}}
  ember g component task-message
{{/docs-snippet}}

{{#docs-demo as |demo|}}
  {{demo.snippet 'task-message.js' label='component.js'}}
  {{demo.snippet 'task-message.hbs' label='template.hbs'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='addon-dynamic-demo-component.hbs'}}
    {{addon-dynamic-demo}}
  {{/demo.example}}
  
  {{demo.snippet 'addon-dynamic-demo.js' label='component.js'}}
  {{demo.snippet 'addon-dynamic-demo.hbs' label='template.hbs'}}
{{/docs-demo}}
