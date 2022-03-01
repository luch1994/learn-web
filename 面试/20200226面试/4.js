/**
 * 前序遍历输入二叉树字符串，生成层次遍历
 * 输入：-4(2(3)(1))(6(5))
 */
function binaryTreeNode(data) {
  this.data = data;
  this.leftChild = null;
  this.rightChild = null;
  this.parentNode = null;
}

function initTree(s) {
  let k = 0, node = null, stack = [];
  for(let i = 0, len = s.length; i < len; i++) {
    
  }
}