export default {

  /**
   * Aligns the selected image based on toolbar events
   * @param  {Event} e Tap event from toolbar tool
   * @return {undefined}
   */
  _alignImage(e) {
    const { align } = Polymer.dom(e).rootTarget.dataset,
          { plugins: { image } } = this.editor;

    this.editor.embed('image', Object.assign({}, image.meta, { alignment: align }));
  }
};
