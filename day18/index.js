/**
 * 987. 二叉树的垂序遍历
 * https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/
 */

var verticalTraversal = function (root) {
  const nodes = [];
  dfs(root, 0, 0, nodes);
  nodes.sort((tuple1, tuple2) => {
    if (tuple1[0] !== tuple2[0]) {
      return tuple1[0] - tuple2[0];
    } else if (tuple1[1] !== tuple2[1]) {
      return tuple1[1] - tuple2[1];
    } else {
      return tuple1[2] - tuple2[2];
    }
  });

  const ans = [];
  let lastcol = -Number.MAX_VALUE;
  for (const tuple of nodes) {
    let col = tuple[0], row = tuple[1], value = tuple[2];
    if (col !== lastcol) {
      lastcol = col;
      ans.push([]);
    }
    ans[ans.length - 1].push(value);
  }
  return ans;
}

const dfs = (node, row, col, nodes) => {
  if (node === null) {
    return;
  }
  nodes.push([col, row, node.val]);
  dfs(node.left, row + 1, col - 1, nodes);
  dfs(node.right, row + 1, col + 1, nodes);
}

/**
 * 请实现 DOM2JSON 一个函数，可以把一个 DOM 节点输出 JSON 的格式
 */

const Dom2Json = (element) => {
  if(!element) return null
  let json={}
  const attrs=Array.from(element.attributes)
  attrs.map((item)=>json[item.name]=item.value)
  if(element.childNodes){
    element.childNodes.map((item)=>json.children.push(Dom2Json(item)))
  }
  return json
}
