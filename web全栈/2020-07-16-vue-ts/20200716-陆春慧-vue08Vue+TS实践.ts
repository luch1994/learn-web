// you can you up
// 属性装饰器，对属性的读取和设置做日志记录
function mylog(target: any, name: string) {
    // 缓存旧的值
    let value = target[name];
    // 删除属性
    delete target[name];
    Object.defineProperty(target, name, {
        get() {
            console.log(`get ${name} value: ${value}`);
            return value;
        },
        set(v) {
            console.log(`set ${name} value: ${v}`);
            value = v;
        }
    })
}

class Foo {
    @mylog
    public data: string;

    constructor(data) {
        this.data = data;
    }
}

let foo = new Foo("你好");
foo.data
foo.data = 'hello';

