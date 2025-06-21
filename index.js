
const crypto = require('crypto');

const presets = {
  numeric: '0123456789',
  alphabetic: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  alphanumeric: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  hex: '0123456789abcdef',
  base64: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  urlSafe: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  ascii: `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`,
  distinguishable: 'CDEHKMPRTUWXY012458', 
};

function generateRandomString({
  length = 10,
  type = 'alphanumeric',
  characters,
  caseStyle = 'mixed', // 'upper', 'lower', or 'mixed'
  includeSpecial = false,
} = {}) {
  if (!length || length <= 0) {
    throw new Error('Length must be a positive number');
  }

  let charSet = '';

  if (characters) {
    charSet = characters;
  } else if (presets[type]) {
    charSet = presets[type];
  } else {
    throw new Error(`Unsupported type "${type}".`);
  }

  if (caseStyle === 'upper') {
    charSet = charSet.toUpperCase();
  } else if (caseStyle === 'lower') {
    charSet = charSet.toLowerCase();
  }

  if (includeSpecial && !characters && !['ascii', 'custom'].includes(type)) {
    charSet += presets.ascii;
  }

  charSet = [...new Set(charSet)].join('');

  const bytes = crypto.randomBytes(length * 2); 
  const result = [];

  for (let i = 0; i < bytes.length && result.length < length; i++) {
    const idx = bytes[i] % charSet.length;
    result.push(charSet[idx]);
  }

  return result.join('');
}

module.exports = {
  generateRandomString,
};


// console.log(generateRandomString({ length: 12 }));
// console.log(generateRandomString({ length: 8, type: 'numeric' }));
// console.log(generateRandomString({ length: 16, type: 'hex', caseStyle: 'upper' }));
// console.log(generateRandomString({ length: 6, type: 'distinguishable' }));
// console.log(generateRandomString({ length: 10, characters: 'abc' }));
// console.log(generateRandomString({ length: 10, type: 'alphabetic', caseStyle: 'lower', includeSpecial: true }));
