function sum() {
  let a = Array.from(arguments);
  let result = 0;
  for (let item of a) {
    result += item;
  }
  return result;
}

const curry = function(fn) {
  let _args = Array.from(arguments).slice(1);
  let a = function(){
    // console.log(this);
    let new_args = Array.from(arguments);
    let args = _args.concat(new_args);
    return curry(fn, ...args);
    // return curry.call(this, fn, ...args);
  }
  a.value = function(){
    return fn.call(null, ..._args);
  }
  return a;
}

let mySum = curry(sum);
console.log(mySum);

console.log(mySum().value());
console.log(mySum(1).value());
console.log(mySum(1, 2, 3).value());
console.log(mySum(1)(4)(7).value());