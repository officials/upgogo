/**
 * 1. 手写算法
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 */

/**
 * 思路
 * 1. 数字与数组比较产妇
 * 2. 使用长的进行循环
 * 
 * 第一次 想错了，溢出  用时30min  .... 
 * 第二次 想到了内存占用比较大的方式，用时10min
 */

const addToArrayForm = function (num, k) {
  const arr = `${k}`.split('')
  const max = Math.max(arr.length, num.length)
  let ten = 0
  if (arr.length < max) {
    arr.unshift(...new Array(max - arr.length).fill(0))
  }
  if (num.length < max) {
    num.unshift(...new Array(max - num.length).fill(0))
  }
  for (let i = max - 1; i >= 0; i--) {
    const count = Number(num[i] || 0) + Number(arr[i] || 0) + ten
    ten = count >= 10 ? 1 : 0
    num[i] = count % 10
    min--
  }
  if (ten) {
    num.unshift(1)
  }
  return num
}


// 2.编程题
// //1.手写函数柯里化
// function curry(func) {
//   //此处补全
// }
// function sum(a, b, c) {
//   return a + b + c;
// }

// let curriedSum = curry(sum);

// alert(curriedSum(1, 2, 3)); // 6, still callable normally
// alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// alert(curriedSum(1)(2)(3)); // 6, full currying

const curry = (fn) => {
  const cb = (...args) => {
    console.log(args)
    return args.length < fn.length ? (...arr) => cb(...args, ...arr) : fn(...args)
  }
  return cb
}

const sum = (a, b, c) => {
  return a + b + c
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3))

// 算法目标：10分钟之内运行完成
// 手写目标：5分钟运行完成

//  🐻🐻志佳老师🐻