/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var majorityElement = function(nums) {
    const floor = Math.floor(nums.length/3);
    const tmp = {};
    for(const item of nums) {
        if (!tmp[item]) {
            tmp[item] = 0;
        } 
        tmp[item]++;
    }
    const ret = [];
    for(const key in tmp) {
        if (tmp[key] > floor) {
            ret.push(+key)
        }
    }
    return ret;
};