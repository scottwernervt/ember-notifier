# Usage

Add the `ember-notifier` component to your application template. This
container displays notifications.

{{#docs-snippet name="usage-template.hbs" title="templates/application.hbs"}}
  {{ember-notifier position="is-top-right"}}
  {{outlet}}
{{/docs-snippet}}

Inject the `notifier` service anywhere you want to launch a notification.

{{#docs-snippet name="usage-service.js"}}
  import Component from '@ember/component';
  import { inject as service } from '@ember/service';
  
  export default Component.extend({
    notifier: service(),
  });
{{/docs-snippet}}

Notifications can be added by calling styled functions.

{{#docs-snippet name="usage-styled-functions.js"}}
  this.get('notifier').primary('Primary notification');
  this.get('notifier').info('Information notification');
  this.get('notifier').success('Success notification');
  this.get('notifier').warning('Warning notification');
  this.get('notifier').danger('Danger notification');
  this.get('notifier').secondary('Secondary notification');
{{/docs-snippet}}

Custom notifications can be called using `add()`.

{{#docs-snippet name="usage-add-function.js"}}
  this.get('notifier').add('Custom notification', { type: 'custom-class' });
{{/docs-snippet}}

All notifications can be cleared using `empty()`.

{{#docs-snippet name="empty.js"}}
  this.get('notifier').empty();
{{/docs-snippet}} 
