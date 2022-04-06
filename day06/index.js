/**
 * 1.算法题：https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/
 * 这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，其中的元素最大为10**8。

  arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

  我们最多能将数组分成多少块？

  示例 1:

  输入: arr = [5,4,3,2,1]
  输出: 1
  解释:
  将数组分成2块或者更多块，都无法得到所需的结果。
  例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。 
  示例 2:

  输入: arr = [2,1,3,4,4]
  输出: 4
  解释:
  我们可以把它分成两块，例如 [2, 1], [3, 4, 4]。
  然而，分成 [2, 1], [3], [4], [4] 可以得到最多的块数。 

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 思路：找出数组中需要排序的个数，然后通过最大排序数减去需排序数
 * 结果：做错了
 */
 var maxChunksToSorted = function (arr) {
  const sorted = [...arr];
  sorted.sort((a, b) => a - b);

  let count = 0,
      sum1 = 0,
      sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i];
      sum2 += sorted[i];

      if (sum1 === sum2) {
          count++;
          sum1 = sum2 = 0; // 这行不要也可以啦
      }
  }

  return count;
};

/**
 * 2.手写题：https://bigfrontend.dev/zh/problem/implement-your-own-URLSearchParams
 */

class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    this.keys = []
    this.values = []
    const arr = init.replace('?', '').split('&')
    arr.map((item) => {
      const [key, value] = item.split('=')
      this.keys.push(key)
      this.values.push(value)
      return null
    })
  }

  /** 
   * @params {string} name
   * @params {any} value
   */
  append (name, value) {
    this.keys.push(name)
    this.values.push(value)
  }

  /**
   * @params {string} name
   */
  delete (name) {
    const index = this.keys.indexOf(name)
    if (index >= 0) {
      this.keys.splice(index, 1)
      this.values.splice(index, 1)
    }
  }

  /**
   * @returns {Iterator} 
   */
  entries () {
    let obj = {}
    for (let i = 0; i < this.keys.length; i++) {
      obj[this.keys[i]] = this.values[i]
    }
    return Object.entries(obj)
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach (callback) {
    for (let i = 0; i < this.keys.length; i++) {
      callback(this.values[i], this.keys[i])
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get (name) {
    const index = this.keys.indexOf(name)
    return this.values[index]
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll (name) {
    let arr = []
    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i] === name) {
        arr.push(this.values[i])
      }
    }
    return arr
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has (name) {
    return this.keys.includes(name)
  }

  /**
   * @return {Iterator}
   */
  keys () {
    return this.keys.values()
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set (name, value) {
    const index = this.keys.indexOf(name)
    if (index >= 0) {
      this.keys[index] = name
      this.values[index] = value
    } else {
      this.keys.push(name)
      this.values.push(value)
    }
  }

  // sor all key/value pairs based on the keys
  sort () {
    return this.keys
  }

  /**
   * @return {string}
   */
  toString () {
    let str = '?'
    for (let i = 0; i < this.keys.length; i++) {
      str += `&${this.keys[i]}=${this.values[i]}`
    }
    return str
  }

  /**
   * @return {Iterator} values
   */
  values () {
    return this.values.values()
  }
}