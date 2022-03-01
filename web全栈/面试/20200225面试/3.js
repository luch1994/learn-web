var a = 1
if (a) {
  let b = 2
}
const obj = {
  a: 3,
  funcA() {
    console.log(this.a)
  },
  funcB: () => console.log(this.a) // 在浏览器环境，会指向window.a，就是1，nodejs下是undefined
}
console.log(a)
// console.log(b)
obj.funcA()
obj.funcB()
console.log(this.a) // 在浏览器环境，会指向window.a，就是1，nodejs下是undefined
