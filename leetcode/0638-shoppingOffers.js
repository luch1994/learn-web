/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
    const filterSpecial = [];
    const n = price.length;
    for (const curSpecial of special) {
        let totalPrice = 0;
        let totalCount = 0;
        for (let i = 0; i < n; i++) {
            totalCount += curSpecial[i];
            totalPrice += curSpecial[i] * price[i];
        }
        if (totalCount > 0 && totalPrice > curSpecial[n]) {
            filterSpecial.push(curSpecial);
        }
    }

    return dfs(price, filterSpecial, needs)

};

const dfs = (price, special, needs) => {
    const map = new Map();
    const n = price.length;
    const innerDfs = (price, special, curNeeds) => {
        if (map.has(curNeeds)) {
            return map.get(curNeeds);
        }
        let minPrice = 0;
        // 什么礼包都不买的价格
        for (let i = 0; i < n; i++) {
            minPrice += curNeeds[i] * price[i];
        }
        for (const curSpecial of special) {
            const nextNeeds = [];
            for (let i = 0; i < n; i++) {
                if (curSpecial[i] > curNeeds[i]) {
                    break;
                }
                nextNeeds.push(curNeeds[i] - curSpecial[i]);
            }
            if (nextNeeds.length === n) {
                minPrice = Math.min(minPrice, innerDfs(price, special, nextNeeds) + curSpecial[n]);
            }
        }
        map.set(curNeeds, minPrice);
        return map.get(curNeeds);
    };
    return innerDfs(price, special, needs);
}


// console.log(shoppingOffers([2, 5], [[3, 0, 5], [1, 2, 10]], [3, 2])); // 14
// console.log(shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 2, 1])); // 11
console.log(shoppingOffers([0, 0, 0], [[1, 1, 0, 4], [2, 2, 1, 9]], [1, 1, 1])); // 0



