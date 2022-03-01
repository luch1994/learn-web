var testFunc = function () { console.log(this); }
// var testFunc = () => { console.log(this); }
var objA = {
  name: 'objA',
  testFunc: testFunc
};

var objB = {
  name: 'objB'
};

var testFuncBind = testFunc.bind(objA);
var ttFunc = objA.testFunc;

// 如果 testFunc 是箭头函数，则下面输出什么
testFunc(); // window
objA.testFunc(); // window
testFuncBind(); // window
testFunc.apply(objA); // window
testFuncBind.apply(objB); // window
ttFunc(); // window



// testFunc为非箭头函数时如下的函数输出什么
// testFunc(); // window
// objA.testFunc(); // objA
// testFuncBind(); // function testFunc() {}  ！！正确答案的objA
// testFunc.apply(objA); // objA
// testFuncBind.apply(objB); // objB  ！！正确答案是objA，bind是永久绑定的
// ttFunc(); // window