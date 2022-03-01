function isHuiwen(num) {
  let str = num + '';
  
  let maxLen = str.length;
  let len = maxLen / 2;
  for(let i = 0; i < len; i++) {
    if(str[i] != str[maxLen - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isHuiwen(121));
console.log(isHuiwen(7887));
console.log(isHuiwen(112));

function main() {
  let result = [];
  for(let i = 0; i < 100000; i++) {
    if(isHuiwen(i)) {
      result.push(i);
    }
  }
  console.log(result);
}

main();