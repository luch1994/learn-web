/**
 * @param {number} n
 * @return {boolean}
 */
 var reorderedPowerOf2 = function(n) {
    const arr = [];
    const handle = num => {
        return num.toString().split('').sort().join('');
    }
    for(let i = 0; i < 31; i++) {
        arr.push(handle(Math.pow(2, i)));
    }
    n = handle(n);
    return arr.includes(n);
};