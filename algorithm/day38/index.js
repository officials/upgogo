/**
 * https://leetcode-cn.com/problems/first-bad-version
 * 278. 第一个错误的版本
 */

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 0, r = n
    while (l < r) {
      const mid = l + ((r - l) >> 1)
      if (isBadVersion(mid)) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    return l
  };
};


/**
 * 实现parseToMoney
 * 千位分隔符
 * 保留三位小数
 */


const parseToMoney = (num) => {
  const str = num.toFixed(3);
  let [number, float] = str.split('.')
  number = number.replace(/\d(?=(\d{3}) + $)/g, '$&,')
  return float ? number + '.' + float : number
}