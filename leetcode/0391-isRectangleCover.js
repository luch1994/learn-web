/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
    /**
     * 思路：
     * 先判断面积，小矩形的面积和是否等于大矩形的面积，不等于直接返回false
     * 判断顶点，除了四个角的顶点，其他的点相交的点数要么是2，要么是4
     */

};

console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [3, 2, 4, 4], [1, 3, 2, 4], [2, 3, 3, 4]])); // true
console.log(isRectangleCover([[1, 1, 2, 3], [1, 3, 2, 4], [3, 1, 4, 2], [3, 2, 4, 4]])); // false
console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [3, 2, 4, 4]])); // false
console.log(isRectangleCover([[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [2, 2, 4, 4]])); // false

