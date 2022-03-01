/**
 * 说明：计算多个区间的交集。
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection`，可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 * 示例：
 *   getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
 *   getIntersection([1, 7], [8, 9]); // null
 */
function getIntersection() {
  /* 代码实现 */
  let args = Array.from(arguments).map(item => {
    if (item[0] > item[1]) {
      return [item[1], item[0]]
    }
    return item;
  });

  // let res = args.reduce((pre, cur) => {
  //   if (pre == null || cur == null) {
  //     return null;
  //   }
  //   if (pre[0] > cur[1] || pre[1] < cur[0]) {
  //     return null;
  //   }
  //   return [Math.max(pre[0], cur[0]), Math.min(pre[1], cur[1])]
  // })
  let res = args[0]
  for(let i = 1, len = args.length; i < len; i++) {
    let cur = args[i];
    if (res == null || cur == null) {
      res == null;
      break;
    } else if (res[0] > cur[1] || res[1] < cur[0]) {
      res = null;
      break;
    } else {
      res = [Math.max(res[0], cur[0]), Math.min(res[1], cur[1])];
    }
  }

  return res;

}


let res = getIntersection([5, 2], [4, 9], [3, 6]);
console.log(res);

res = getIntersection([1, 7], [8, 9]); // null
console.log(res);