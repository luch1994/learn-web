function deepClone(sourceObject) {
    return _deepClone(sourceObject);
}

function _deepClone(sourceObject) {
    if (!sourceObject) {
        return sourceObject;
    }
    const baseArr = ['number', 'string', 'undefined', 'boolean', 'bigint'];
    const t = typeof sourceObject;
    if (baseArr.includes(t)) {
        return sourceObject;
    }
    if (Array.isArray(sourceObject)) {
        return sourceObject.map(item => _deepClone(item));
    } else if (isMap(sourceObject)) {
        const map = new Map();
        for (const [key, value] of sourceObject) {
            map.set(key, _deepClone(value));
        }
        return map;
    } else if (isSet(sourceObject)) {
        const set = new Set();
        for (const item of sourceObject) {
            set.add(_deepClone(item));
        }
        return set;
    } else if (isDate(sourceObject)) {
        return new Date(sourceObject);
    } else if (isFunction(sourceObject)) {
        return new Function(`return ${sourceObject.toString()}`);
    } else {
        const res = {};
        for (const key in sourceObject) {
            res[key] = _deepClone(sourceObject[key]);
        }
        return res;
    }
}

function isMap(obj) {
    return obj instanceof Map;
}

function isSet(obj) {
    return obj instanceof Set;
}

function isDate(obj) {
    return obj instanceof Date;
}

function isFunction(obj) {
    return typeof obj === 'function';
}

const map = new Map();
map.set(1, 1);
map.set({}, 2);
map.set(true, 3);

const tmp = {
    a: 1,
    b: false,
    c: 'str',
    d: undefined,
    e: BigInt(10),
    f: {
        a: {
            1: 1,
            2: 2
        },
    },
    g: [{ 1: 1 }, 2],
    h: new Date(),
    i: function () { console.log('haha') },
    j: new Set([1, 2]),
    k: map,
};

const cloned = deepClone(tmp);

console.log(tmp === cloned)