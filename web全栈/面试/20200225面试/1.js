const a = 1
a.func()

a.func = function(){} // 报错，基本数据类型不能加上属性
a.__proto__.func = function(){}
Number.prototype.func = function(){}