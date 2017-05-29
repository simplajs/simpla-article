/**
 * Helper function to add event listener which is removed after first use
 * @param  {HTMLElement}  object    HTMLElement which supports add / remove eventListener
 * @param  {String}       type      Event type to listen for
 * @param  {Function}     callback  Callback to execute on event
 * @return {undefined}
 */
const once = (object, type, callback) => {
  let doOnce = (event) => {
    callback(event);
    object.removeEventListener(type, doOnce);
  }

  object.addEventListener(type, doOnce);
}

/**
 * Convert given files to base64 strings
 * @param  {Array<File>} files Array like object of files e.g. a FileList
 * @return {Promise}           Promise which resolves to base64 strings of files
 */
const toBase64 = (files) => {
  const convertFile = file => {
    return new Promise(resolve => {
      let reader = new FileReader();

      once(reader, 'load', event => resolve(event.target.result));
      reader.readAsDataURL(file);
    });
  }

  return Promise.all([].map.call(files, convertFile));
}

/**
 * Open a file picker and resolve with selected files
 * @param  {Boolean=} accept Optional param to filter accepted filetypes
 * @return {Promise}  Promise which resolves to images
 */
const pickFiles = (accept) => {
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.multiple = true;

  return new Promise((resolve, reject) => {
    once(input, 'change', event => resolve(event.target.files));
    input.click();
  });
}

export default {
  /**
   * Embeds an object based on embed controls events
   * @param  {Event} e Tap event from embed controls button
   * @return {undefined}
   */
  _embed(e) {
    const { embed: type } = Polymer.dom(e).rootTarget.dataset;

    pickFiles('image/*')
      .then(toBase64)
      .then(images => {
        images.forEach(src => this.editor.embed(type, { src }));
      });
  }
};
