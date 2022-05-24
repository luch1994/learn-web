// 实现算法，从给定的无序、不重复的数组data中，取出n个数，使其相加和为sum

function nsum(data, n, sum) {
    if (n === 0 || sum === 0) {
        return []
    }
    if (n === 1) {
        for(const num of data) {
            if (num === sum) {
                return [num];
            }
        }
        return [];
    }
    for(let i = 0; i < data.length; i++) {
        let curArr;
        if (i === 0) {
            curArr = data.slice(1, data.length);
        } else if (i === data.length - 1) {
            curArr = data.slice(0, data.length - 1);
        } else {
            curArr = data.slice(0, i).concat(data.slice(i + 1));
        }
        const current = data[i];
        const res = nsum(curArr, n - 1, sum - current);
        if (res.length === n - 1) {
            return [current, ...res];
        }
    }
    return [];
}

console.log(nsum([1,2,3,4,5,6,7], 3, 11));