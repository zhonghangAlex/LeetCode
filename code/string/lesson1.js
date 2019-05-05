// export default (str) => {
//   let arr = str.split(' ')
//   let result = arr.map((current) => {
//     return current.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// export default (str) => {
//   return str.split(' ').map((current) => {
//     return current.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   return str.split(/\s/g).map((current) => {
//     return current.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  return str.match(/[\w']+/g).map((current) => {
    return current.split('').reverse().join('')
  }).join(' ')
}
