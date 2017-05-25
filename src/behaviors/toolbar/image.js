export default {

  /**
   * Aligns the selected image based on toolbar events
   * @param  {Event} e Tap event from toolbar tool
   * @return {undefined}
   */
  _alignImage(e) {
    const { align } = Polymer.dom(e).rootTarget.dataset;

    // NEED TO FETCH SRC FROM EXISTING IMG, TO PATCH ALIGNMENT
    this.editor.embed('image', { src: 'http://cdn.simpla.io/img/logo/logo-wordmark.png', alignment: align });
  }

}