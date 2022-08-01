/**
 * 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
 */

// coding

type Trim2<T extends string> = T extends `${' ' | '\n' | '\t'}${infer P}${
  | ' '
  | '\n'
  | '\t'}`
  ? P
  : never

// testing

type trimed2 = Trim2<'  Hello World  '> // expected to be 'Hello World'
