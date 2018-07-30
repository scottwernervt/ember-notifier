import { computed } from '@ember/object';

/**
 * Fallback to a default value if the property is undefined.
 *
 * Source:
 * [github.com/cibernox/ember-power-select](https://github.com/cibernox/ember-power-select/blob/master/addon/utils/computed-fallback-if-undefined.js)
 *
 * @function defaultValue
 * @param {string} fallback Fallback value if property is undefined.
 * @return {string} The property value.
 */
export default function defaultValue(fallback) {
  return computed({
    get() {
      return fallback;
    },
    set(_, value) {
      return value === undefined ? fallback : value;
    }
  });
}
