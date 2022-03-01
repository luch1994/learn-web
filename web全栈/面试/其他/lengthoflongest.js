/**
 * 说明：给定一个字符串，找出不含有重复字符的最长子串的长度
 *   如给定'abcabcbb' ，没有重复字符的最长子串是'abc' ，那么长度就是3
 * 示例：
 *   lengthOfLongestSubstring('bbbbb'); // 返回 1
 *   lengthOfLongestSubstring('')； // 返回 0
 *   lengthOfLongestSubstring('cbca'); // 返回 3
 *   lengthOfLongestSubstring('c'); // 返回 1
 *   lengthOfLongestSubstring('abcdaccbac'); // 返回 4
 */
function lengthOfLongestSubstring(s) { 
  if (s.length <= 1) {
    return s.length;
  }
  let start = 0, maxLen = 1, tmp = s[0];
  for(let i = 1, len = s.length; i < len; i++) {
    let ch = s[i];
    if (tmp.indexOf(ch) >= 0) {
      maxLen = Math.max(tmp.length, maxLen);
      start += tmp.indexOf(ch) + 1;
    }
    tmp = s.slice(start, i + 1)
  }
  maxLen = Math.max(tmp.length, maxLen);
  return maxLen;
}

lengthOfLongestSubstring('bbbbb'); // 返回 1
lengthOfLongestSubstring(''); // 返回 0
lengthOfLongestSubstring('cbca'); // 返回 3
lengthOfLongestSubstring('c'); // 返回 1
lengthOfLongestSubstring('abcdaccbac'); // 返回 4