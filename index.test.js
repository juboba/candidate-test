const { countTotal, TOTAL_LIMIT } = require('./utils')
const { sumPairs, getNumberList } = require('./index')

test('Task 1', function() {
  expect(sumPairs([1, 2, 3, 4, 5, 5, 6, 6])).toBe(18);
  expect(sumPairs([2, 3, 3, 3, 4, 10, 12])).toBe(28);
  expect(sumPairs([1, 2, 3, 4, 5, 10, 10, 20])).toBe(46);
  expect(sumPairs([20, 32, 21])).toBe(52);
  expect(sumPairs([-20, 32, 21])).toBe(12);
  expect(sumPairs([-20, -32, -21])).toBe(-52);
});

test('Task 2', function() {
  return getNumberList([])
    .then((list) => {
      expect(countTotal(list)).not.toBeGreaterThan(TOTAL_LIMIT);
    })
});
