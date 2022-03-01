// 回溯+剪枝
// var removeInvalidParentheses = function(s) {
//     const helper = (str, start, lcount, rcount, lremove, rremove) => {
//         if (lremove === 0 && rremove === 0) {
//             if (isValid(str)) {
//                 res.push(str);
//             }
//             return;
//         }
//         for (let i = start; i < str.length; i++) {
//             if (i !== start && str[i] === str[i - 1]) {
//                 continue;
//             }
//             // 如果剩余的字符无法满足去掉的数量要求，直接返回
//             if (lremove + rremove > str.length - i) {
//                 return;
//             } 
//             // 尝试去掉一个左括号
//             if (lremove > 0 && str[i] === '(') {
//                 helper(str.substr(0, i) + str.substr(i + 1), i, lcount, rcount, lremove - 1, rremove);
//             }
//             // 尝试去掉一个右括号
//             if (rremove > 0 && str[i] === ')') {
//                 helper(str.substr(0, i) + str.substr(i + 1), i, lcount, rcount, lremove, rremove - 1);
//             }
//             if (str[i] === ')') {
//                 lcount++;
//             } else if (str[i] === ')') {
//                 rcount++;
//             }
//             // 当前右括号的数量大于左括号的数量则为非法,直接返回.
//             if (rcount > lcount) {
//                 break;
//             }
//         }
//     }
//     const res = [];
//     let lremove = 0;
//     let rremove = 0;
//     for (const c of s) {
//         if (c === '(') {
//             lremove++;
//         } else if (c === ')') {
//             if (lremove === 0) {
//                 rremove++;
//             } else {
//                 lremove--;
//             }
//         }
//     }
//     helper(s, 0, 0, 0, lremove, rremove);
//     return res;
// }
// const isValid = (str) => {
//     let cnt = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(') {
//             cnt++;
//         } else if (str[i] === ')') {
//             cnt--;
//             if (cnt < 0) {
//                 return false;
//             }
//         }
//     }
//     return cnt === 0;
// }

// 广度优先搜索
var removeInvalidParentheses = function(s) {
    const ans = [];
    let currSet = new Set();
    currSet.add(s);
    while (true) {
        for (const str of currSet) {
            if (isValid(str)) {
                ans.push(str);
            }
        }
        if (ans.length > 0) {
            return ans;
        }
        const nextSet = new Set();
        for (const str of currSet) {
            for (let i = 0; i < str.length; i ++) {
                if (i > 0 && str[i] === str[i - 1]) {
                    continue;
                }
                if (str[i] === '(' || str[i] === ')') {
                    nextSet.add(str.substring(0, i) + str.substring(i + 1));
                }
            }
        }
        currSet = nextSet;
    }
}
const isValid = (str) => {
    let count = 0;
    for (const c of str) {
        if (c === '(') {
            count++;
        } else if (c === ')') {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
}

// 枚举状态子集
// var removeInvalidParentheses = function(s) {
//     let lremove = 0;
//     let rremove = 0;
//     const left = [];
//     const right = [];
//     const ans = [];
//     const cnt = new Set();
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             left.push(i);
//             lremove++;
//         } else if (s[i] === ')') {
//             right.push(i);
//             if (lremove === 0) {
//                 rremove++;
//             } else {
//                 lremove--;
//             }
//         }
//     }
//     const m = left.length;
//     const n = right.length;
//     const maskArr1 = [];
//     const maskArr2 = [];
//     for (let i = 0; i < (1 << m); i++) {
//         if (bitCount(i) !== lremove) {
//             continue;
//         }
//         maskArr1.push(i);
//     }
//     for (let i = 0; i < (1 << n); i++) {
//         if (bitCount(i) !== rremove) {
//             continue;
//         }
//         maskArr2.push(i);
//     }
//     for (const mask1 of maskArr1) {
//         for (const mask2 of maskArr2) {
//             if (checkValid(s, mask1, left, mask2, right)) {
//                 cnt.add(recoverStr(s, mask1, left, mask2, right));
//             }
//         }
//     }
//     for (const v of cnt) {
//         ans.push(v);
//     }
//     return ans;
// }
// const bitCount = (n) => {
//     let ret = 0;
//     while (n) {
//         n &= n - 1;
//         ret++;
//     }
//     return ret;
// };
// const checkValid = (str, lmask, left, rmask, right) => {
//     let pos1 = 0;
//     let pos2 = 0;
//     let cnt = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (pos1 < left.length && i === left[pos1]) {
//             if ((lmask & (1 << pos1)) === 0) {
//                 cnt++;
//             }
//             pos1++;
//         } else if (pos2 < right.length && i === right[pos2]) {
//             if ((rmask & (1 << pos2)) === 0) {
//                 cnt--;
//                 if (cnt < 0) {
//                     return false;
//                 }
//             }
//             pos2++;
//         }
//     }
//     return cnt === 0;
// }
// const recoverStr = (str, lmask, left, rmask, right) => {
//     const sb = [];
//     let pos1 = 0;
//     let pos2 = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (pos1 < left.length && i === left[pos1]) {
//             if ((lmask & (1 << pos1)) === 0) {
//                 sb.push(str[i]);
//             }
//             pos1++;
//         } else if (pos2 < right.length && i === right[pos2]) {
//             if ((rmask & (1 << pos2)) === 0) {
//                 sb.push(str[i]);
//             }
//             pos2++;
//         } else {
//             sb.push(str[i]);
//         }
//     }
//     return sb.join('');
// }


console.log(removeInvalidParentheses("()())()")); // ["(())()","()()()"]
console.log(removeInvalidParentheses("(a)())()")); // ["(a())()","(a)()()"]
console.log(removeInvalidParentheses(")(")); // [""]