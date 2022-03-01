/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    // 方法1，实时计算
    // const arr = [1, 2, 3, 5];
    // let i = 1, count = 0;
    // while (count < n) {
    //     let j = i;
    //     while (j % 2 == 0 || j % 3 == 0 || j % 5 == 0) {
    //         if (j % 2 == 0) {
    //             j = j / 2;
    //         }
    //         if (j % 3 == 0) {
    //             j = j / 3;
    //         }
    //         if (j % 5 == 0) {
    //             j = j / 5;
    //         }
    //     }

    //     if (arr.includes(j)) {
    //         count++;
    //     }
    //     i++;
    // }
    // return i - 1;
    // 方法二，用数组缓存
    // const arr = [1, 2, 3, 4, 5];
    // let i = 6;
    // while (arr.length < n) {
    //     let j = i;
    //     if (j % 2 == 0) {
    //         j = j / 2;
    //     }
    //     if (j % 3 == 0) {
    //         j = j / 3;
    //     }
    //     if (j % 5 == 0) {
    //         j = j / 5;
    //     }
    //     if (arr.includes(j)) {
    //         arr.push(i);
    //     }
    //     i++;
    // }
    // return arr[n - 1];
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    let p2 = 0, p3 = 0, p5 = 0;
    for (let i = 1; i < n; i++) {
        const num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
        const cur = Math.min(Math.min(num2, num3), num5);
        dp[i] = cur;
        // 会有重复的，不能用else if
        if (cur == num2) {
            p2++;
        }
        if (cur == num3) {
            p3++;
        }
        if (cur == num5) {
            p5++;
        }
    }
    return dp[n - 1];
};

console.log(nthUglyNumber(10));


// var nthUglyNumber = function(n) {
//     const dp = new Array(n + 1).fill(0);
//     dp[1] = 1;
//     let p2 = 1, p3 = 1, p5 = 1;
//     for (let i = 2; i <= n; i++) {
//         const num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
//         dp[i] = Math.min(Math.min(num2, num3), num5);
//         if (dp[i] === num2) {
//             p2++;
//         }
//         if (dp[i] === num3) {
//             p3++;
//         }
//         if (dp[i] === num5) {
//             p5++;
//         }
//     }
//     return dp[n];
// };


// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/chou-shu-lcof/solution/chou-shu-by-leetcode-solution-0e5i/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。