/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * 26. 删除有序数组中的重复项
 */

function removeDuplicates(nums: number[]): number {
  if(!nums.length) return 0
  let slow=1,fast=1;
  const len=nums.length;
  while(fast<len) {
    if(nums[fast] !== nums[fast-1]) {
      nums[slow]=nums[fast];
      ++slow
    }
    ++fast;
  }
  return slow
}

/**
 * https://bigfrontend.dev/zh/typescript/OmitThisParameter
 */

 type MyOmitThisParameter<T> = T extends (...args: infer A) => infer B
 ? (...args: A) => B
 : T;
