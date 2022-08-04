/**
 * 计算字符串的长度，类似于 String#length 。
 */

// coding

// testing
type StringLength<S extends string> = S extends { length: infer L } ? L : never

type aa=StringLength<'12345'>
