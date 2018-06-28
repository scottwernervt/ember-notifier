// BEGIN-SNIPPET task-message.js
import Component from '@ember/component';
import { on } from '@ember/object/evented';
import { task, timeout } from 'ember-concurrency';
import layout from './template';

export default Component.extend({
  layout,

  didInsertElement() {
    this._super(...arguments);
    this.get('backgroundTask').perform();
  },

  didDestroyElement() {
    this.get('backgroundTask').cancelAll();
    this._super(...arguments);
  },

  backgroundTask: task(function* () {
    const ms = 2000 + 2000 * Math.random();
    yield timeout(ms);

    if (parseInt(ms) % 2 === 0) {
      throw new Error('Background task failed.');
    }
    return {};
  }).evented(),

  // eslint-disable-next-line ember/no-on-calls-in-components
  backgroundTaskStarted: on('backgroundTask:started', function (/* taskInstance */) {
    this.setOption('icon', 'fas fa-spinner fa-pulse');
  }),

  // eslint-disable-next-line ember/no-on-calls-in-components
  backgroundTaskSucceeded: on('backgroundTask:succeeded', function (/* taskInstance */) {
    this.setOption('icon', 'fas fa-check');
    this.setOption('type', 'is-success');
  }),

  // eslint-disable-next-line ember/no-on-calls-in-components
  backgroundTaskErrored: on('backgroundTask:errored', function (/* taskInstance, error */) {
    this.setOption('icon', 'fas fa-fire');
    this.setOption('type', 'is-danger');
  }),
});
// END-SNIPPET
