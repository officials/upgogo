/**
 * 实现内置的Exclude <T, U>类型，但不能直接使用它本身。
 * 从联合类型T中排除U的类型成员，来构造一个新的类型。
 */

// code

type MyExclude<T, U> = T extends U ? never : T

type Test1 = {
  name: string
  age: number
  sex: number
  sb: boolean
}

type Test2 = {
  name: string
  sb: boolean
}

type Gdd = MyExclude<Test1, Test2>
