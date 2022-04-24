/**
 * https://leetcode-cn.com/problems/two-sum
 * 1. 两数之和
 */

var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, Number(map.get(target - nums[i]))]
    }
    map.set(nums[i], i)
  }
};

/**
  function compose(){
    //请实现
    }
  const multiply20 = (price) => price * 20;
  const divide100 = (price) => price / 100;
  const normalizePrice = (price) => price.toFixed(2);
  const discount = compose(normalizePrice, divide100, multiply20);
  discount(200.0); //40.00
 */

const compose = (...fns) => fns.reduce((add, fn) => (...args) => add(fn(...args)))
