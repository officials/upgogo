/**
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * 876. 链表的中间结点
 */

var middleNode = function (head) {
  if (!head || !head.next) return head
  let curr = head,
    count = 0
  while (curr) {
    count += 1
    curr = curr.next
  }
  const mid = Math.floor(count / 2)
  let node = head,
    num = 0
  while (node) {
    if (num >= mid) {
      return node
    }
    num += 1
    node = node.next
  }
}

/**
 * https://bigfrontend.dev/zh/problem/two-way-binding
 */

 function model(state, element) {
  element.value = state.value;
  Object.defineProperty(state, 'value', {
    get: () => element.value,
    set: (value) => element.value = value,
  })
}