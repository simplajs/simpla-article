const EDITOR_DEPENDENCIES = [
        'simpla-article-toolbar.html',
        '../simpla-richtext-behavior/simpla-richtext-behavior.html'
      ],
      DEFAULT_PLUGINS = [
        'bold',
        'italic',
        'link',
        'list',
        'heading',
        'blockquote',
        'image'
      ];

export default {
  observers: [
    '_initEditor(editable)',
    '_syncEditableToEditor(editable)'
  ],

  /**
   * Imports editor dependencies into page
   * @return {Promise} Resolves when all dependencies loaded
   */
  _importEditorDeps() {
    let depImports = EDITOR_DEPENDENCIES.map(dep => {
      return new Promise((resolve, reject) => {
        this.importHref(this.resolveUrl(dep), resolve, reject);
      });
    });

    return Promise.all(depImports);
  },

  /**
   * Inits an editor instance on article when editable
   * @param  {Boolean} editable Whether article is editable
   * @return {undefined}
   */
  _initEditor(editable) {
    if (!editable || !!this._editor) {
      return;
    }

    this._importEditorDeps()
      .then(() => {
        const { RichText } = window.SimplaBehaviors;

        this._editor = new RichText(this, {
          inline: false,
          placeholder: this.placeholder,
          plugins: DEFAULT_PLUGINS,
          editable: this.editable,
          typographer: !this.noTypographer
        });
      })
  },

  /**
   * Syncs the articles editable prop to the editor instance
   * @param  {Boolean} editable Whether article should be editable
   * @return {undefined}
   */
  _syncEditableToEditor(editable) {
    const { _editor: editor } = this;

    if (editor) {
      editor.editable = editable;
    }
  }
}
