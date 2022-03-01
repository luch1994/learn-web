/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    const str = num.toString(2);
    const ret = [];
    for(const ch of str.split('')) {
        if (ch === '0') {
            ret.push('1')
        } else {
            ret.push('0');
        }
    }
    return parseInt(ret.join(''), 2);
};
console.log(findComplement(1));