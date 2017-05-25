import Popper from 'popper.js';

const GUTTER = 5,
      POPPER_CONFIG = {
        placement: 'top',
        modifiers: {
          offset: { offset: `0,${GUTTER}` },
          preventOverflow: {
            padding: GUTTER,
            boundariesElement: 'viewport'
          }
        }
      };

/**
 * Get Popper reference with given getBounds function
 * @param  {Function} getBounds Function which should return a DOMRect-like object
 * @return {Object}             Popper reference object
 */

function getReferenceFor(element) {
  return {
    getBoundingClientRect() {
      return (
        element.getBounds() || {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 0,
          height: 0
        }
      );
    },

    get clientWidth() {
      return this.getBoundingClientRect().width;
    },

    get clientHeight() {
      return this.getBoundingClientRect().height;
    }
  };
}

export default {
  created() {
    this.__poppers = [];
  },

  anchor(toolbar, config = {}) {
    let { placement = 'top' } = config;

    this.__poppers.push(
      new Popper(
        getReferenceFor(this),
        toolbar,
        Object.assign({}, POPPER_CONFIG, { placement })
      )
    );
  },

  updateAnchors() {
    this.__poppers.forEach(anchor => anchor.scheduleUpdate());
  }
};
