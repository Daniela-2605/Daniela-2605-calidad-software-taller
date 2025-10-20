const { add } = require('../src/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('returns 0 when a is negative', () => {
  expect(add(-5, 3)).toBe(0);
});
