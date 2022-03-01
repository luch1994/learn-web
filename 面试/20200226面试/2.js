/**
 * 给出一个数字组成的数组，找出第k个大的数字，时间复杂度不高于o(nlogn)
 */

function getTopK(k, nums) {
  const arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(nums[i]);
  }
  arr.sort((a, b) => a - b);
  for (let i = k, len = nums.length; i < len; i++) {
    if (nums[i] > arr[0]) {
      arr.push(nums[i]);
      arr.shift();
      arr.sort((a, b) => a - b);
    }
  }
  return arr[0];
}

console.log(getTopK(1, [1, 3, 4, 2]));
console.log(getTopK(3, [9, 3, 2, 4, 8]));
