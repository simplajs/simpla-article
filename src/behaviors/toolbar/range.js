const RANGE_SELECTOR = '[data-context="range"]',
      LINK_EXIT_KEYS = [ 13, 27 ],
      HEADING_LEVELS = 2;

export default {
  properties: {

    _linkHref: {
      type: String,
      value: ''
    },

    _rangeLinkActive: {
      type: Boolean,
      observer: '_updateLink'
    }

  },

  _format(e) {
    let { format } = Polymer.dom(e).rootTarget.dataset;

    this.editor.toggleFormat(format);
  },

  _formatHeading() {
    const { heading } = this.editor.plugins;
    let headingSize;

    if (heading.applied && heading.meta.level < HEADING_LEVELS) {
      this.editor.format('heading', { level: heading.meta.level + 1 })
    } else if (heading.applied && heading.meta.level === HEADING_LEVELS) {
      this.editor.removeFormat('heading');
    } else {
      this.editor.format('heading', { level: 1 });
    }
  },

  _toggleLink() {
    this._rangeLinkActive = !this._rangeLinkActive;
  },

  _updateLink(linkActive) {
    const { meta: link } = this.editor.plugins.link,
          currentHref = this._linkHref.trim();

    if (linkActive) {
      this._linkHref = link && link.href ? link.href : '';
      this.$['range-link-input'].focus();
    } else {
      this.editor.removeFormat('link');

      if (currentHref) {
        this.editor.format('link', { href: currentHref });
      }
    }
  },

  _exitLinkOnExitKeys(e) {
    if (LINK_EXIT_KEYS.indexOf(e.keyCode) !== -1) {
      this._rangeLinkActive = false;
    }
  }

}