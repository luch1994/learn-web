const objA = {
  testA: function () {
    return () => console.log(this);
  }
}

const testOutA = objA.testA;

const objB = {
  testB: objA.testA
}

const testOutB = objB.testB;

const objC = {
  testa1: objA.testA(),
  testa2: testOutA(),
  testb1: objB.testB(),
  testb2: testOutB(),
}

// console.log(objC)
// 下面输出什么
objC.testa1(); // window
objC.testa2(); // window
objC.testb1(); // window
objC.testb2(); // window

// 箭头函数的this指向的是声明时候的this