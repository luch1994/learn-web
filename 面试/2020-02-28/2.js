function getRate(n) {
  if (n >= 991) {
    return 1;
  }
  let fenmu = 1, fenzi = 1;
  for(let i = 1000; i >= 991; i--) {
    // fenmu *= (i / 1000);
    // fenzi *= ((i - n) / 1000);
    fenmu *= (i);
    fenzi *= ((i - n));
  }
  return (fenmu - fenzi) / fenmu;
}

console.log(getRate(20));
console.log(getRate(100))
console.log(getRate(200))
console.log(getRate(300))
console.log(getRate(400))
console.log(getRate(500))
console.log(getRate(600))
console.log(getRate(700))
console.log(getRate(800))
console.log(getRate(900))
console.log(getRate(910))