/**
 * 元组转集合
 */
type Arr = ['1', '2', '3']

type TupleToUnion<T> = T extends (infer U)[] ? U : never

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
