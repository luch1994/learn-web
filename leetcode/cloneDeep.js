function cloneDeep(value) {
    return _cloneDeep(value)
}

function _cloneDeep(value) {
    if (!isObject(value)) {
        return value;
    }
    if (isArray(value)) {
        return cloneArray(value);
    }
    if (isBuffer(value)) {
        return cloneBuffer(value);
    }
    if (isSet(value)) {
        return cloneSet(value);
    }
    if (isMap(value)) {
        return cloneMap(value);
    }
    return cloneObject(value);
}

function isObject(obj) {
    const type = typeof obj;
    return obj !== null && type === 'object';
}

function isArray(value) {
    return Array.isArray(value);
}

function cloneArray(value) {
    return value.map(item => _cloneDeep(item));
}

function isBuffer(value) {
    if (Buffer) {
        return Buffer.isBuffer(value);
    }
    return false;
}

function cloenBuffer(buffer) {
    return buffer.slice();
}

function isSet(value) {
    return Set.prototype.isPrototypeOf(value);
}

function cloneSet(set) {
    const result = new Set();
    for(const item of set) {
        result.add(_cloneDeep(item));
    }
    return result;
}

function isMap(value) {
    return Map.prototype.isPrototypeOf(value);
}

function cloneMap(map) {
    const result = new Map();
    for(const [key, value] of map) {
        result.set(key, _cloneDeep(value));
    }
    return result;
}

function cloneObject(obj) {
    const keys = [];
    keys.push(...Object.keys(obj));
    const symbolKeys = Object.getOwnPropertySymbols(obj).filter(key => {
        return Object.prototype.propertyIsEnumerable.call(obj, key);
    });
    keys.push(...symbolKeys);
    const result = {};
    for (const key of keys) {
        result[key] = _cloneDeep(obj[key]);
    }
    return result;
}



const s1 = Symbol('1');
const s2 = Symbol('2');

const obj = {};
obj['a'] = 1;
obj[s1] = '2';
Object.defineProperty(obj, s2, {
    enumerable: true,
    value: 3
});

obj['b'] = {
    c: 111,
    d: {
        e: "222"
    }
}
obj['c'] = [1,2,Symbol('3')];

const map = new Map();
map.set('1', 'jajaj');
map.set([], [111]);
map.set({}, {a: 1})
obj['d'] = map;

const set = new Set();
set.add("");
set.add(1);
set.add([]);
set.add([]);

obj['e'] = set;

console.log(obj);

console.log(cloneDeep(obj));