/**
 * deepClone
 */

const simpleDeepClone = (target) => {
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
  if (reg.multiple) {
    str += 'm'
  }
  return str
}
const deepClone = (obj) => {
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
      child[item] = clone(parent[i])
    }
    return child
  }
  return clone(obj)
}