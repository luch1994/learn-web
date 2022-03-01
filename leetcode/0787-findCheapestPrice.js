// 有 n 个城市通过一些航班连接。
// 给你一个数组 flights ，其中 flights[i] = [fromi, toi, pricei] ，表示该航班都从城市 fromi 开始，以价格 pricei 抵达 toi。
// 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，
// 你的任务是找到出一条最多经过 k 站中转的路线，使得从 src 到 dst 的 价格最便宜 ，并返回该价格。 
// 如果不存在这样的路线，则输出 -1。


/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
// var findCheapestPrice = function (n, flights, src, dst, k) {
//     const INF = 10000 * 101 + 1;
//     const f = new Array(k + 2).fill(0).map(() => new Array(n).fill(INF));
//     f[0][src] = 0;
//     for (let t = 1; t <= k + 1; ++t) {
//         for (const flight of flights) {
//             const j = flight[0], i = flight[1], cost = flight[2];
//             f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost);
//         }
//     }
//     let ans = INF;
//     for (let t = 1; t <= k + 1; ++t) {
//         ans = Math.min(ans, f[t][dst]);
//     }
//     return ans == INF ? -1 : ans;
// };
var findCheapestPrice = function(n, flights, src, dst, k) {
    const INF = 10000 * 101 + 1;
    let f = new Array(n).fill(INF);
    f[src] = 0;
    let ans = INF;
    for (let t = 1; t <= k + 1; ++t) {
        const g = new Array(n).fill(INF);
        for (const flight of flights) {
            const j = flight[0], i = flight[1], cost = flight[2];
            g[i] = Math.min(g[i], f[j] + cost);
            // console.log(g[i])
        }
        f = g;
        ans = Math.min(ans, f[dst]);
        // console.log(f);
    }
    return ans == INF ? -1 : ans;
};

console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)); // 200
// console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0)); // 500

