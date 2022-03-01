/**
 * 不断两两移除重复的字母
 * 重复字母不区分大小写
 * 要考虑时间复杂度和空间复杂度
 * 如：abCcBk
 * 第一次移除Cc，得到abBk
 * 第二次移除bB，得到ak
 */

function removeTheSame(s) {
  let res = s[0];
  for(let i = 1, len = s.length; i < len; i++) {
    let ch = s[i];
    let upper = ch.toUpperCase();
    let lower = ch.toLowerCase();
    if (res.indexOf(upper) >= 0) {
      res = res.replace(upper, '');
    } else if (res.indexOf(lower) >= 0) {
      res = res.replace(lower, '');
    } else {
      res += ch;
    }
  }
  return res;
}

console.log(removeTheSame('abCcBk'))
