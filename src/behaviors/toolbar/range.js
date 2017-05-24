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
    let plugin = Polymer.dom(e).rootTarget.dataset.format;

    this.editor.toggleFormat(plugin);
  },

  _formatHeading() {
    const { editor } = this,
          { heading } = editor.plugins;
    let headingSize;

    if (heading.applied && heading.meta.level < HEADING_LEVELS) {
      editor.format('heading', { level: heading.meta.level + 1 })
    } else if (heading.applied && heading.meta.level === HEADING_LEVELS) {
      editor.removeFormat('heading');
    } else {
      editor.format('heading', { level: 1 });
    }
  },

  _toggleLink() {
    this._rangeLinkActive = !this._rangeLinkActive;
  },

  _updateLink(linkActive) {
    const { meta: data } = this.editor.plugins.link,
          currentHref = this._linkHref.trim();

    if (linkActive) {
      this._linkHref = data && data.href ? data.href : '';
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