var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// you can you up
// 属性装饰器，对属性的读取和设置做日志记录
function mylog(target, name) {
    // 缓存旧的值
    var value = target[name];
    // 删除属性
    delete target[name];
    Object.defineProperty(target, name, {
        get: function () {
            console.log("get " + name + " value: " + value);
            return value;
        },
        set: function (v) {
            console.log("set " + name + " value: " + v);
            value = v;
        }
    });
}
var Foo = /** @class */ (function () {
    function Foo(data) {
        this.data = data;
    }
    __decorate([
        mylog
    ], Foo.prototype, "data", void 0);
    return Foo;
}());
var foo = new Foo("你好");
foo.data;
foo.data = 'hello';
