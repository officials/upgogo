/**
 * 实现一个将接收到的String参数转换为一个字母Union的类型。
 */

// coding

type StringToUnion<T extends string>= T extends `${infer L}${infer R}`? L | StringToUnion<R>:never


// testing
type Test5 = '123';
type Result5 = StringToUnion<Test5>; // expected to be "1" | "2" | "3"