/**
 * 1.算法题：https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * 环形链表
 */
 var detectCycle = function(head) {
  if(!head || !head.next) return null
  let set=new Set(),curr=head
  while(curr){
      if(set.has(curr)){
          return curr
      }else{
          set.add(curr)
      }
      curr=curr.next
  }
  return null
};

/**
 * 2.手写题：https://bigfrontend.dev/zh/problem/implement-Promise-any
 */

 function any(promises) {
  // your code here
  const errors = []
  const len = promises.length
  return new Promise((resolve) => {
    promises.map((promise) => {
      return Promise.resolve(promise)
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          errors.push(err)
          if (errors.length === len) {
            return new AggregateError(
              'No Promise in Promise.any was resolved',
              errors
            )
          }
        })
    })
  })
}