var nextGreaterElement = function (nums1, nums2) {
    // 思路，对nums做操作，找到每个元素对应的右边比他大的第一个数
    const map = new Map();
    const stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i]
        while (stack.length && num > stack[stack.length - 1]) {
            stack.pop();
        }
        map.set(num, stack.length ? stack[stack.length - 1] : -1);
        stack.push(num);
    }
    return nums1.map(item => map.get(item));
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
