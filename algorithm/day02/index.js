/**
 * 1.手写算法
  https://leetcode-cn.com/problems/shortest-distance-to-a-character
    给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

    返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

    两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

    示例 1：

    输入：s = "loveleetcode", c = "e"
    输出：[3,2,1,0,1,0,0,1,2,2,1,0]
    解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
    距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
    距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
    对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
    距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。
    示例 2：

    输入：s = "aaab", c = "b"
    输出：[3,2,1,0]

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/shortest-distance-to-a-character
 */

/**
 * 思路：
 * 1. 得到所有目标字符的位置，然后得到对应坐标的最小值
 * 2. 左右指针移动，得到最小值，介于两个方法时间复杂度，使用第二种
 * 用时： 15mins
 * 复杂度 O(nlog(n))
 * 错误次数：1
 */

const shortestToChar = function (s, c) {
  const len = s.length
  let left = 0;
  let right = 0;
  let result = []
  for (let i = 0; i < s.length; i++) {
    left = i - 1;
    right = i + 1
    while (left >= 0 || right < len) {
      if (left < 0) {
        left = 0
      }
      if (right <= i) {
        right = i + 1
      }
      if (s[i] === c) {
        result.push(0)
        break;
      } else if (s[left] === c || s[right] === c) {
        if (s[left] === s[right]) {
          result.push(Math.min(Math.abs(left - i), Math.abs(right - i)))
          break;
        } else {
          if (s[left] === c) {
            result.push(Math.abs(i - left))
            break
          }
          result.push(Math.abs(i - right))
          break;
        }
      } else {
        left--
        right++
      }
    }
  }
  return result
};

/**
 * 2.编程题
 * 实现symbol polyfill
 *  题解：如果浏览器不支持情况下 写出让代码让浏览器支持symbol
 */

/**
 * 1. 首先，唯一性
 * 2. for属性特性
 * 3. 具有toString 方法
 * 4.keyFor 返回一个通过for登记的描述
 */


function SymbolPolyfill (description) {
  if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a contructor')
  var symbol = Object.create({
    toString: function () {
      return `Symbol(${description})`
    },
    valueOf: function () {
      return this
    },
    _NAME_: function () {
      return description
    }
  })
  Object.defineProperties(symbol, {
    '__Description__': {
      value: description,
      writable: false,
      enumerable: false,
      configurable: false
    }
  })
  return symbol
}

SymbolPolyfill.prototype.map = new Map()

SymbolPolyfill.prototype.for = function (description) {

  if (SymbolPolyfill.prototype.map.has(description)) {
    return SymbolPolyfill.prototype.map.get(description)
  } else {
    const symbol = SymbolPolyfill(description)
    SymbolPolyfill.prototype.map.set(description, symbol)
    return symbol
  }
}

SymbolPolyfill.prototype.keyFor = function (symbolObject) {
  if (SymbolPolyfill.prototype.map.has(symbolObject._NAME_)) {
    return symbolObject._NAME_
  }
  return undefined
}



