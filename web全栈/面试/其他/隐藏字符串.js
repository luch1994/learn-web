/**
* 字符串隐藏部分内容
* 说明：实现一个方法，接收一个字符串和一个符号，将字符串中间四位按指定符号隐藏
*   1. 符号无指定时使用星号（*）
*   2. 接收的字符串小于或等于四位时，返回同样长度的符号串，等同于全隐藏，如 123，隐藏后是 ***
*   3. 字符串长度是大于四位的奇数时，如 123456789，隐藏后是 12****789，奇数多出来的一位在末尾
* 示例：
*   mask('alibaba', '#');  // a####ba
*   mask('85022088');   // 85****88
*   mask('hello');  // ****o
*   mask('abc', '?');  // ???
*   mask('阿里巴巴集团', '?'); // 阿????团
*/
function mask(str, ch = '*') {
  let len = str.length;
  if (len <= 4) {
    let ret = '';
    for (let i = 0; i < len; i++) {
      ret += ch;
    }
    return ret;
  }
  let start = Math.floor(len / 2) - 2;
  let chs = '';
  for (let i = 0; i < 4; i++) {
    chs += ch;
  }
  return str.slice(0, start) + chs + str.slice(start + 4);
}

console.log(mask('alibaba', '#'));  // a####ba
console.log(mask('85022088'));   // 85****88
console.log(mask('hello'));  // ****o
console.log(mask('abc', '?'));  // ???
console.log(mask('阿里巴巴集团', '?')); // 阿????团