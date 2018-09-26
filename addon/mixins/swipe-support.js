import { readOnly } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import { isNone } from '@ember/utils';

let meta;

// Source: https://github.com/offirgolan/ember-burger-menu/blob/master/addon/mixins/swipe-support.js
export default Mixin.create({
  minSwipeDistance: readOnly('notification.swipeThreshold'),
  maxSwipeTime: readOnly('notification.swipeTimeout'),

  onSwipe(/* direction, target */) {
  },

  touchStart(event) {
    this._super(...arguments);

    const touch = event.touches[0];

    meta = {
      target: event.target,
      start: {
        x: touch.pageX,
        y: touch.pageY,
        time: new Date().getTime(),
      }
    };
  },

  touchMove(event) {
    this._super(...arguments);

    const touch = event.touches[0];

    meta.differences = {
      x: touch.pageX - meta.start.x,
      y: touch.pageY - meta.start.y
    };

    // Compute swipe direction
    if (isNone(meta.isHorizontal)) {
      meta.isHorizontal = Math.abs(meta.differences.x) > Math.abs(meta.differences.y);
    }

    // A valid swipe event uses only one finger
    if (event.touches.length > 1) {
      meta.isInvalid = true;
    }
  },

  touchEnd() {
    this._super(...arguments);

    const minSwipeDistance = this.get('minSwipeDistance');
    const maxSwipeTime = this.get('maxSwipeTime');
    const elapsedTime = new Date().getTime() - meta.start.time;

    if (meta.isHorizontal
      && !meta.isInvalid
      && Math.abs(meta.differences.x) >= minSwipeDistance
      && elapsedTime <= maxSwipeTime) {
      this.onSwipe(meta.differences.x > 0 ? 'right' : 'left', meta.target);
    }
  }
});
