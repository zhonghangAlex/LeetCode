import getSum from '../../code/ord/get_trisum'

test('get sum 0', () => {
  expect(getSum([-1, 0, 1, 2, -1, -4])).toBe('[[-1, 0, 1], [-1, -1, 2]]')
})
