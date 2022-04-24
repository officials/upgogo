/**
 * 在类型系统里实现通用的 Array.push 。
 */

// code
type Push<T extends Array<any>, U extends unknown> = [...T, U]

// test
type Result = Push<[1, 2], '3'> // [1, 2, '3']
