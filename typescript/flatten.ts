/**
 * 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。
 */

// coding
type Flatten<T extends any[]> = T extends [infer L, ...infer R]
  ? L extends any[]
    ? [...Flatten<L>, ...Flatten<R>]
    : [L, ...Flatten<R>]
  : T

// testing
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
