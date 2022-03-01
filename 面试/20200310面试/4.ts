interface Node {
  left?: Node;
  right?: Node;
}

/**
 * 求一个对象的最大深度
 *
 * @param {Node} tree
 */
function maxDeep(tree) {
  // 你的代码
  if (tree == null) {
    return 0;
  }
  if (tree.left == null && tree.right == null) {
    return 1;
  }
  return Math.max(maxDeep(tree.left) + 1, maxDeep(tree.right) + 1);
}
