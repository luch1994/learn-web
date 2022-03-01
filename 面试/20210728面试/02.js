console.log('Hello World!');


function deepClone(data) {
    if (typeof data != 'object') {
        return data;
    }
    if (data === null) {
        return data;
    }
    if (Array.isArray(data) || Set.prototype.isPrototypeOf(data)) {
        return data.map(item => deepClone(item));
    }
    if (Map.prototype.isPrototypeOf(data)) {
        const ret = new Map();
        for(const [key, value] of data) {
            ret.set(key, value);
        }
    }
    const newData = {};
    const keys = Object.keys(data);
    keys.forEach(key => {
        newData[key] = deepClone(data[key]);
    });
    newData.__proto__ = data.__proto__;
    return newData;
}

const obj = {
    a: 1,
    b: {
        c: 1,
    },
    d: function() {

    }
}

const obj1 = deepClone(obj);
console.log(obj1);