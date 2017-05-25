export default {

  /**
   * Embeds an object based on embed controls events
   * @param  {Event} e Tap event from embed controls button
   * @return {undefined}
   */
  _embed(e) {
    const { embed } = Polymer.dom(e).rootTarget.dataset;

    // DEBUGGING - SRC SHOULD BE COMPUTED FROM UPLOAD
    this.editor.embed(embed, { src: 'http://cdn.simpla.io/img/logo/logo-wordmark.png' });
  }

}