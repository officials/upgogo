/**
 * https://leetcode-cn.com/problems/rotate-list/
 * 
 * 61. 旋转链表
  给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

  示例 1：

  输入：head = [1,2,3,4,5], k = 2
  输出：[4,5,1,2,3]
  示例 2：

  输入：head = [0,1,2], k = 4
  输出：[2,0,1]
  
  提示：

  链表中节点的数目在范围 [0, 500] 内
  -100 <= Node.val <= 100
  0 <= k <= 2 * 109
  通过次数238,268提交次数571,152
 */

  /**
   * 核心：形成环形链表，找到移动节点，
   */

  var rotateRight = function(head, k) {
    if(!head || !head.next || !k) return head;
    let len = 1, cur = head;
    while(cur.next){
        cur = cur.next;
        len++;
    }
    let move = len - k % len;
    cur.next = head;
    while(move){
        cur = cur.next;
        move--;
    }
    let ans = cur.next;
    cur.next = null;
    return ans;
  };

