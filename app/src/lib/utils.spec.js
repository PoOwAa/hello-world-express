const { sum, multiply, divide, subtract } = require('./utils');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplies 4 * 5 to equal 20', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('divide 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('subtract 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});