/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    const needCount = m * k;
    if (needCount> bloomDay.length) {
        return -1;
    }
    let min;
    let count = 0;
    while (true) {
        let newmin = Math.min(...bloomDay);
        if (newmin != Infinity) {
            min = newmin;
        }
        bloomDay = bloomDay.map(item => {
            if (item == newmin) {
                count++;
                return Infinity;
            }
            return item;
        });
        // console.log(bloomDay);
        if (count >= needCount) {
            let i = 0, getCount = 0;
            for(const cur of bloomDay) {
                if (cur == Infinity) {
                    i++;
                } else {
                    i = 0;
                }
                if (i == k) {
                    i = 0;
                    getCount++;
                }
            }
            if (getCount >= m) {
                break;
            }
        }
        // console.log(count);
        if (count >= bloomDay.length) {
            break;
        }
    }
    return min;

};

console.log(minDays([1, 10, 3, 10, 2], 3, 1));
console.log(minDays([1, 10, 3, 10, 2], 3, 2));
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
console.log(minDays([1000000000, 1000000000], 1, 1));
console.log(minDays([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], 4, 2));
