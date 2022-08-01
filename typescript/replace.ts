/**
 * 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。
 */

// coding
type Replace<
  S extends string,
  F extends string,
  T extends string
> = S extends '' ? S : S extends `${infer R}${F}${infer U}` ? `${R}${T}${U}` : S

// testing

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
