/**
 * 实现 TrimLeft<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。
 */

// coding

type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer R}`
  ? R
  : never

// testing
type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
