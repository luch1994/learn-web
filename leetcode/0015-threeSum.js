var threeSum = function (nums) {
    const len = nums.length;
    if (len < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            return res
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            // 不能重复
            continue
        }
        let l = i + 1;
        let r = len - 1;
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            // console.log(`${i} ${l} ${r}`);
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while(l < r && nums[l] === nums[l + 1]) {
                    l++;
                }
                while(l < r && nums[r] === nums[r - 1]) {
                    r--;
                }
                l++;
                r--;
            } else if (sum > 0) {
                r--;
            } else {
                l++;
            }
        }
    }
    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([]));
// console.log(threeSum([0]));