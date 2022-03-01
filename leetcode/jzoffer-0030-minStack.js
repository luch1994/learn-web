/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.minList = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    if (!this.minList.length) {
        this.minList.push(x);
    } else {
        const newMin = Math.min(this.minList[this.minList.length - 1], x);
        this.minList.push(newMin);
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minList.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minList[this.minList.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.min());