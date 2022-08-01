/**
 * 最后一个元素
 */

// coding

type Last<T extends any[]> = T extends [...infer R, infer L] ? L : never

// testing
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
