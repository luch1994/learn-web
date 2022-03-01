// /**
//  * @param {number[][]} heightMap
//  * @return {number}
//  */
// var trapRainWater = function (heightMap) {
//     if (heightMap.lenght <= 2 || heightMap[0].length <= 2) {
//         return 0;
//     }
//     const m = heightMap.length, n = heightMap[0].length;
//     for(let i = 1; i < m - 1; i++) {
//         for(let j = 1; j < n - 1; j++) {

//         }
//     }
// };

var trapRainWater = function(heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;
    const dirs = [-1, 0, 1, 0, -1];
    let maxHeight = 0;
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            maxHeight = Math.max(maxHeight, heightMap[i][j]);
        }
    }
    const water = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j){
            water[i][j] = maxHeight;      
        }
    }  
    const qu = [];
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                if (water[i][j] > heightMap[i][j]) {
                    water[i][j] = heightMap[i][j];
                    qu.push([i, j]);
                }
            }
        }
    } 
    while (qu.length) {
        const curr = qu.shift();
        const x = curr[0];
        const y = curr[1];
        for (let i = 0; i < 4; ++i) {
            const nx = x + dirs[i], ny = y + dirs[i + 1];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                continue;
            }
            if (water[x][y] < water[nx][ny] && water[nx][ny] > heightMap[nx][ny]) {
                water[nx][ny] = Math.max(water[x][y], heightMap[nx][ny]);
                qu.push([nx, ny]);
            }
        }
    }

    let res = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            res += water[i][j] - heightMap[i][j];
        }
    }
    return res;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/trapping-rain-water-ii/solution/jie-yu-shui-ii-by-leetcode-solution-vlj3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(trapRainWater([[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]])) // 4
console.log(trapRainWater([[3, 3, 3, 3, 3], [3, 2, 2, 2, 3], [3, 2, 1, 2, 3], [3, 2, 2, 2, 3], [3, 3, 3, 3, 3]])) // 10