ember-notifier
==============

[![Latest NPM release][npm-badge]][npm-badge-url]
[![License][license-badge]][license-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url] 
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]

[npm-badge]: https://img.shields.io/npm/v/ember-notifier.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-notifier
[travis-badge]: https://img.shields.io/travis/scottwernervt/ember-notifier/master.svg
[travis-badge-url]: https://travis-ci.org/scottwernervt/ember-notifier
[codeclimate-badge]: https://api.codeclimate.com/v1/badges/24b82ae0cd54584332e2/maintainability
[codeclimate-badge-url]: https://codeclimate.com/github/scottwernervt/ember-notifier
[ember-observer-badge]: http://emberobserver.com/badges/ember-notifier.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-notifier
[license-badge]: https://img.shields.io/npm/l/ember-notifier.svg
[license-badge-url]: LICENSE.md
[dependencies-badge]: https://david-dm.org/scottwernervt/ember-notifier.svg
[dependencies-badge-url]: https://david-dm.org/scottwernervt/ember-notifier
[devDependencies-badge]: https://david-dm.org/scottwernervt/ember-notifier/dev-status.svg?theme=shields.io
[devDependencies-badge-url]: https://david-dm.org/scottwernervt/ember-notifier?type=dev

Easy, beautiful notifications for your Ember project.


Installation
------------------------------------------------------------------------------

```
ember install ember-notifier
```


Usage
------------------------------------------------------------------------------

Add the `ember-notifier` component to your application template. This 
container displays notifications.

```hbs
{{ember-notifier position="is-top-right"}}
{{outlet}}
```

Inject the `notifier` service anywhere you want to launch a 
notification.

```js
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  notifier: service(),
});
```

Notifications can be added by calling styled functions.

```js
this.get('notifier').primary('Primary notification');
this.get('notifier').info('Information notification');
this.get('notifier').success('Success notification');
this.get('notifier').warning('Warning notification');
this.get('notifier').danger('Danger notification');
this.get('notifier').secondary('Secondary notification');
```

Custom notifications can be called using `add()`.

```js
this.get('notifier').add('Custom notification', { type: 'custom-class' });
```

All notifications can be cleared using `empty()`.

```js
this.get('notifier').empty();
```

Check out the [documentation](https://scottwernervt.github.io/ember-notifier) 
for more customization and options.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/scottwernervt/ember-notifier`
* `cd ember-notifier`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

Favicon
--------

Created at [favicon.io](https://favicon.io/?t=EN&ff=Aldrich&fs=72&fc=%23FFF&b=rounded&bc=%23A0A).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
