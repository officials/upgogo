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
export const simpleDeepClone = (target) => {
  if (typeof target !== 'object') return target;
  let res = {};
  for (let item in target) {
    res[item] = typeof target[item] !== 'object' ? target[item] : simpleDeepClone(target[item]);
  }
  return res
}

const isType = (obj, type) => {
  let targetType = Object.prototype.toString.call(obj)
  return targetType === `[object ${type}]`
}
const getRegExp = (target) => {
  let str = '';
  if (target.global) {
    str += 'g'
  }
  if (target.ignoreCase) {
    str += 'i'
  }
  if (target.multiple) {
    str += 'm'
  }
  return str
}
export const deepClone = (obj) => {
  let parents = [];
  let childrens = [];
  const clone = (parent) => {
    if (parent === null) return null;
    if (typeof parent !== 'object') return parent
    let child, proto
    if (isType(parent, 'Date')) {
      child = new Date(parent.getTime())
    } else if (
      isType(parent, 'Array')
    ) {
      child = []
    } else if (isType(parent, 'RegExp')) {
      child = new RegExp(parent.source, getRegExp(parent))
    } else {
      proto = Object.getPrototypeOf(parent)
      child = Object.create(proto)
    }
    parents.push(proto)
    childrens.push(child)
    if (parents.indexOf(parent)) {
      return childrens[parents.indexOf(parent)]
    }
    for (const i in parent) {
      child[i] = clone(parent[i])
    }
    return child
  }
  return clone(obj)
}


