import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,

  classNames: ['border-l-4', 'p-4'],
  classNameBindings: [
    'isInfo:bg-blue-lightest',
    'isInfo:border-blue',
    'isInfo:text-blue-dark',
    'isWarning:bg-orange-lightest',
    'isWarning:border-orange',
    'isWarning:text-orange-dark',
    'isDanger:bg-red-lightest',
    'isDanger:border-red',
    'isDanger:text-red-dark',
  ],
  attributeBindings: ['role'],

  role: 'alert',
});
