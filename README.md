# @deveodk/vue-tinymce

[![npm](https://img.shields.io/npm/v/@deveodk/vue-tinymce.svg)](https://www.npmjs.com/package/@deveodk/vue-tinymce) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> An easy to use tinyMCE wrapper for vue.js, without use of jquery. Plug and play style with translation support.

# Demo
See a functioning demo
<a href="https://packages.deveo.io/packages/vue/vue-tinymce">deveo demo site</a>


## Installation

```bash
npm install --save @deveodk/vue-tinymce
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import vueTinymce from '@deveodk/vue-tinymce'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import '@deveodk/vue-tinymce/dist/@deveodk/vue-tinymce.css'
Vue.use(vueTinymce)
```

### Browser

```html
<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/@deveodk/vue-tinymce/dist/@deveodk/vue-tinymce.css"></link>
<script src="https://unpkg.com/@deveodk/vue-tinymce"></script>
```

## Example

Using the tinyMCE wrapper is easy

```html
# Include the tag in your html
<vue-tinymce v-model="editor"></vue-tinymce>

# The height can be set by a prop
<vue-tinymce v-model="editor" height="300"></vue-tinymce>
```

## Events

The editor will emit an change event you can listen for

```html
# You can listen and fire an custom method by doing
<vue-tinymce v-model="editor" @change="MyMethodHere()"></vue-tinymce>
```

## Translations

You can add any language that tinyMCE supports.

```code
# If you want to add localization
import tinyMCE from '@deveodk/vue-tinymce'
import '@deveodk/vue-tinymce/dist/@deveodk/vue-tinymce.css'

# Just add the language from the packages translation foler
# Example using danish
# List of available languages 
# https://www.tinymce.com/download/language-packages/

import '@deveodk/vue-tinymce/translations/da'
Vue.use(tinyMCE)
```

## License

[MIT](http://opensource.org/licenses/MIT)
