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

/**
 * quickSort
 */

const quickSort = (nums) => {
  if (nums.length <= 1) return nums
  let mid = nums.length >> 1;
  let l = [], r = []
  let prev = nums.splice(mid, 1)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < prev) {
      l.push(nums[i])
    } else {
      r.push(nums[i])
    }
  }
  return quickSort(l).concat(prev, quickSort(r))
}

/**
 * 归并排序
 */

const merge = (left, right) => {
  let result = []
  let l = 0, r = 0
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }
  while (l < left.length) {
    result.push(left[l++])
  }
  while (r < right.length) {
    result.push(right[r++])
  }
  return result
}

const mergeSort = (nums) => {
  if (nums.length === 1) return nums
  let mid = nums.length >> 1
  let left = nums.slice(0, mid)
  let right = nums.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}