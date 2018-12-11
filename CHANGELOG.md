# Changelog

## [v0.1.3](https://github.com/scottwernervt/ember-notifier/releases/tag/v0.1.3) (2018-12-11)

Bugs:

- Leaflet defines an `{{icon}}` helper which gets called instead of rendering the `{{icon}}` property value in the icon component template. [\#21](https://github.com/scottwernervt/ember-notifier/issues/21#issuecomment-444194637)
- Add extra styling to close button to make it independent of frameworks. [\#21](https://github.com/scottwernervt/ember-notifier/issues/21#issuecomment-444144615)

  | Old                                   | New                                          |
  | ------------------------------------- | -------------------------------------------- |
  | `$ember-notifier-close-width`         | `$ember-notifier-close-button-width`         |
  |                                       | `$ember-notifier-close-button-height`        |
  | `$ember-notifier-close-color`         | `$ember-notifier-close-button-color`         |
  | `$ember-notifier-close-opacity`       | `$ember-notifier-close-button-opacity`       |
  | `$ember-notifier-close-hover-opacity` | `$ember-notifier-close-button-hover-opacity` |

Maintenance:

- Update dependencies and dev dependencies.

Docs:

- Add custom theme to docs.

## [v0.1.2](https://github.com/scottwernervt/ember-notifier/releases/tag/v0.1.2) (2018-11-08)

Maintenance:

- Update dependencies and dev dependencies.

## [v0.1.1](https://github.com/scottwernervt/ember-notifier/releases/tag/v0.1.1) (2018-09-27)

Features:

- Swipe right to remove a notification. [\#4](https://github.com/scottwernervt/ember-notifier/issues/4)
- Add CSS transitions when adding and removing a notification. [\#3](https://github.com/scottwernervt/ember-notifier/issues/3)

Maintenance:

- Update dependencies and dev dependencies.

## [v0.1.0](https://github.com/scottwernervt/ember-notifier/releases/tag/v0.1.0) (2018-09-27)

Depreciated due to issue with deploying with `ember-cli-addon-docs`.

## [v0.0.1](https://github.com/scottwernervt/ember-notifier/releases/tag/v0.0.1) (2018-07-30)

- First release.
