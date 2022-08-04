/**
 * 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。
 */


// coding

type Absolute<T extends string | number | bigint> = `${T}` extends `-${infer R}`? R : `${T}`


// testing

type Test22 = -100;
type Result4 = Absolute<Test22>; // expected to be "100"