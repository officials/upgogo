/**
 * 1.编程题：https://bigfrontend.dev/zh/problem/implement-Promise-allSettled
 */

/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled (promises) {
  if (!promises.length) {
    return Promise.resolve([]);
  }
  // your code here
  let result = []
  const size = promises.length;
  return new Promise((resolve) => {
    promises.map((promise) => Promise.resolve(promise).then((res) => {
      result.push({
        status: 'fulfilled',
        value: res
      })
    }).catch((err) => {
      result.push({
        status: 'rejected',
        reason: err
      })
    }).finally(() => {
      if (result.length === size) {
        resolve(result)
      }
    })
    )
  })
}



/**
 * 2.法题：https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 */

/**
 * 请你设计一个支持下述操作的栈。

  实现自定义栈类 CustomStack ：

  CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
  void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
  int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
  void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。
  输入：
  ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
  [[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
  输出：
  [null,null,null,2,null,null,null,null,null,103,202,201,-1]
  解释：
  CustomStack customStack = new CustomStack(3); // 栈是空的 []
  customStack.push(1);                          // 栈变为 [1]
  customStack.push(2);                          // 栈变为 [1, 2]
  customStack.pop();                            // 返回 2 --> 返回栈顶值 2，栈变为 [1]
  customStack.push(2);                          // 栈变为 [1, 2]
  customStack.push(3);                          // 栈变为 [1, 2, 3]
  customStack.push(4);                          // 栈仍然是 [1, 2, 3]，不能添加其他元素使栈大小变为 4
  customStack.increment(5, 100);                // 栈变为 [101, 102, 103]
  customStack.increment(2, 100);                // 栈变为 [201, 202, 103]
  customStack.pop();                            // 返回 103 --> 返回栈顶值 103，栈变为 [201, 202]
  customStack.pop();                            // 返回 202 --> 返回栈顶值 202，栈变为 [201]
  customStack.pop();                            // 返回 201 --> 返回栈顶值 201，栈变为 []
  customStack.pop();                            // 返回 -1 --> 栈为空，返回 -1
 */

/**
* @param {number} maxSize
*/
var CustomStack = function (maxSize) {
  this.strack = new Array()
  this.size = 0
  this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.size < this.maxSize) {
    this.size += 1
    return this.strack.push(x)
  } else {
    return
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.size === 0) {
    return
  } else {
    this.size -= 1
    return this.strack.pop()
  }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  let index = 0
  while (index < k && index < this.size) {
    this.strack[index] += val
  }
  return this.strack
};
