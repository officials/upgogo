/**
 * 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。
 */

// coding
type Capitalize2<T extends string> = T extends `${infer P}${infer R}`
  ? `${Uppercase<P>}${R}`
  : never

// testing

type capitalized = Capitalize2<'hello world'> // expected to be 'Hello world'
