/**
 * https://leetcode-cn.com/problems/sort-an-array/
 * 912. 排序数组
 */

const sortArray = function (nums: number[]) {
  if (nums.length <= 1) return nums
  let mid = nums.length >> 1
  let l = [],
    r = []
  let prev = nums.splice(mid, 1) as unknown as number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < prev) {
      l.push(nums[i])
    } else {
      r.push(nums[i])
    }
  }
  return sortArray(l).concat(prev, sortArray(r))
}

/**
 *  https://bigfrontend.dev/zh/typescript/ThisParameterType
 * 实现ThisParameterType<T>
 */

// code
type MyThisParameterType<T> = T extends (this:infer P) => any ? P : never

// test

function Foo(this: { a: string }) {}
function Bar() {}

type A = MyThisParameterType<typeof Foo> // {a: string}
type B = MyThisParameterType<typeof Bar>
