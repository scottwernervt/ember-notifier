# Dynamic

The notification's content can be made dynamic by passing a component 
name to the `contentComponent` option.

{{#docs-snippet name="message-component-option.js"}}
  this.get('notifier').info(null, { contentComponent: 'my-component' });
{{/docs-snippet}}

For example: We are going to create a background task 
using [ember-concurrency](http://ember-concurrency.com/). Based on the 
task's result, the notification will be updated using the content 
component closure action `setOption`. If the task fails, it will be 
toggled to `is-danger` or if successful, `is-success`.

Install `ember-concurrency`.

{{#docs-snippet name="install-ember-concurrency"}}
  ember install ember-concurrency
{{/docs-snippet}}

Generate the dynamic content component.

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
