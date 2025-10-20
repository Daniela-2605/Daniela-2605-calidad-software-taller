const { add } = require('./calculator');

test('suma dos números positivos', () => {
  expect(add(2, 3)).toBe(5);
});

test('devuelve 0 si el primer número es negativo', () => {
  expect(add(-2, 3)).toBe(0);
});
