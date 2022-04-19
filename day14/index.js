/**
 * 1.算法题：https://leetcode-cn.com/problems/same-tree/
 * 100. 相同的树
 */
var isSameTree = function (p, q) {
  const dfs = (node1, node2) => {
    if (node1 === null || node2 === null) {
      if (node1 || node2) {
        return false;
      }
      return true;
    }
    if (node1.val !== node2.val) return false;
    return true && dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
  }
  return dfs(p, q)
};


/**
 * https://bigfrontend.dev/zh/problem/virtual-dom-v-jsx-2
 */