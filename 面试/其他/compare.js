/**
 * 写一个数组比较函数，比较数组 a 和 b 并返回相同和不同元素的个数（数组内元素不重复）。
 * 示例：
 *   compare([1, 3, 4], [3, 4]) // { diff: 1, same: 2 }
 *   compare([1, 3], []) // { diff: 2, same: 0 }
 *   compare([1, 3], [1, 3]) // { diff: 0, same: 2 }
 */
function compare(arr1, arr2) {
  let diff = 0, same = 0;
  let len1 = arr1.length;
  let len2 = arr2.length;
  if (len1 == 0) {
    diff = len2;
    same = 0;
  } else if (len2 == 0) {
    diff = len1;
    same = 0;
  } else {
    let c;
    if (len1 < len2) {
      c = [{
        arr: arr1,
        len: len1
      }, {
        arr: arr2,
        len: len2
      }];
    } else {
      c = [{
        arr: arr2,
        len: len2
      }, {
        arr: arr1,
        len: len1
      }];
    }
    for (let i = 0, len = c[0].len; i < len; i++) {
      if (c[1].arr.indexOf(c[0].arr[i]) >= 0) {
        same++;
      } else {
        diff++
      }
    }
    diff += c[1].len - c[0].len;
  }
  return {
    same, diff
  }
}

console.log(compare([1, 3, 4], [3, 4])); // { diff: 1, same: 2 }
console.log(compare([1, 3], [])) // { diff: 2, same: 0 }
console.log(compare([1, 3], [1, 3])) // { diff: 0, same: 2 }
console.log(compare([1, 2, 3, 5, 6, 8, 98, 7, 45, 22], [11, 23])) // { diff: 10, same: 0 }