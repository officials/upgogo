/**
 * 实现类型版本的 Array.unshift。
 */

// code
type Unshift<T extends Array<any>, U extends unknown> = [U, ...T]

// test
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
