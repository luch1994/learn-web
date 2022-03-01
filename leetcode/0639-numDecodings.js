/**
输入：s = "*"
输出：9
解释：这一条编码消息可以表示 "1"、"2"、"3"、"4"、"5"、"6"、"7"、"8" 或 "9" 中的任意一条。
可以分别解码成字符串 "A"、"B"、"C"、"D"、"E"、"F"、"G"、"H" 和 "I" 。
因此，"*" 总共有 9 种解码方法。

输入：s = "1*"
输出：18
解释：这一条编码消息可以表示 "11"、"12"、"13"、"14"、"15"、"16"、"17"、"18" 或 "19" 中的任意一条。
每种消息都可以由 2 种方法解码（例如，"11" 可以解码成 "AA" 或 "K"）。
因此，"1*" 共有 9 * 2 = 18 种解码方法。

输入：s = "2*"
输出：15
解释：这一条编码消息可以表示 "21"、"22"、"23"、"24"、"25"、"26"、"27"、"28" 或 "29" 中的任意一条。
"21"、"22"、"23"、"24"、"25" 和 "26" 由 2 种解码方法，但 "27"、"28" 和 "29" 仅有 1 种解码方法。
因此，"2*" 共有 (6 * 2) + (3 * 1) = 12 + 3 = 15 种解码方法。


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-ways-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let f = 0, f1 = 1, f2 = 0; // f -> f(i); f1 -> f(i-1); f2 -> f(i-2)
    const n = s.length;
    const MOD = 1000000007;
    for (let i = 0; i < n; i++) {
        // 只使用一个字符的情况
        
        f = f1 * useOne(s[i]) % MOD;
        if (i > 0) {
            f = (f + f2 * useTwo(s[i - 1], s[i])) % MOD;
        }
        console.log(`${f1} -> ${f}`);
        f2 = f1;
        f1 = f;
        
    }
    return f;
};

function useOne(ch) {
    if (ch === '0') {
        return 0;
    }
    return ch === '*' ? 9 : 1;
}

function useTwo(c0, c1) {
    if (c0 === '*' && c1 === '*') {
        return 15;
    }
    if (c0 === '*') {
        return c1.charCodeAt() <= '6'.charCodeAt() ? 2 : 1;
    }
    if (c1 === '*') {
        if (c0 === '1') {
            return 9;
        }
        if (c0 === '2') {
            return 6;
        }
        return 0;
    }
    if (c0 === '0') {
        return 0
    }
    if (parseInt(`${c0}${c1}`) <= 26) {
        return 1;
    }
    return 0;
}

// var numDecodings = function(s) {
//     const MOD = 1000000007;
//     const n = s.length;
//     // a = f[i-2], b = f[i-1], c = f[i]
//     let a = 0, b = 1, c = 0;
//     for (let i = 1; i <= n; ++i) {
//         c = b * check1digit(s[i - 1]) % MOD;
//         if (i > 1) {
//             c = (c + a * check2digits(s[i - 2], s[i - 1])) % MOD;
//         }
//         a = b;
//         b = c;
//     }
//     return c;
// }

// const check1digit = (ch) => {
//     if (ch === '0') {
//         return 0;
//     }
//     return ch === '*' ? 9 : 1;
// }

// const check2digits = (c0, c1) => {
//     if (c0 === '*' && c1 === '*') {
//         return 15;
//     }
//     if (c0 === '*') {
//         return c1.charCodeAt() <= '6'.charCodeAt() ? 2 : 1;
//     }
//     if (c1 === '*') {
//         if (c0 === '1') {
//             return 9;
//         }
//         if (c0 === '2') {
//             return 6;
//         }
//         return 0;
//     }
//     return (c0 !== '0' && (c0.charCodeAt() - '0'.charCodeAt()) * 10 + (c1.charCodeAt() - '0'.charCodeAt()) <= 26) ? 1 : 0;
// }

// console.log(numDecodings('*')) // 9
// console.log(numDecodings('1*')) // 18
// console.log(numDecodings('2*')) // 15
// console.log(numDecodings('126')) // 3
// console.log(numDecodings("**")); // 96
// console.log(numDecodings("***")); // 999
console.log(numDecodings("*********")); // 291868912