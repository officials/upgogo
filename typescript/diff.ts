/**
 * 获取两个接口类型中的差值属性。
 */

// coding

type Diff<L, R> = {
  [P in keyof L | keyof R]: P extends keyof L
    ? P extends keyof R
      ? L[P] extends R[P]
        ? never
        : L[P]
      : L[P]
    : P extends keyof R
    ? R[P]
    : never
}

// testing
type Foo = {
  a: string
  b: number
}
type Bar = {
  a: string
  c: boolean
}

type Result7 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result8 = Diff<Bar, Foo> // { b: number, c: boolean }
