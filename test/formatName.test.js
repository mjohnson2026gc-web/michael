import formatName from '../michael.js';

test('formats lower-case names', () => {
  expect(formatName('michael', 'johnson')).toBe('Michael Johnson');
});

test('trims input and capitalizes', () => {
  expect(formatName('  miChael  ', '  JOhnson ')).toBe('Michael Johnson');
});

test('handles missing parts', () => {
  expect(formatName('', 'doe')).toBe('Doe');
  expect(formatName('alice', '')).toBe('Alice');
  expect(formatName('', '')).toBe('');
});
