
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
// 来源：力扣（LeetCode）

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 链接：https://leetcode-cn.com/problems/zigzag-conversion
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows < 2 || s.length < 2) {
        return s;
    }
    const len = s.length;
    let num = 0;
    const ret = [];
    // console.log(`len ${len}`);
    for(let i = 0; i < numRows; i++) {
        const top = num; // 当前行数，上面有几个
        const bottom = numRows - num - 1; // 下面有几个
        let step1, step2;
        if (top === 0 || bottom === 0) {
            // 端点
            step1 = (numRows - 1) * 2 - 1 + 1;
            step2 = step1;
        } else {
            step1 = bottom * 2 - 1 + 1;
            step2 = top * 2 - 1 + 1;
        }
        // if (step1 === 0 && step2 === 0) {
        //     step1 = 1;
        //     step2 = 1;
        // }
        // console.log(`step1 ${step1} step2 ${step2}`);
        let step = step1;
        for(let j = num; j < len;) {
            ret.push(s[j]);
            j += step;
            if (step === step1) {
                step = step2;
            } else {
                step = step1;
            }
        }
        num++;
    }
    // console.log(`ret len ${ret.length}`)
    return ret.join('');
};

// console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR') // PAHNAPLSIIGYIR
// console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI') // PINALSIGYAHRPI
console.log(convert('A', 1) === 'A') // A
