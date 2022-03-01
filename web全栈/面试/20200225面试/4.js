var a = 1;
(function(){
  const obj = {
    a:3,
    funcA(){
      console.log(this.a)
    },
    funcB:()=>console.log(this.a)
  }
  obj.funcA()
  obj.funcB()
})()