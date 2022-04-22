/**
 * https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 * 297. 二叉树的序列化与反序列化
 */

 var serialize = function(root) {
  return rserialize(root, '');
};

var deserialize = function(data) {
  const dataArray = data.split(",");
  return rdeserialize(dataArray);
};

const rserialize = (root, str) => {
  if (root === null) {
      str += "None,";
  } else {
      str += root.val + '' + ",";
      str = rserialize(root.left, str);
      str = rserialize(root.right, str);
  }
  return str;
}

const rdeserialize = (dataList) => {
  if (dataList[0] === "None") {
      dataList.shift();
      return null;
  }

  const root = new TreeNode(parseInt(dataList[0]));
  dataList.shift();
  root.left = rdeserialize(dataList);
  root.right = rdeserialize(dataList);

  return root;
}
/**
 *   题目描述:渲染百万条结构简单的大数据时 怎么使用分片思想优化渲染
 */
const total = 1000000;
const pageSize = 20;
const totalPage = Math.ceil(total / pageSize);

let currentPage = 1;
const render = () => {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < pageSize; index++) {
    const element = document.createElement("li");
    element.innerText = (currentPage - 1) * pageSize + index + 1;
    fragment.appendChild(element);
  }

  currentPage++;

  ul.appendChild(fragment);

  if (currentPage < totalPage) {
    window.requestAnimationFrame(render);
  }
};

render();