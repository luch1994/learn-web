/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
    const map = {};
    let ans = 0;
    for(const v of arr) {
        map[v] = (map[v - difference] || 0) + 1;
        ans = Math.max(ans, map[v]);
    }
    return ans;
};


console.log(longestSubsequence([1, 2, 3, 4], 1)); // [1,2,3,4] 4
console.log(longestSubsequence([1, 3, 5, 7], 1)); // [1] 1
console.log(longestSubsequence([1, 5, 7, 8, 5, 3, ], -2)); // [7,5,3,1] 4

