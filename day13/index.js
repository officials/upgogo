/**
 * 1.算法题：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
 * 104. 二叉树的最大深度
 */

 var maxDepth = function (root) {
  if (root === null) {
      return 0;
  }
  let left=maxDepth(root.left);
  let right=maxDepth(root.right);
  return Math.max(left,right)+1;
};

/**
 * 2.手写题：https://bigfrontend.dev/zh/problem/immerjs
 */