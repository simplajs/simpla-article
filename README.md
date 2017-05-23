# simpla-article
![Version][bower-badge] [![Build status][travis-badge]][travis-url] [![Bower dependencies][bowerdeps-badge]][bowerdeps-url] ![Size][size-badge] [![Published][webcomponents-badge]][webcomponents-url]

Write longform, rich-media articles seamlessly inline

## Installation & usage

Install simpla-article with Bower

```sh
$ bower install SimplaElements/simpla-article --save
```

Import it into the `<head>` of your page

```html
<link rel="import" href="/bower_components/simpla-article/simpla-article.html">
```

Then use simpla-article in your project

```html
<simpla-article></simpla-article>
```

### Polyfills for cross-browser support
simpla-article> relies on emerging standards, for full cross-browser support include the [Web Components Lite](https://github.com/webcomponents/webcomponentsjs) polyfill. 

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js"></script>
```

---

MIT © Simpla &lt;friends@simpla.io&gt;

[bower-badge]: https://img.shields.io/bower/v/simpla-article.svg
[bowerlicense-badge]: https://img.shields.io/bower/l/simpla-article.svg
[travis-badge]: https://img.shields.io/travis/SimplaElements/simpla-article.svg
[travis-url]: https://travis-ci.org/SimplaElements/simpla-article
[bowerdeps-badge]: https://img.shields.io/gemnasium/SimplaElements/simpla-article.svg
[bowerdeps-url]: https://gemnasium.com/bower/simpla-article
[size-badge]: https://badges.herokuapp.com/size/github/SimplaElements/simpla-article/master/simpla-article.html?gzip=true
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/SimplaElements/simpla-article
