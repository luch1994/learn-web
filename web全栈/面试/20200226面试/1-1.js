const getUglyNumber = function (n) {
  if (n == 0) {
    return 0;
  }
  let arr = [1];
  let t2 = 0, t3 = 0, t5 = 0;
  for (let i = 1; i < n; i++) {
    let tmp = Math.min(arr[t2] * 2, arr[t3] * 3, arr[t5] * 5);
    
    if (tmp == arr[t2] * 2) {
      t2++;
    } else if (tmp == arr[t3] * 3) {
      t3++;
    } else if (tmp == arr[t5] * 5) {
      t5++;
    }
    if (arr[i - 1] == tmp) {
      i--;
    } else {
      arr.push(tmp);
    }
  }
  console.log(arr)
  return arr[n - 1];
}

console.log(getUglyNumber(1));
console.log(getUglyNumber(9));
console.log(getUglyNumber(15));
console.log(getUglyNumber(20));