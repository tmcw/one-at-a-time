# one-at-a-time

[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/one-at-a-time.svg)](https://greenkeeper.io/)

let async functions run one at a time


### `one(fn)`

Given a function that takes a callback, return a version that only
permits one callbacker to run at a time

### Parameters

| parameter | type     | description |
| --------- | -------- | ----------- |
| `fn`      | Function | input       |



**Returns** `Function`, one-at-a-time limited version

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install one-at-a-time
```

## Tests

```sh
$ npm test
```


