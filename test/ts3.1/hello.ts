import { NonFunction, NonArray } from '../../types';

type func = (...args: any[]) => any;

// $ExpectType object
type nf01 = NonFunction<object>;
// $ExpectType never
type nf02 = NonFunction<func>;
// $ExpectType func
type na01 = NonArray<func>;
// $ExpectType never
type na02 = NonArray<any[]>;
