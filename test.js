// test/test.js
const { formatName, isValidName, formatWithTitle } = require('../michael');

console.assert(formatName('michael', 'johnson') === 'Michael Johnson', 'formatName basic');
console.assert(isValidName("O'Connor") === true, 'isValidName apostrophe');
console.assert(formatWithTitle('michael', 'johnson', { title: 'Dr.' }) === 'Dr. Michael Johnson', 'formatWithTitle');
console.log('All tests passed.');
