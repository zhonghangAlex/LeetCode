import addList from '../../code/ord/add_list.js'

test('list add', () => {
  expect(addList('2 -> 4 -> 3', '5 -> 6 -> 4')).toBe('7 -> 0 -> 8')
})
