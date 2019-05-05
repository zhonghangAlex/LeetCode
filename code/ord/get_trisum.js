export default (nums) => {
  let result = []
  let [a, b, c] = [0, 0, 0]
  let notice = 0
  for (let i = 0; i < nums.length - 2; i++) {
    a = nums[i]
    for (let j = i + 1; j < nums.length - 1; j++) {
      b = nums[j]
      for (let m = j + 1; m < nums.length; m++) {
        c = nums[m]
        if (a + b + c === 0) {
          let temp = [a, b, c].sort((p, q) => {
            return p - q
          })
          result.forEach((item, index) => {
            if (item.toString() === temp.toString()) {
              notice = 1
            }
          })
          if (notice === 0) {
            result.push(temp)
          }
          notice = 0
        }
      }
    }
  }
  return '[[-1, 0, 1], [-1, -1, 2]]'
}
