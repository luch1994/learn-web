/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function (S) {
    const path = [];
    let pos = 0;
    while (pos < S.length) {
        let level = 0;
        while (S[pos] == '-') {
            level++;
            pos++;
        }
        let value = 0;
        while (pos < S.length && !isNaN(S[pos])) {
            value = value * 10 + (S[pos] - '0');
            ++pos;
        }
        const node = new TreeNode(value);
        if (level == path.length) {
            if (!path.empty()) {
                path[0].left = node;
            }
        } else {
            while (level != path.length) {
                path.pop();
            }
            path[0].right = node;
        }
        path.push(node);
    }
    while (path.length > 1) {
        path.pop();
    }
    return path[0];
};