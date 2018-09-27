import { triggerEvent } from '@ember/test-helpers';

// Source: https://github.com/offirgolan/ember-burger-menu/blob/master/tests/helpers/trigger-swipe-event.js
export default async function triggerSwipeEvent(el, direction, distance = 150) {
  let swipeRight = direction === 'right';
  let startPos = swipeRight ? 0 : distance;
  let endPos = swipeRight ? distance : 0;

  await triggerEvent(el, 'touchstart', {
    touches: [
      {
        pageX: startPos,
        pageY: 0,
        screenX: startPos,
        screenY: 0
      }
    ]
  });

  await triggerEvent(el, 'touchmove', {
    touches: [
      {
        pageX: endPos,
        pageY: 0,
        screenX: endPos,
        screenY: 0
      }
    ]
  });

  await triggerEvent(el, 'touchend');
}
