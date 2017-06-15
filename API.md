# API Reference

## Properties

Property        | Type      | Default              | Description                                                     
--------------- | --------- | -------------------- | -----------                                                     
`path`          | `String`  | `undefined`          | Path to the data for the article on Simpla's API                
`value`         | `String`  | `''`                 | HTML string of the content in Simpla-article                    
`placeholder`   | `String`  | `'Start writing...'` | Placeholder to show when element is editable and has no content 
`noTypographer` | `Boolean` | `false`              | Whether to disable smart typography rules                       
`editable`      | `Boolean` | `false`              | Whether the article is editable                                 
`active`        | `Boolean` | `false`              | Whether the article is currently being edited                   
`loaded`        | `Boolean` | `false`              | Whether the article content has been loaded from Simpla

Properties can be set with JavaScript or as attributes on the element. `camelCased` properties are seralized to `kebab-cased` attributes.

```html
<simpla-article path="/article" no-typographer></simpla-article>

<script>
  document.querySelector('simpla-article').editable = true;
</script>
```

## Custom events

Event              | Properties       | Description                                    
------------------ | ---------------- | -----------                                    
`value-changed`    | `value{String}`  | Fired when `value` property changes      
`editable-changed` | `value{Boolean}` | Fired when `editable` property changes 
`active-changed`   | `value{Boolean}` | Fired when `active` property changes
`loaded-changed`   | `value{Boolean}` | Fired when `loaded` property changes      
