/**
 * 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
 */

// code
type MyReturnType<T> = T extends (...args: any) => infer U ? U : never

// test
const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
