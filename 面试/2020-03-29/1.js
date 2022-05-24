var n = parseInt(readline());
var arr = readline().split(' ').slice(0, n).map(item => parseInt(item));

function getCount(arr) {
  let count = 0;
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    if (arr[i] >= n) {
      count += Math.floor(arr[i] / n);
    }
  }
  return count;
}

let res = getCount([1,0,3])
console.log(res);

res = getCount([2,5,6,9,7,15]);//长度是6，输出应该为5
console.log(res);