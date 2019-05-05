export default (l1, l2) => {
  let sum = parseInt(l1.replace(/\s->\s/g, '').split('').reverse().join('')) + parseInt(l2.replace(/\s->\s/g, '').split('').reverse().join(''))
  return sum.toString().split('').reverse().join(' -> ')
}
