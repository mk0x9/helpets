export type NonFunction<T> = T extends (...args: any[]) => any ? never : T;

export type NonArray<T> = T extends any[] ? never : T;

export type PlainObject<T extends object> = NonFunction<NonArray<T>>;

type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;

type test9 = Head<[1, 2, string, number]>;
type test2 = Head<[]>;

export type Tail<T extends any[]> = ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any) ? TT : [];

type testTail = Tail<[number, string, boolean, string[], 1]>;

export type HasTail<T extends any[]> = T extends ([] | [any]) ? false : true;

type ObjectInfer<O> = O extends { a: infer A } ? A : never;
type FunctionInfer<F> = F extends (...args: infer A) => infer R ? [A, R] : never;

const fn01 = (a: number, b: any) => true;
type test19 = FunctionInfer<typeof fn01>;

type ClassInfer<C> = C extends Promise<infer G> ? G : never;
const promise = new Promise<string>(() => {});
type test20 = ClassInfer<typeof promise>;

type ArrayInfer<A> = A extends (infer G)[] ? G : never;
const arr = ['sa', 1, 2];
type test21 = ArrayInfer<typeof arr>;

type TupleInfer<T> = T extends [infer A, ...(infer B)[]] ? [A, B] : never;
type test22 = TupleInfer<[string, number, boolean]>;
