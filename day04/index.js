/**
 * 1.手写题：https://bigfrontend.dev/zh/problem/implement-Object.is
 */

function is (a, b) {
  // your code here
  if (typeof a === typeof b) {
    if (typeof a === 'number') {
      if (Number.isNaN(a) && Number.isNaN(b)) return true
      return a === b && a.toLocaleString() === b.toLocaleString()
    } else {
      return a === b
    }
  }
  return false
}


/**
 * 2.算法题：https://leetcode-cn.com/problems/decode-string/
 * 394. 字符串解码
  给定一个经过编码的字符串，返回它解码后的字符串。

  编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

  你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

  此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

  示例 1：

  输入：s = "3[a]2[bc]"
  输出："aaabcbc"
  示例 2：

  输入：s = "3[a2[c]]" 
  输出："accaccacc"
  示例 3：

  输入：s = "2[abc]3[cd]ef"
  输出："abcabccdcdcdef"
  示例 4：

  输入：s = "abc3[cd]xyz"
  输出："abccdcdcdxyz"
 */
/**
 * 思路： 通过匹配左括号，重复括号中的字符，直到字符中不含括号
 * 用时：20mins 一句话  ---  真垃圾我
 * 提交错误次数：3
 * @param {*} s 
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 考虑没有数字的情况
  if (!s.includes('[')) return s
  let str = '', start = 0, end = 0, repeatNum = 0, index = 0, strack = [], numberStart = -1
  while (true) {
    if (index === s.length) {
      return decodeString(str)
    }
    if (Infinity > Number(s[index])) {
      numberStart === -1 && (numberStart = index)
    } else {
      if (s[index] === '[') {
        if (strack.length === 0) {
          repeatNum = Number(s.slice(numberStart, index))
          start = index + 1
          numberStart = -1
        }
        strack.push('[')
      } else if (s[index] === ']') {
        strack.pop();
        console.log(strack, index)
        if (strack.length === 0) {
          end = index - 1;
          str += s.slice(start, end + 1).repeat(repeatNum)
        }
      } else {
        if (strack.length === 0) {
          str += s[index]
        }
      }
    }
    index++
  }
  return str
}