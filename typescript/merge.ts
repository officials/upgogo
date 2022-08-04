/**
 * 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。
 */

// coding

// type Merge<L, R> = {
//   [P in keyof L | keyof R]: P extends L ? L[P] : P extends R ? R[P] : never
// }

type Merge<F, S> = {
  [P in keyof F | keyof S]: 
    P extends keyof S 
    ? S[P] 
    : P extends keyof F
      ? F[P]
      :never
}
// testing

type foo = {
  name: string
  age: string
}

type coo = {
  age: number
  sex: string
}

type Result6 = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
