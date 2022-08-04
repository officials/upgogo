/**
 * 实现一个泛型 AppendArgument<Fn, A>，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。
 */

// coding
type AppendArgument<F extends Function, P extends any> = F extends (
  ...args: infer U
) => infer R
  ? (...args: [...U, P]) => R
  : F

// testing

type Fn = (a: number, b: string) => number

type Result3 = AppendArgument<Fn, boolean>
// 期望是 (a: number, b: string, x: boolean) => number
