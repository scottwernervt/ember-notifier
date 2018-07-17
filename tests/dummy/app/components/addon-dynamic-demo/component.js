// BEGIN-SNIPPET addon-dynamic-demo.js
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from './template';

export default Component.extend({
  layout,

  notifier: service(),

  actions: {
    launchTask() {
      this.get('notifier').add({
        type: 'is-info',
        contentComponent: 'task-message',
        duration: 0,
      });
    },
  }
});
// END-SNIPPET
