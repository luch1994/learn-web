var getMoneyAmount = function(n) {
    const f = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = n - 1; i >= 1; i--) {
        for (let j = i + 1; j <= n; j++) {
            let minCost = Number.MAX_VALUE;
            for (let k = i; k < j; k++) {
                let cost = k + Math.max(f[i][k - 1], f[k + 1][j]);
                minCost = Math.min(minCost, cost);
            }
            f[i][j] = minCost;
        }
    }
    return f[1][n];
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/guess-number-higher-or-lower-ii/solution/cai-shu-zi-da-xiao-ii-by-leetcode-soluti-a7vg/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。