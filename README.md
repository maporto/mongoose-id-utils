
<p align="center"><h1 align="center">
  mongoose-id-utils
</h1>

<p align="center">
  Functions to resolve comomn problens with ObjectId
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/mongoose-id-utils"><img src="https://badgen.net/npm/v/mongoose-id-utils" alt="npm version"/></a>
  <a href="https://www.npmjs.org/package/mongoose-id-utils"><img src="https://badgen.net/npm/license/mongoose-id-utils" alt="license"/></a>
  <a href="https://www.npmjs.org/package/mongoose-id-utils"><img src="https://badgen.net/npm/dt/mongoose-id-utils" alt="downloads"/></a>
  <a href="https://github.com/maporto/mongoose-id-utils/actions?workflow=CI"><img src="https://github.com/maporto/mongoose-id-utils/workflows/CI/badge.svg" alt="build"/></a>
  <a href="https://codecov.io/gh/maporto/mongoose-id-utils"><img src="https://codecov.io/gh/maporto/mongoose-id-utils/graph/badge.svg?token=DOS32MRBW3" alt="codecov"/></a>
  <a href="https://snyk.io/test/github/maporto/mongoose-id-utils"><img src="https://snyk.io/test/github/maporto/mongoose-id-utils/badge.svg" alt="Known Vulnerabilities"/></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg" alt="Responsible Disclosure Policy" /></a>
</p>

# About

Functions to resolve comomn problens with ObjectId

# Install

```bash
npm install --save mongoose-id-utils
```

# Usage

```js
const { isObjectId, extractIdString, extractIdObjectId } = require('mongoose-id-utils')
```

# Example

# API

## isObjectId
```js
const { isObjectId } = require('mongoose-id-utils')

const id = '5e4e2f3b8a4f4c001e0e4c2d'

console.log(isObjectId(id))

// Output: true
```

## extractIdString
```js
const { extractIdString } = require('mongoose-id-utils')

const idString = '5e4e2f3b8a4f4c001e0e4c2d'
const idInDocument = {
  _id: '5e4e2f3b8a4f4c001e0e4c2d'
}

console.log(extractIdString(id))

// Output: 5e4e2f3b8a4f4c001e0e4c2d

console.log(extractIdString(idInDocument))

// Output: 5e4e2f3b8a4f4c001e0e4c2d
```

## extractIdObjectId
```js
const { extractIdObjectId } = require('mongoose-id-utils')

const idString = '5e4e2f3b8a4f4c001e0e4c2d'
const idInDocument = {
  _id: '5e4e2f3b8a4f4c001e0e4c2d'
}

console.log(extractIdObjectId(id))

// Output: ObjectId('5e4e2f3b8a4f4c001e0e4c2d')

console.log(extractIdObjectId(idInDocument))

// Output: ObjectId('5e4e2f3b8a4f4c001e0e4c2d')
```

# Contributing

Please consult [CONTRIBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.

# Author

**mongoose-id-utils** © [Marcos Porto](https://github.com/maporto), Released under the [Apache-2.0](./LICENSE) License.
