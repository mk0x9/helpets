import assign from '../../assign';

type Eq<A, B, True, False> = [A] extends [B] ? ([B] extends [A] ? True : False) : False;
type Test<A, B> = Eq<A, B, true, never>;

type a = { prop: 'string'; foo: number };

const a: a = {
    prop: 'string',
    foo: 5
};

type b = { prop: 'anotherString'; foo?: boolean };

const b: b = {
    prop: 'anotherString'
};

const ab = assign(a, b);

// $ExpectType true
type test01 = Test<typeof ab.foo, number | boolean | undefined>;

// $ExpectType true
type test02 = Test<typeof ab.prop, 'anotherString'>;
