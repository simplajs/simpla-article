# Simpla Article
[![Build status][travis-badge]][travis-url] ![Size][size-badge] ![Version][bower-badge] [![Published][webcomponents-badge]][webcomponents-url] [![Simpla slack group][slack-badge]][slack-url]

Simpla-article is a web component that lets you write longform, rich-media articles seamlessly inline on your page, built on the [Simpla][simpla] content system.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script src="https://unpkg.com/simpla@^2.0.0"></script>
    <script>
      Simpla.init('local');
      Simpla.editable(true);
    </script>

    <link rel="import" href="simpla-article.html">

    <style>
      simpla-article {
        padding: 1em;
      }

      simpla-article h1, h2 {
        font-weight: 400;
      }

      simpla-article h1 {
        font-weight: 300;
      }

      simpla-article img {
        max-width: 100%;
      }

      simpla-article img[data-alignment="right"] {
        margin-right: -1em;
      }

      simpla-article img[data-alignment="left"] {
        margin-left: -1em;
      }

      simpla-article blockquote {
        border-left: 1px solid lightGrey;
        padding-left: 1em;
        margin-left: 2em;
        font-weight: 300;
        overflow: hidden;
        font-style: italic;
      }

      simpla-article blockquote p:first-of-type {
        margin-top: 0.5em;
      }

      simpla-article blockquote p:last-of-type {
        margin-bottom: 0.5em;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<simpla-article path="/article"></simpla-article>
```

## Installation and setup

Install simpla-article with Bower (Yarn support coming soon)

```sh
$ bower i simpla-article --save
```

Then include the Simpla library on your page and setup a project (read more about [setting up Simpla](https://www.simpla.io/docs/guides/get-started))

```html
<script src="https://unpkg.com/simpla@^2.0.0"></script>
<script>
  // TODO: replace 'project-id' with your project ID
  Simpla.init('project-id')
</script>
```

Import simpla-article into the `<head>` of your document

```html
<link rel="import" href="/bower_components/simpla-article/simpla-article.html">
```

And then use it on your page wherever you want to create a new article (blog post templates, help articles, etc). Specify a content path (where the article's content will be stored on Simpla's API) in a `path` attribute.

```html
<simpla-article path="/article"></simpla-article>
```

### Polyfills for cross-browser support

Simpla-article relies on emerging standards, for full cross-browser support make sure you include the [Web Components Lite](https://github.com/webcomponents/webcomponentsjs) polyfill on your page.

```html
<script src="https://unpkg.com/webcomponents.js@^0.7.24/webcomponents-lite.min.js" async></script>
```

## Writing articles

Write and edit articles by entering edit mode with Simpla (which makes all Simpla elements on a page editable) or setting the `editable` property directly on an article element.

```js
// Enter edit mode
Simpla.editable(true);
```

```html
<!-- Make only this article editable -->
<simpla-article path="/article" editable></simpla-article>
```

Entering edit mode with Simpla is the recommended way to edit articles. It ensures all elements on a page remain in sync and updates Simpla's public `'editable'` state, which other elements may rely on.

> If you include the [simpla-admin](https://webcomponents.org/element/SimplaElements/simpla-admin) component on your page, you can also enter edit mode by adding #edit to the end of your URL

### Editing inline

Simpla-article's editor is inspired by [Medium](https://medium.com) and supports the following content types:

- Formatted text (Bold/Italic)
- Links
- Headings
- Blockquotes
- Lists (ordered and unordered)
- Embedded images

To apply text formats, links, headings, and blockquotes highlight the text you want to modify and use the appropriate tool from the floating toolbar that appears.

To embed an image, focus on an empty line and tap the camera icon that appears to the left of the cursor. Once the image has been embedded select it to change its alignment.

Write lists inline, and they will be automatically converted to HTML lists by simpla-article.

```
Unordered list:
- Item
- Item 2

Ordered list:
1. Item
2. Item 2
```

## Saving articles

Save a simpla-article by calling Simpla's `save()` method, which will save all modified content on the page. It returns a promise.

```js
// Save all content on the page
Simpla.save();
```

Note you must be authenticated before saving content - login with your Simpla account using either `simpla-admin` or the `Simpla.login()` method.

> If you have included the [simpla-admin](http://webcomponents.org/element/SimplaElements/simpla-admin) component on your site, you can save content by entering edit mode and just pressing the 'save' button.

## Initializing with static content

You can write HTML content inside simpla-article just like you would with any other element. The HTML you insert will be parsed and sanitized into simpla-article's content model when you enter edit mode. If content for an article's `path` exists on Simpla's API any static content will be overwritten.

```html
<simpla-article path="/article">
  <h1>Simpla Article</h1>
  <p>Write longform, rich-media articles seamlessly inline</p>
</simpla-article>
```

Initializing with static content is useful for converting existing sites to Simpla, or bootstrapping a project with predefined content. By putting markup inside `<simpla-article>` and then calling `Simpla.save()` you can easily set static content directly to Simpla's API.

**Note:** Since any static content is overwritten by remote data, you should not have content inside `<simpla-article>` in production, because if newer content gets saved you will experience FOUC (Flash Of Unformatted Content) when the static content is overwritten.

## Custom placeholder

You can set custom placeholders (displayed when simpla-article is editable and does not have content) the same way as native elements, with a `placeholder` attribute

```html
<simpla-article 
  path="/article" 
  placeholder="Tell your story">
</simpla-article>
```

## Typographer

By default simpla-article applies 'smart typography' rules to its content. These include:

- Smart quotes (`"` to `“`)
- Automatic em dashes (`--` to `—`)
- Automatic ellipses (`...` to `…`)

You can disable the typographer by giving simpla-article a `noTypographer` property

```html
<simpla-article 
  path="/article" 
  no-typographer>
</simpla-article>
```

## API reference

### Properties

Property        | Type    | Default              | Description                                                     
--------------- | ------- | -------------------- | -----------                                                     
`value`         | String  | `''`                 | HTML string of the content in Simpla-article                    
`path`          | String  | `undefined`          | Path to the data for the article on Simpla's API                
`placeholder`   | String  | `'Start writing...'` | Placeholder to show when element is editable and has no content 
`noTypographer` | Boolean | `false`              | Whether to disable smart typography rules                       
`editable`      | Boolean | `false`              | Whether the article is editable                                 
`active`        | Boolean | `false`              | Whether the article is currently being edited                   
`loaded`        | Boolean | `false`              | Wether the element has loaded and rendered its content          

Properties can be set either directly with JavaScript or as attributes on the element. `camelCased` properties are seralized to `kebab-cased` attributes.

```html
<simpla-article path="/article" no-typographer></simpla-article>

<script>
  document.querySelector('simpla-article').editable = true;
</script>
```

### Events

Event              | Description                                    
------------------ | -----------                                    
`value-changed`    | Fired whenever the `items` property changes      
`editable-changed` | Fired whenever the `editable` property changes 
`active-changed`   | Fired whenever the `active` property changes
`loaded-changed`   | Fired whenever the `loaded` property changes      

## Contributing

If you find any issues with simpla-article please report them! If you'd like to see a new feature in supported file an issue or let us know in Simpla's public [Slack group](https://slack.simpla.io). We also happily accept PRs. 

***

MIT © [Simpla][simpla]

[simpla]: https://www.simpla.io
[travis-badge]: https://img.shields.io/travis/SimplaElements/simpla-article.svg
[travis-url]: https://travis-ci.org/SimplaElements/simpla-article
[bower-badge]: https://img.shields.io/bower/v/simpla-article.svg
[size-badge]: https://badges.herokuapp.com/size/github/SimplaElements/simpla-article/master/simpla-article.html?gzip=true
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/SimplaElements/simpla-article
[slack-badge]: http://slack.simpla.io/badge.svg
[slack-url]: https://slack.simpla.io

