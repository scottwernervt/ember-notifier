import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  classNames: ['docs-border-l-4', 'docs-p-4'],
  classNameBindings: [
    'isInfo:docs-bg-purple-lightest',
    'isInfo:docs-border-purple',
    'isInfo:docs-text-purple-dark',
    'isWarning:docs-bg-orange-lightest',
    'isWarning:docs-border-orange',
    'isWarning:docs-text-orange-dark',
    'isDanger:docs-bg-red-lightest',
    'isDanger:docs-border-red',
    'isDanger:docs-text-red-dark',
  ],
  attributeBindings: ['role'],

  role: 'alert',
});
