const LINK_EXIT_KEYS = [ 13, 27 ],
      HEADING_LEVELS = 2;

export default {
  properties: {

    /**
     * Href value of the link input
     * @type {String}
     */
    _linkHref: {
      type: String,
      value: ''
    },

    /**
     * Whether the link input is open
     * @type {Boolean}
     */
    _rangeLinkActive: {
      type: Boolean,
      observer: '_updateLink'
    }

  },

  /**
   * Formats current selection based on toolbar events
   * @param  {Event} e Tap event from toolbar button
   * @return {undefined}
   */
  _format(e) {
    let { format } = Polymer.dom(e).rootTarget.dataset;

    this.editor.toggleFormat(format);
  },

  /**
   * Cycles through heading sizes on current selection
   * @return {undefined}
   */
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

  /**
   * Toggles the link input prompt
   * @return {undefined}
   */
  _toggleLink() {
    this._rangeLinkActive = !this._rangeLinkActive;
  },

  /**
   * Update anchor of current selection when link input toggles
   * @param  {Boolean} rangeLinkActive Whether link input is open
   * @return {undefined}
   */
  _updateLink(rangeLinkActive) {
    const { meta: link } = this.editor.plugins.link,
          currentHref = this._linkHref.trim();

    if (rangeLinkActive) {
      this._linkHref = link && link.href ? link.href : '';
      this.$['range-link-input'].focus();
    } else {
      this.editor.removeFormat('link');

      if (currentHref) {
        this.editor.format('link', { href: currentHref });
      }
    }
  },

  /**
   * Close link input if it receives special keys
   * @param  {Event} e Keyup event from link input
   * @return {undefined}
   */
  _exitLinkOnExitKeys(e) {
    if (LINK_EXIT_KEYS.indexOf(e.keyCode) !== -1) {
      this._rangeLinkActive = false;
    }
  }

}