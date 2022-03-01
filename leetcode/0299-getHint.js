/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let A = 0, B = 0;
    const sArr = new Array(10).fill(0), gArr = new Array(10).fill(0);
    const zero = '0'.charCodeAt();
    for(let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            A++;
        } else {
            const sIndex = secret[i].charCodeAt() - zero;
            const gIndex = guess[i].charCodeAt() - zero;
            sArr[sIndex]++;
            gArr[gIndex]++;
        }
    }
    for(let i = 0; i < 10; i++) {
        B += Math.min(sArr[i], gArr[i]);
    }
    return `${A}A${B}B`;
};

// https://leetcode-cn.com/problems/bulls-and-cows/
console.log(getHint('1807', '7810')); // 1A3B
console.log(getHint('1123', '0111')); // 1A1B
console.log(getHint('1', '0')); // 0A0B
console.log(getHint('1', '1')); // 1A0B