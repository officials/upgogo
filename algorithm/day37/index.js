/**
 * https://leetcode-cn.com/problems/sqrtx
 * 69. x 的平方根 
 */

 var mySqrt = function (x) {
  let l = 0, r = x
  while (l <= r) {
    let mid = l + ((r- l) >> 1)
    if (mid * mid <= x) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return r
};


/**
 * https://bigfrontend.dev/zh/problem/implement-lodash-chunk
 * _.chunk() 可以用来按一定长度分割数组。
 */


// code

function chunk(items, size) {
  if (size === 0) return [];
  const res = [];
  for (let i=0; i<items.length; i=i+size) {
    res.push(items.slice(i, i+size));
  }
  return res;
}

// test
chunk([1,2,3,4,5], 1)
// [[1], [2], [3], [4], [5]]

chunk([1,2,3,4,5], 2)
// [[1, 2], [3, 4], [5]]

chunk([1,2,3,4,5], 3)
// [[1, 2, 3], [4, 5]]

chunk([1,2,3,4,5], 4)
// [[1, 2, 3, 4], [5]]

chunk([1,2,3,4,5], 5)
// [[1, 2, 3, 4, 5]]