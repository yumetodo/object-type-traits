# object-type-traits

[![Greenkeeper badge](https://badges.greenkeeper.io/yumetodo/object-type-traits.svg)](https://greenkeeper.io/)

A simple type checker like deprecated `jQuery.type`.

## Usage

```js
const type = require('object-type-traits');

console.log(type.of(32)); // => Number
console.log(type.isSame('String', 'foooo')); // => true
```
