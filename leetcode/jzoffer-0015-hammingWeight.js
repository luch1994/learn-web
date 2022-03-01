/**
 * @param {number} n - a positive integer
 * @return {number} 数字的二进制格式中1的个数
 */
 var hammingWeight = function(n) {
    let ret = 0;
    while(n) {
        n = n & n -1;
        ret++;
    }
    return ret;
};

console.log(hammingWeight(6)); // 2