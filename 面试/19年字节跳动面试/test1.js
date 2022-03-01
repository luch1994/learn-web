function sum() {
  const a = Array.from(arguments);
  console.log(a)
  let result = 0;
  for (let item of a) {
    result += item;
  }
  const fn =  function () {
    return sum(result, ...arguments);
  };
  fn.result = function() {
    return result;
  }
  return fn;
}



// console.log(sum(1));
console.log(sum(1, 3)(2).result());