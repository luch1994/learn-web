function flattern(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i]);
        }
    }
    return arr;
}

function flattern(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return arr.reduce((pre, current) => {
        if (Array.isArray(current)) {
            return pre.concat()
        }
    })
}

console.log(flattern([1, [2, 3, 4], [5, 6], 7]))