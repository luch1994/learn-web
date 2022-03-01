/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const s1 = Math.abs(ax2 - ax1) * Math.abs(ay2 - ay1);
    const s2 = Math.abs(bx2 - bx1) * Math.abs(by2 - by1);

    const overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1), overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1);
    const overlapArea = Math.max(overlapWidth, 0) * Math.max(overlapHeight, 0);
    return s1 + s2 - overlapArea;
};


// 输入：ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// 输出：45

// console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));

// 输入：ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// 输出：16

// console.log(computeArea(-2, -2, 2, 2, -2, -2, 2, 2)); 


// console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1)); // 4

console.log(computeArea(-2, -2, 2, 2, -1, -1, 1, 1));




// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rectangle-area
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。