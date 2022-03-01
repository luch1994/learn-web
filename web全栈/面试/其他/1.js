// 需要考虑polyfill情况
Object.setPrototypeOf = Object.setPrototypeOf ||
    function ( obj, proto )
    {
        obj.__proto__ = proto;

        return obj;
    };

/**
 * 用了点技巧的继承，实际上返回的是Date对象
 */
function MyDate ()
{
    // bind属于Function.prototype，接收的参数是：object, param1, params2...
    var dateInst = new ( Function.prototype.bind.apply( Date,
        [ Date ].concat( Array.prototype.slice.call( arguments ) ) )
    )

        ();

    // 更改原型指向，否则无法调用MyDate原型上的方法
    // ES6方案中，这里就是[[prototype]]这个隐式原型对象，在没有标准以前就是__proto__
    Object.setPrototypeOf( dateInst, MyDate.prototype );

    dateInst.abc = 1;

    return dateInst;
}

// 原型重新指回Date，否则根本无法算是继承
Object.setPrototypeOf( MyDate.prototype, Date.prototype );

MyDate.prototype.getTest = function getTest ()
{
    return this.getTime();
};

let date = new MyDate();

// 正常输出，譬如1515638988725
console.log( date.getTest() );