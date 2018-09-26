'use strict';

module.exports = {
  extends: 'recommended',
  rules: {
    'attribute-indentation': {
      'element-open-end': 'last-attribute',
      'mustache-open-end': 'last-attribute',
      'open-invocation-max-len': 120
    }
  }
};
