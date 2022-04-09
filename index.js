var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  const res = []
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]])
        break
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      } else {
        left++
      }
    }
  }
  return res
}
const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))
