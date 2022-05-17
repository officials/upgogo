/**
 * https://leetcode-cn.com/problems/robot-return-to-origin/
 * 657. 机器人能否返回原点
 */

export function judgeCircle(moves: string): boolean {
  return (
    moves.split('L').length === moves.split('R').length &&
    moves.split('U').length === moves.split('D').length
  )
}

/**
 * 实现深拷贝
 */

// 简单版
export const simpleDeepClone = (target: any): any => {
  if (typeof target !== 'object') return target
  let newObj = Object.create(null)
  for (let item in target) {
    newObj[item] =
      typeof target[item] === 'object'
        ? target[item]
        : simpleDeepClone(target[item])
  }
  return newObj
}


// 常用版


