/**
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * 129. 求根节点到叶节点数字之和
 */
 var sumNumbers = function (root) {
  if (!root) return 0
  let arr = []
  const dfs = (str, node) => {
    if (!node.left && !node.right) return arr.push(Number(str+node.val))
    node.left && dfs(str + node.val, node.left)
    node.right && dfs(str + node.val, node.right)
  }
  dfs('', root)
  return arr.reduce((add, item) => add += item, 0) || root.val
};

/**
 * https://bigfrontend.dev/zh/problem/remove-characters
 */

