import EmberObject from '@ember/object';
import Component from '@ember/component';
import { render, click, triggerEvent } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test, skip } from 'qunit';

module('Integration | Component | ember-notifier-notification', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(11);

    this.set('notification', EmberObject.create({
      title: 'header',
      message: 'msg',
      type: 'is-primary',
    }));
    this.set('closeAction', () => {});

    await render(hbs`{{ember-notifier-notification notification=notification close=(action closeAction)}}`);

    assert.dom('.ember-notifier-notification-base').exists();
    assert.dom('.ember-notifier-notification-base').hasClass('is-primary');
    assert.dom('.ember-notifier-icon').exists();
    assert.dom('.ember-notifier-content').exists();
    assert.dom('.ember-notifier-title').exists();
    assert.dom('.ember-notifier-title').hasText('header');
    assert.dom('.ember-notifier-message').exists();
    assert.dom('.ember-notifier-message').hasText('msg');
    assert.dom('.ember-notifier-close').exists();

    await render(hbs`
      {{#ember-notifier-notification notification=notification}}
        yield test
      {{/ember-notifier-notification}}
    `);

    assert.dom('.ember-notifier-notification-base').exists();
    assert.dom('.ember-notifier-notification-base').hasText('yield test');
  });

  test('#setOption action modifies the notification properties', async function (assert) {
    assert.expect(1);

    this.owner.register('component:message-component', Component.extend({
      layout: hbs`<button id="update-type" {{action setOption "type" "is-info"}}>Update Type</button>`
    }));

    this.set('notification', EmberObject.create({
      type: 'is-primary',
      contentComponent: 'message-component',
    }));
    this.set('closeAction', () => {});

    await render(hbs`{{ember-notifier-notification notification=notification close=(action closeAction)}}`);
    await click('#update-type');

    assert.equal(this.get('notification.type'), 'is-info');
  });

  skip('swipe right to close notification', async function (assert) {
    assert.expect(1);

    this.set('notification', EmberObject.create({
      title: 'header',
      message: 'msg',
      type: 'is-primary',
    }));
    this.set('closeAction', () => {});

    await render(hbs`{{ember-notifier-notification notification=notification close=(action closeAction)}}`);
    await triggerEvent('.ember-notifier-notification-base', 'touchstart');
  });
});
