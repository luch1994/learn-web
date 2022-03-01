/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let total = 0, res = 1, l = 0;

    for (let r = 1; r < n; r++) {
        total += (nums[r] - nums[r - 1]) * (r - l);
        while (total > k) {
            total -= nums[r] - nums[l];
            l += 1;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};


console.log(maxFrequency([1, 2, 4], 5)); // 3
console.log(maxFrequency([1, 4, 8, 13], 5)); // 2
console.log(maxFrequency([3, 9, 6], 2)); // 1