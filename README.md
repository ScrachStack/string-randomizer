# 🎲 Randomizer

A flexible and secure random string generator for Node.js. Fully customizable with support for different character sets, string lengths, case styles, and more.
```js
const { generateRandomString } = require('./'); 

const random = generateRandomString({ length: 12 });
console.log(random); // e.g., 'a8DfK29nWq1z'
```
| Option           | Type      | Default          | Description                                                                                                             |
| ---------------- | --------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `length`         | `number`  | `10`             | Length of the string                                                                                                    |
| `type`           | `string`  | `'alphanumeric'` | Preset character type (`numeric`, `alphabetic`, `alphanumeric`, `hex`, `base64`, `urlSafe`, `ascii`, `distinguishable`) |
| `characters`     | `string`  | `undefined`      | Custom characters to use (overrides `type`)                                                                             |
| `caseStyle`      | `string`  | `'mixed'`        | `'upper'`, `'lower'`, or `'mixed'`                                                                                      |
| `includeSpecial` | `boolean` | `false`          | Whether to include ASCII special characters                                                                             |
