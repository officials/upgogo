/**
 * new
 */

const _new = (Fn) => {
  let obj = Object.create(null);
  if (Fn.prototype) {
    obj.__proto__ = Fn.prototype
  }
  let res = Fn.apply(obj, Array.prototype.slice.call(arguments, 1))
  if (typeof res == "function" || typeof res === "object") {
    return res
  }
  return obj
}

/**
 * instanceof
 */

const _instanceof = (obj, proro) => {
  let _proro = obj.__proto__
  while (_proro) {
    if (_proro === proro) {
      return true
    }
    _proro = _proro.__proto__
  }
  return false
}


/**
 * bind
 */

Function.prototype._bind = (target, ...args) => {
  let newFunc = function () {
    return this.apply(this instanceof newFunc ? this : target, args)
  }
  newFunc.prototype = this.prototype
  return newFunc
}

/**
 * 防抖
 */

const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

/**
 * 节流
 */

const throttle = (fn, delay) => {
  let flag = true, timer = null
  return (...args) => {
    if (flag) {
      fn.apply(this, args)
      flag = false
    }
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      flag = true
    }, delay)
  }
}

/**
 * call
 */
Function.prototype._call = function (content, ...args) {
  content.fn = this
  let res = content.fn(...args)
  delete content.fn
  return res
}

/**
 * Object.create
 * 创建新对象，且新对象的__proto__是使用对象
 */

const create = (target) => {
  function Fn () {

  }
  Fn.prototype = target
  return new Fn()
}

/**
 * promise
 */

class Promise {
  constructor(excluer) {
    this.state = 'Pending'
    this.value = undefined
    this.reason = undefined
    excluer(this.resolve, this.reject)
  }
  resolve (value) {
    this.value = value
    this.status = 'Resolved'
  }
  reject (reason) {
    this.reason = reason
    this.status = 'Rejected'
  }
  then (onFulfilled, onRejected) {
    if (this.status === 'Resolve') {
      return onFulfilled(this.value)
    }
    if (this.status === 'rejected') {
      onRejected(this.reason)
    }
    return this
  }
}

/**
 * 斐波那契
 */
function dfs (num) {
  if (num <= 2) {
    return num
  }
  return dfs(num - 1) + dfs(num - 2)
}

/**
 * 闭包
 */

for (var i = 0; i < 5; i++) {
  setTimeOut(function (i) {
    console.log(i);
  }(i), 0);
}

/**
 * toTree
 */

const toTree = (id, arr) => {
  if (!arr.length) {
    return null
  }
  let children = []
  for (let i = 0; i < arr.length; i++) {
    if (id === arr[i].pid) {
      children.push({
        ...arr[i],
        children: toTree(arr[i].id, arr)
      })

    }
  }
  return children

}
const toArray = (arr) => {
  const root = {}
  const parent = arr.unshift()
  root = {
    ...parent,
    childrens: arr.length > 0 ? toTree(parent.id, arr) : null
  }
  return root
}


class Mypromise {
  constructor(fn) {
    // 表示状态
    this.state = "pending";
    // 表示then注册的成功函数
    this.successFun = [];
    // 表示then注册的失败函数
    this.failFun = [];

    let resolve = (val) => {
      // 保持状态改变不可变（resolve和reject只准触发一种）
      if (this.state !== "pending") return;

      // 成功触发时机  改变状态 同时执行在then注册的回调事件
      this.state = "success";
      // 为了保证then事件先注册（主要是考虑在promise里面写同步代码） promise规范 这里为模拟异步
      setTimeout(() => {
        // 执行当前事件里面所有的注册函数
        this.successFun.forEach((item) => item.call(this, val));
      });
    };

    let reject = (err) => {
      if (this.state !== "pending") return;
      // 失败触发时机  改变状态 同时执行在then注册的回调事件
      this.state = "fail";
      // 为了保证then事件先注册（主要是考虑在promise里面写同步代码） promise规范 这里模拟异步
      setTimeout(() => {
        this.failFun.forEach((item) => item.call(this, err));
      });
    };
    // 调用函数
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // 实例方法 then

  then(resolveCallback, rejectCallback) {
    // 判断回调是否是函数
    resolveCallback =
      typeof resolveCallback !== "function" ? (v) => v : resolveCallback;
    rejectCallback =
      typeof rejectCallback !== "function"
        ? (err) => {
            throw err;
          }
        : rejectCallback;
    // 为了保持链式调用  继续返回promise
    return new Mypromise((resolve, reject) => {
      // 将回调注册到successFun事件集合里面去
      this.successFun.push((val) => {
        try {
          //    执行回调函数
          let x = resolveCallback(val);
          //（最难的一点）
          // 如果回调函数结果是普通值 那么就resolve出去给下一个then链式调用  如果是一个promise对象（代表又是一个异步） 那么调用x的then方法 将resolve和reject传进去 等到x内部的异步 执行完毕的时候（状态完成）就会自动执行传入的resolve 这样就控制了链式调用的顺序
          x instanceof Mypromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      });

      this.failFun.push((val) => {
        try {
          //    执行回调函数
          let x = rejectCallback(val);
          x instanceof Mypromise ? x.then(resolve, reject) : reject(x);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  //静态方法
  static all(promiseArr) {
    let result = [];
    //声明一个计数器 每一个promise返回就加一
    let count = 0;
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
      //这里用 Promise.resolve包装一下 防止不是Promise类型传进来
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            //这里不能直接push数组  因为要控制顺序一一对应(感谢评论区指正)
            result[i] = res;
            count++;
            //只有全部的promise执行成功之后才resolve出去
            if (count === promiseArr.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  //静态方法
  static race(promiseArr) {
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            //promise数组只要有任何一个promise 状态变更  就可以返回
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
}