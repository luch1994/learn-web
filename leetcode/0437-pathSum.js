function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if (root == null) {
        return 0;
    }
    
    let ret = rootSum(root, targetSum);
    ret += pathSum(root.left, targetSum);
    ret += pathSum(root.right, targetSum);
    return ret;
};

const rootSum = (root, targetSum) => {
    let ret = 0;

    if (root == null) {
        return 0;
    }
    const val = root.val;
    if (val === targetSum) {
        ret++;
    } 

    ret += rootSum(root.left, targetSum - val);
    ret += rootSum(root.right, targetSum - val);
    return ret;
}



const getRoot = (arr) => {
    if (arr.length < 1) {
        return null;
    }
    if (arr.length === 1) {
        if (arr[0]) {
            return new TreeNode(arr[0]);
        }
        return null;
    }
    const nodeList = arr.map(item => {
        if (item === null) {
            return null;
        }
        return new TreeNode(item);
    })
    // 最大值：i * 2 + 2 = arr.length - 1; 
    for (let i = 0; i <= (arr.length - 3) / 2; i++) {
        if (nodeList[i] !== null) {
            nodeList[i].left = nodeList[i * 2 + 1];
            nodeList[i].right = nodeList[i * 2 + 2];
        }
    }
    return nodeList[0];
}

// function getArr(root) {
//     const arr = [root];
//     const ret = [];
//     while (arr.length !== 0) {
//         const tmp = arr.shift();
//         ret.push(tmp);
//         if (tmp) {
//             if (tmp.left || tmp.right) {
//                 arr.push(tmp.left);
//                 arr.push(tmp.right);
//             }

//         }
//     }
//     return ret.map(item => {
//         if (item) {
//             return item.val;
//         }
//         return null;
//     });
// }


/**
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3

 */

console.log(pathSum(getRoot([10,5,-3,3,2,null,11,3,-2,null,1]), 8))
console.log(pathSum(getRoot([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22))