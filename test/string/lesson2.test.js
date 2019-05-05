import subStr from '../../code/string/lesson2'

test('sub string test', () => {
  expect(subStr('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})

test('sub string test', () => {
  expect(subStr('10101')).toEqual(['10', '01', '10', '01'])
})
