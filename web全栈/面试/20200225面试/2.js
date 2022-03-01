Promise.resolve().then(() => {
  setTimeout(() => console.log(0), 0)
})
setTimeout(() => console.log(1), 0)
Promise.resolve().then(() => console.log(2))

/**
 * 这里是宏任务和微任务的区别
 * Promise是微任务，setTimeout是宏任务
 * 两个Promise微任务先执行，再执行宏任务，按添加的顺序
 */