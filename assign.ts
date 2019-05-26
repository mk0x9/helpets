import { PlainObject, HasTail, Tail } from './types';

export type MergeProps<A extends object, B extends object> = {
    [prop in (keyof A | keyof B)]:
        prop extends keyof B
	? (undefined extends B[prop]
	   ? (prop extends keyof A
              ? A[prop] | B[prop]
              : B[prop])
	   : B[prop])
	: prop extends keyof A
	   ? A[prop]
	   : never;
}

export type MergePropsInObject<A extends object, B extends object> =
    PlainObject<A> extends never
    ? never
    : PlainObject<B> extends never
        ? never
        : MergeProps<A, B>;

export default function assign<T extends object, U extends object[]>(
    source: T,
    ...rest: U
): HasTail<U> extends true
    ? HasTail<Tail<U>> extends true
        ? HasTail<Tail<Tail<U>>> extends true
            ? HasTail<Tail<Tail<Tail<U>>>> extends true
                ? never
                : MergePropsInObject<MergePropsInObject<MergePropsInObject<MergePropsInObject<T, U[0]>, U[1]>, U[2]>, U[3]>
            : MergePropsInObject<MergePropsInObject<MergePropsInObject<T, U[0]>, U[1]>, U[2]>
        : MergePropsInObject<MergePropsInObject<T, U[0]>, U[1]>
    : MergePropsInObject<T, U[0]> {
    return Object.assign({}, source, ...rest);
}
