/**
 * 第 i 位的数字能被 i 整除
 * i 能被第 i 位上的数字整除
 * 现在给定一个整数 N，请问可以构造多少个优美的排列？
 * @param {number} n
 * @return {number}
 */
// var countArrangement = function (n) {
//     if (n <= 3) {
//         return n;
//     }0787
    
    
// };
var countArrangement = function(n) {
    const len = 1 << n;
    const f = new Array(len).fill(0);
    f[0] = 1;
    for (let mask = 1; mask < len; mask++) {
        const num = mask.toString(2).split('0').join('').length
        for (let i = 0; i < n; i++) {
            if ((mask & (1 << i)) !== 0 && ((num % (i + 1)) === 0 || (i + 1) % num === 0)) {
                f[mask] += f[mask ^ (1 << i)];
            }
        }
    }
    return f[(1 << n) - 1];
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/beautiful-arrangement/solution/you-mei-de-pai-lie-by-leetcode-solution-vea2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。