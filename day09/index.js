/**
 * 算法题： https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * 109. 有序链表转换二叉搜索树
    给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。

    本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。
 */

/** 
 * 思路（leetcode题解）：脑构规则，想象成一根弯曲绳子，绳子凸起的部分是节点，绳子低谷是节点的左右子节点
*/
var sortedListToBST = function (head) {
   let arr = [], node = head;
   while (node) {
      arr.push(node.val)
      node = node.next
   }
   const buildTree = (start, end) => {
      if (start > end) return null
      const mid = (start + end) >>> 1
      const root = new TreeNode(arr[mid])
      root.left = buildTree(start, mid - 1)
      root.right = buildTree(mid + 1, end)
      return root
   }
   return buildTree(0, arr.length - 1)
};

/**
 * https://bigfrontend.dev/zh/problem/create-an-Event-Emitter
 * 手写EventEmitter
 */

 class EventEmitter {
   constructor() {
     this.source = new Map()
   }
   subscribe(eventName, callback) {
     if (this.source.has(eventName)) {
       this.source.set(eventName,[...this.source.get(eventName), callback])
     } else {
       this.source.set(eventName, [callback])
     }
     return {
       release:()=>{
         if(this.source.has(eventName)){
           const eventFns=this.source.get(eventName)
           eventFns.length===1?this.source.delete(eventName):this.source.set(eventName, eventFns.slice(0,eventFns.length-1))
         }
       }
     }
   }
 
   emit(eventName, ...args) {
     return this.source.has(eventName)&&this.source.get(eventName).map((fn)=>fn(...args))
   }
 }