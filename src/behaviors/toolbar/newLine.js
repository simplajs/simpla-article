export default {

  _embed(e) {
    const plugin = Polymer.dom(e).rootTarget.dataset.embed;

    // DEBUGGING - SRC SHOULD BE COMPUTED FROM UPLOAD
    this.editor.embed(plugin, { src: 'https://unsplash.it/600/400'});
  }

}