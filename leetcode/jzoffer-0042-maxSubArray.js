var maxSubArray = function(nums) {
    let max = nums[0], sum = nums[0], sumIndex = 0;
    for(let i = 1; i < nums.length; i++) {
        while(nums[sumIndex] < 0 && sumIndex < i) {
            sum -= nums[sumIndex];
            sumIndex++;
        }
        sum += nums[i]
        if (sum > max) {
            max = sum;
            console.log(i);
        }
        
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
