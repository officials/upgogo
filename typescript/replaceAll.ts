/**
 * 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。
 */

// coding
type ReplaceAll<
  S extends string,
  R extends string,
  T extends string
> = R extends ''
  ? S
  : S extends `${infer B}${R}${infer E}`
  ? `${B}${T}${ReplaceAll<E, R, T>}`
  : S

// testing
type replaced2 = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
