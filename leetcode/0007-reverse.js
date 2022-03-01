/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let flag = 1;
    if (x < 0) {
        flag = -1;
        x = -x;
    }
    let newX = x % 10;
    x = Math.floor(x / 10);
    while (x != 0) {
        newX *= 10;
        newX += x % 10;
        x = Math.floor(x / 10);
    }

    const ret = flag * newX;
    const comp = Math.pow(2, 31);
    if (comp - 1 < ret || -comp > ret) {
        return 0;
    }
    return ret;
};

console.log(reverse(123));
console.log(reverse(1534236469));