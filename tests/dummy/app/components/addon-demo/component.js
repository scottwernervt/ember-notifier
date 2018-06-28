import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { dasherize } from '@ember/string';
import layout from './template';

export default Component.extend({
  layout,

  router: service(),
  notifier: service(),
  demo: service(),

  message: 'Testing notifications',
  messageComponent: null,
  types: null,
  positions: null,

  type: alias('demo.type'),
  position: alias('demo.position'),
  duration: alias('demo.duration'),

  init() {
    this._super(...arguments);
    this.set('types', ['primary', 'info', 'success', 'warning', 'danger', 'secondary']);
    this.set('positions', ['top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right']);
  },

  actions: {
    show() {
      const type = this.get('type');
      const message = this.get('message');
      const duration = this.get('duration');
      const messageComponent = this.get('messageComponent');
      const title = `Notification ${type}`; // framework testing
      const options = { title, duration, messageComponent };

      if (type === 'primary') {
        this.get('notifier').primary(message, options);
      } else if (type === 'info') {
        this.get('notifier').info(message, options);
      } else if (type === 'success') {
        this.get('notifier').success(message, options);
      } else if (type === 'warning') {
        this.get('notifier').warning(message, options);
      } else if (type === 'danger') {
        this.get('notifier').danger(message, options);
      } else if (type === 'secondary') {
        this.get('notifier').secondary(message, options);
      }
    },

    unauthenticated() {
      const router = this.get('router');
      this.get('notifier').warning(
        'You must be logged in to access this resource ', {
          title: 'Unauthenticated',
          type: 'is-auth-error',
          icon: 'fas fa-user-astronaut',
          duration: 3200,
          onRemove() {
            router.transitionTo('docs.index');
          },
        }
      );
    },

    setPosition(position) {
      this.set('demo.position', dasherize(`is-${position}`));
    },

    clearAll() {
      this.get('notifier').empty();
    },
  }
});
