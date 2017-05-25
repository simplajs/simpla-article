export default {
  _alignImage(e) {
    const { alignment } = Polymer.dom(e).rootTarget.dataset,
          { plugins: { image } } = this.editor;

    this.editor.embed('image', Object.assign({}, image.meta, { alignment }));
  }
};
