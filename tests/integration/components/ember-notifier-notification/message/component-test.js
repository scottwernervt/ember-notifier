import Component from '@ember/component';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-notifier-notification/message', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(4);

    this.set('message', 'msg');
    this.set('title', 'header');

    await render(hbs`{{ember-notifier-notification/message message=message title=title}}`);

    assert.dom('.ember-notifier-title').exists();
    assert.dom('.ember-notifier-title').hasText(this.get('title'));
    assert.dom('.ember-notifier-content').exists();
    assert.dom('.ember-notifier-content').hasText(this.get('message'));
  });

  test('it renders a custom message component', async function(assert) {
    assert.expect(4);

    this.set('message', 'msg');
    this.set('title', 'header');

    this.owner.register('component:message-component', Component.extend({
      layout: hbs`<header>{{title}}</header><p>{{message}}</p>`,
    }));

    await render(hbs`{{ember-notifier-notification/message messageComponent="message-component" message=message title=title}}`);

    assert.dom('header').exists();
    assert.dom('header').hasText(this.get('title'));
    assert.dom('p').exists();
    assert.dom('p').hasText(this.get('message'));
  });
});


