function getTopK(k, nums) {
  nums.sort((a, b) => b - a)
  return nums[k - 1]
}

console.log(getTopK(1, [1, 3, 4, 2]));
console.log(getTopK(3, [9, 3, 2, 4, 8]));