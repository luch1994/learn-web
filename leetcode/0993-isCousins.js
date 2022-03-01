/**
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cousins-in-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 
 * 输入：root = [1,2,3,4], x = 4, y = 3
 * 输出：false
 * 
 * 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
 * 输出：true
 * 
 * 输入：root = [1,2,3,null,4], x = 2, y = 3
 * 输出：false
 * 
 * 二叉树的节点数介于 2 到 100 之间。
 * 每个节点的值都是唯一的、范围为 1 到 100 的整数。
 */



/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let level = 0;
    const arr = [root], xdepth = 0, ydepth = 0, xparent = null, yparent = null;
    const dfs = (node, depth, parent) => {
        if (node.val == x) {
        }
    }
    // const xindex = root.indexOf(x);
    // const yindex = root.indexOf(y);
    // if (xindex < 3 || yindex < 3) {
    //     // 不包含节点
    //     return false;
    // }

    // let i = 2;
    // if (Math.abs(yindex - xindex) <= 1) {
    //     // 说明相邻或者不在同一层
    //     return false;
    // }
    // while(true) {
    //     const start = Math.pow(2, i) - 1;
    //     const end = Math.pow(2, i + 1) - 2;
    //     if (xindex >= start && xindex <= end && yindex >= start && yindex <= end) {
    //         return true;
    //     }
    //     if (end >= root.length) {
    //         break;
    //     }
    // }
    // return false;
};

console.log(isCousins([1,2,3,4], 3, 4))
console.log(isCousins([1,2,3,null,4,null,5], 4, 5))
console.log(isCousins([1,2,3,null,4], 2, 3))
