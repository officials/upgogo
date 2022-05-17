/**
 * https://leetcode-cn.com/problems/sliding-window-maximum/
 * 239. 滑动窗口最大值
 */

// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let l = 0,
//     r = k
//   let result = []
//   while (r <= nums.length) {
//     result.push(Math.max(...nums.slice(l, r)))
//     l += 1
//     r += 1
//   }
//   return result
// }

var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  const q = [];
  for (let i = 0; i < k; i++) {
      while (q.length && nums[i] >= nums[q[q.length - 1]]) {
          q.pop();
      }
      q.push(i);
  }

  const ans = [nums[q[0]]];
  for (let i = k; i < n; i++) {
      while (q.length && nums[i] >= nums[q[q.length - 1]]) {
          q.pop();
      }
      q.push(i);
      while (q[0] <= i - k) {
          q.shift();
      }
      ans.push(nums[q[0]]);
  }
  return ans;
};

/**
 * 实现React useMemo原理
 */
