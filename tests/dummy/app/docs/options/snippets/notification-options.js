//! BEGIN-SNIPPET notification-options.js
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  notifier: service(),

  actions: {
    unauthenticated() {
      const router = this.get('router');
      this.get('notifier').warning(
        'You must be logged in to access this resource ', {
          title: 'Unauthenticated',
          type: 'is-auth-error',
          icon: 'fas fa-user-astronaut',
          duration: 3200,
          onRemove() {
            router.transitionTo('login');
          },
        }
      );
    },
  }
});
//! END-SNIPPET
