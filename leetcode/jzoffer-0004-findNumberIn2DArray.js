/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    const n = matrix.length;
    const m = matrix[0].length;
    let row = 0, column = m - 1;
    while(row < n && column >= 0) {
        const num = matrix[row][column];
        if (num == target) {
            return true;
        } else if (num > target) {
            column--;
        } else {
            row++;
        }
    }
    return false;
};

console.log(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5));

console.log(findNumberIn2DArray([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 20));
