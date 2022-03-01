/**

输入：machines = [1,0,5]
输出：3
解释：
第一步:    1     0 <-- 5    =>    1     1     4
第二步:    1 <-- 1 <-- 4    =>    2     1     3    
第三步:    2     1 <-- 3    =>    2     2     2  

输入：machines = [0,3,0]
输出：2
解释：
第一步:    0 <-- 3     0    =>    1     2     0    
第二步:    1     2 --> 0    =>    1     1     1 

输入：machines = [0,2,0]
输出：-1
解释：
不可能让所有三个洗衣机同时剩下相同数量的衣物。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/super-washing-machines
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 * @param {number[]} machines
 * @return {number}
 */
// var findMinMoves = function (machines) {
//     const sum = machines.reduce((pre, cur) => {
//         return pre + cur;
//     });
//     if (sum % machines.length !== 0) {
//         return -1;
//     }
//     const average = sum / machines.length;
//     for(let i = 0, len = machines.length; i < len; i++) {
        
//     }
// };

var findMinMoves = function(machines) {
    const tot = eval(machines.join('+'));
    const n = machines.length;
    if (tot % n !== 0) {
        return -1;
    }
    let avg = Math.floor(tot / n);
    let ans = 0, sum = 0;
    for (let num of machines) {
        num -= avg;
        sum += num;
        ans = Math.max(ans, Math.max(Math.abs(sum), num));
    }
    return ans;
};


console.log(findMinMoves([1,0,5]));
console.log(findMinMoves([0,2,0]));