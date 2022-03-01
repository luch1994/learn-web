function getFn() {
  let cache = new Map();
  const str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  function getStr() {
    let firstI = Math.floor(Math.random() * 26);
    let ret = str[firstI];
    for(let i = 0; i < 7; i++) {
      ret += str[Math.floor(Math.random() * 36)];
    }
    return ret;
  }

  return () => {
    let ret = getStr();
    while(cache.has(ret)) {
      ret = getStr();
    }
    cache.set(str, true);
    return ret;
  }
}

const getUnrepeatStr = getFn();

for(i = 0; i < 10; i++) {
  console.log(getUnrepeatStr())
}