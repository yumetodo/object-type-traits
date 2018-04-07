# object-type-traits

[![Build Status](https://travis-ci.org/yumetodo/object-type-traits.svg?branch=master)](https://travis-ci.org/yumetodo/object-type-traits)
[![Greenkeeper badge](https://badges.greenkeeper.io/yumetodo/object-type-traits.svg)](https://greenkeeper.io/)
![license MIT](https://img.shields.io/badge/license-MIT-blue.svg)

A simple type checker like deprecated `jQuery.type`.

## Usage

```js
const type = require('object-type-traits');

console.log(type.of(32)); // => Number
console.log(type.isSame('String', 'foooo')); // => true
```
