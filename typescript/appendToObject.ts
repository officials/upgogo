/**
 * 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。
 */

// coding
type AppendToObject<T extends any, K extends string, V extends any> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V
}

// testing

type Test = { id: '1' }
type Result2 = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
