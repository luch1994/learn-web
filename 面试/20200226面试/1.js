/**
 * 丑数
 */

function getUglyFn() {
  const cache = new Map();
  cache.set(2, true);
  cache.set(3, true);
  cache.set(5, true);
  const a = function(x) {
    if (x == 1 || x == 2 || x == 3 || x == 5) {
      return true;
    }
    if (cache.has(x)) {
      return true;
    }
    let tmp;
    if (x % 2 == 0) {
      tmp = x / 2;
    } else if (x % 3 == 0) {
      tmp = x / 3;
    } else if (x % 5 == 0) {
      tmp = x / 5;
    }
    if (tmp) {
      cache.set(x, true);
      return true;
    }
    return false;
  }
  a.cache = cache;
  return a;
}

const isUglyNumber = getUglyFn();

const getUglyNumber = function(n) {
  let a = 1, i = 1;
  while(i < n) {
    a++;
    if (isUglyNumber(a)) {
      i++;
      console.log(i);
    }
  }
  console.log(isUglyNumber.cache)
  return a;
}

// console.log(getUglyNumber(1));
// console.log(getUglyNumber(9));
console.log(getUglyNumber(15));
// console.log(getUglyNumber(20));
