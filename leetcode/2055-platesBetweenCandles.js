// /**
//  * @param {string} s
//  * @param {number[][]} queries
//  * @return {number[]}
//  */
// var platesBetweenCandles = function (s, queries) {
//     const res = [];
//     for(const query of queries) {
//         const newStr = s.slice(query[0], query[1] + 1);
//         const tmp = [];
//         let totalCount = 0, tmpCount = 0;
//         for(const ch of newStr) {
//             if (ch === '*') {
//                 if (tmp.length !== 0) {
//                     tmpCount++;
//                 }
//             } else if (ch === '|') {
//                 if (tmp.length === 0) {
//                     tmp.push('|');
//                 } else {
//                     totalCount += tmpCount;
//                     tmpCount = 0;
//                 }
//             }
//         }
//         res.push(totalCount);
//     }
//     return res;
// };

var platesBetweenCandles = function(s, queries) {
    const n = s.length;
    const preSum = new Array(n).fill(0);
    for (let i = 0, sum = 0; i < n; i++) {
        if (s[i] === '*') {
            sum++;
        }
        preSum[i] = sum;
    }
    console.log(preSum);
    const left = new Array(n).fill(0);;
    for (let i = 0, l = -1; i < n; i++) {
        if (s[i] === '|') {
            l = i;
        }
        left[i] = l;
    }
    console.log(left);
    const right = new Array(n).fill(0);;
    for (let i = n - 1, r = -1; i >= 0; i--) {
        if (s[i] === '|') {
            r = i;
        }
        right[i] = r;
    }
    console.log(right);
    const ans = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const x = right[query[0]], y = left[query[1]];
        ans[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x];
    }
    return ans;
};


// 输入：s = "**|**|***|", queries = [[2,5],[5,9]]
// 输出：[2,3]
console.log(platesBetweenCandles("**|**|***|", [[2,5],[5,9]]));

// 输入：s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
// 输出：[9,0,0,0,0]
// console.log(platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]]));
