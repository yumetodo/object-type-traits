# object-type-traits

[![Build Status](https://travis-ci.org/yumetodo/object-type-traits.svg?branch=master)](https://travis-ci.org/yumetodo/object-type-traits)
[![Known Vulnerabilities](https://snyk.io/test/github/yumetodo/object-type-traits/badge.svg?targetFile=package.json)](https://snyk.io/test/github/yumetodo/object-type-traits?targetFile=package.json)
![license MIT](https://img.shields.io/badge/license-MIT-blue.svg)

A simple type checker like deprecated `jQuery.type`.

## Usage

```js
const type = require('object-type-traits');

console.log(type.of(32)); // => Number
console.log(type.isSame('String', 'foooo')); // => true
```
