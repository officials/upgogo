/**
 * 1.算法题：https://leetcode-cn.com/problems/lru-cache/
 * 146. LRU 缓存
 */
var LRUCache = function (capacity) {
  this.cache = new Array()
  this.size = capacity;
  this.keyArray = new Array()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const index = this.keyArray.indexOf(key)
  if (index < 0) return -1
  const { newkey, newvalue } = this.update(key)
  return newvalue
};

LRUCache.prototype.update = function (key, newValue = undefined) {
  const index = this.keyArray.indexOf(key)
  const current = this.cache.splice(index, 1)[0]
  this.keyArray.splice(index, 1)
  const target = newValue ? { [key]: newValue } : current
  this.cache.push(target)

  const [_key, _value] = Object.entries(target)[0]
  this.keyArray.push(_key)
  return {
    newkey: _key,
    newvalue: _value
  }
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const index = this.keyArray.indexOf(key)
  if (index >= 0) {
    this.update(key, value)
  } else {
    if (this.cache.length >= this.size) {
      this.cache.shift()
      this.keyArray.shift()
    }
    this.cache.push({ [key]: value })
    this.keyArray.push(key)
  }
  return { key: value }
};

/**
 * 2.手写题：https://bigfrontend.dev/problem/implement-Promise-race
 */

function race (promises) {
  // your code here
  return new Promise((resolve, reject) => {
    promises.map((single) => Promise.resolve(single)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
    )
  })
}