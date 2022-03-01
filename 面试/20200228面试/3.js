function rabit() {
  const cache = [1,1,1,1,1];
  function getRabitNumber(n) {
    if (cache.length - 1 >= n) {
      return cache[n];
    }
    let newN = getRabitNumber(n - 1) + getRabitNumber(n - 4);
    cache.push(newN);
    return newN;
  }
  return getRabitNumber;
}

const getRabitNumber = rabit();

// console.log(getRabitNumber(5))
// console.log(getRabitNumber(6))
// console.log(getRabitNumber(7))
// console.log(getRabitNumber(8))
// console.log(getRabitNumber(9))
// console.log(getRabitNumber(10))
console.log(getRabitNumber(99))
console.log(getRabitNumber(100))