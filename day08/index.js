/**
 * 1.算法题：https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 */

var swapPairs = function (head) {
  if (!head || !head.next) return head
  let newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
};
/**
 * 2.手写题：https://bigfrontend.dev/zh/problem/implement-your-own-Object-create
 */

 function myObjectCreate(proto) {
  if(typeof proto !== 'object'){
    console.log(typeof proto)
    throw Error('Expected function to throw an exception.')
  }
  function Fn(){}
  Fn.prototype=proto
  return new Fn()
}