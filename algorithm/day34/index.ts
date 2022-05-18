/**
 * https://leetcode-cn.com/problems/the-number-of-full-rounds-you-have-played/
 * 1904. 你完成的完整对局数
 */

function numberOfRounds(loginTime: string, logoutTime: string): number {
  const plays = [
    [0, 15],
    [15, 30],
    [30, 45],
    [45, 60],
  ]
  let [sh, sm] = loginTime.split(':').map((item) => Number(item))
  let [eh, em] = logoutTime.split(':').map((item) => Number(item))
  em = em === 0 ? 60 : em
  let count = 0
  let ischange = sh > eh ? false : true
  while ((sh <= eh || !ischange) && sm <= em) {
    for (let i = 0; i < plays.length; i++) {
      if (+sm >= plays[i][0] && sm + 15 < em) {
        count++
      }
      sh++
      sm = 0
      if (sh === 24) {
        ischange = true
        sh = 0
      }
    }
  }

  return count
}

/**
 * Array.prototype.map()
 */

Array.prototype.myMap = function (fn: (item: any, index: number) => any) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i))
  }
  return arr
}
