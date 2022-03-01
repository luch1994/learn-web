/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const n = s.length;
    let a = 0, b = 1, c = 0;
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') {
            c += b;
        }
        if (i > 1 && s[i - 2] != '0' && (parseInt(s[i - 2]) * 10 + parseInt(s[i - 1])) <= 26) {
            c += a;
        }
        a = b;
        b = c;
        c = 0;
    }
    return b;
};

console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('0'));
console.log(numDecodings('06'));