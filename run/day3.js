class MyPromise {
  constructor(fn) {
    this.state = 'pending'
    this.successFn = []
    this.failFn = []
    let resolve = (val) => {
      if (this.state == 'pending') return;
      this.state = 'success'
      // 先注册先执行
      setTimeout(() => {
        this.successFn.forEach((item) => item.call(this, val))
      })
    }
  }

}