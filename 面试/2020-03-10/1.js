const arr1 = [1,3,5];
const arr2 = [2,4,6];

console.log(merge(arr1, arr2))  // => [1,2,3,4,5,6]

/**
 * 有序数组合并(假设数据都是升序，只考虑升序)
 *
 * @param {Array} arr1 有序数组1
 * @param {Array} arr2 有序数组2
 * @return {Array} 
 */
function merge(arr1, arr2) {
  // 你的代码
  let arr = [];
  let i1 = 0, i2 = 0, len1 = arr1.length, len2 = arr2.length;
  while(i1 < len1 && i2 < len2) {
    if (arr1[i1] < arr2[i2]) {
      arr.push(arr1[i1]);
      i1++;
    } else {
      arr.push(arr2[i2]);
      i2++;
    }
  }
  while(i1 < len1) {
    arr.push(arr1[i1]);
    i1++;
  }
  while(i2 < len2) {
    arr.push(arr2[i2]);
    i2++;
  }
  return arr;
}