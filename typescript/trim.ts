/**
 * 实现Ts 的 trim
 */

// code
type Trim<T extends string> = T extends `${' ' | '\n' | '\t'}${infer R}${
  | ' '
  | '\n'
  | '\t'}`
  ? Trim<R>
  : T

// test
type Xest = Trim<'  BFE.dev  '>
