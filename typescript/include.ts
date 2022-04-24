/**
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
 */

// code

type Includes<T extends Array<any>, U extends any> = U extends T[number]
  ? true
  : false

// test
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
