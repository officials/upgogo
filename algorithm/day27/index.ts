/**
 * https://leetcode-cn.com/problems/search-insert-position
 * 35. 搜索插入位置
 */

function searchInsert(nums: number[], target: number): number {
  if (!nums.length) return 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    } else if (nums[i] > target) {
      return i
    }
  }
  return nums.length
}

/**
 *  实现React useCallback原理
 */
const memorizeStates = []
const lastDependencies = []
let index = -1
const useCallback = (callback, dependencies) => {
  if (index < 0 || !memorizeStates[index]) {
    // 第一次执行
    memorizeStates[index++] = [callback, dependencies]
    return callback
  } else {
    let [lastCallback, lastDependencies] = memorizeStates[index]
    const hasChange = !dependencies.every(
      (item, index) => item === lastDependencies[index]
    )
    if (hasChange) {
      memorizeStates[index++] = [callback, dependencies]
      return callback
    } else {
      return lastCallback
    }
  }
}
