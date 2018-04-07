# object-type-traits

A simple type checker like deprecated `jQuery.type`.

## Usage

```js
const type = require('object-type-traits');

console.log(type.of(32)); // => Number
console.log(type.isSame('String', 'foooo')); // => true
```
