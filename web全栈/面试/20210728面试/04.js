console.log('Hello World!');

Promise.all = function (arr) {
    if (!Array.isArray(arr)) {
        throw new Error('参数必须是数组');
    }
    return new Promise((resolve, reject) => {
        function dealRes(i, res) {
            ret[i] = res;
            count++;
            if (count === arr.length) {
                resolve(ret);
            }
        }
        const ret = new Array(arr.length);
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (typeof item === 'function') {
                let res = item();
                dealRes(i, res);
            } else if (Promise.prototype.isPrototypeOf(item)) {
                item.then(res => {
                    dealRes(i, res)
                }, reject);
            } else {
                dealRes(i, item)
            }
        }

    })
}

Promise.all([1, () => [], new Promise((resolve) => resolve(3))]).then(res => {
    console.log(res);
})